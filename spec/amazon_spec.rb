require "amazon"
require "spec_helper"

describe Amazon::S3 do
  let(:source_path) { TMP_PATH }
  let(:options) {{
    access_key: "xxx",
    secret_key: "yyy",
    bucket_name: "example_site",
    source_path: source_path
  }}

  before(:each) do
    WebMock.disable_net_connect!
    ensure_path!(source_path)
    stub_request(:any, /s3.amazonaws.com/)
  end

  it "raises an ArgumentError when not given a :source_path" do
    options.delete(:source_path)
    expect {Amazon::S3.new(options)}.to raise_error(ArgumentError)
  end

  it "raises an ArgumentError when given an invalid :source_path" do
    options[:source_path] = ""
    expect {Amazon::S3.new(options)}.to raise_error(ArgumentError)
  end

  it "raises an ArgumentError when given an non-existant :source_path" do
    options[:source_path] = tmp("does_not_exist")
    expect {Amazon::S3.new(options)}.to raise_error(ArgumentError)
  end

  it "raises an ArgumentError when not given an :access_key" do
    options.delete(:access_key)
    expect {Amazon::S3.new(options)}.to raise_error(ArgumentError)
  end

  it "raises an ArgumentError when not given a :secret_key" do
    options.delete(:secret_key)
    expect {Amazon::S3.new(options)}.to raise_error(ArgumentError)
  end

  it "raises an ArgumentError when not given a :bucket_name" do
    options.delete(:bucket_name)
    expect {Amazon::S3.new(options)}.to raise_error(ArgumentError)
  end

  describe "#deploy" do
    let(:bucket) { Amazon::S3.new(options) }

    it "deploys each file in the given 'source_path'" do
      create_file!("example", "example content")
      create_file!("sample", "sample content")
      bucket.deploy
      assert_uploaded("example", "example content")
      assert_uploaded("sample", "sample content")
    end

    it "uses the given 'target_path'" do
      options.merge!(target_path: "target")
      create_file!("example", "example content")
      bucket.deploy
      assert_uploaded("target/example", "example content")
    end

    it "removes whitespace surrounding the given 'target_path'" do
      options.merge!(target_path: " target ")
      create_file!("example", "example content")
      bucket.deploy
      assert_uploaded("target/example", "example content")
    end

    it "ignores a blank 'target_path'" do
      options.merge!(target_path: "")
      create_file!("example", "example content")
      bucket.deploy
      assert_uploaded("example", "example content")
    end

    it "ignores an all-whitespace 'target_path'" do
      options.merge!(target_path: "    ")
      create_file!("example", "example content")
      bucket.deploy
      assert_uploaded("example", "example content")
    end

    it "ignores trailing slashes on the 'source_path'" do
      options.merge!(source_path: TMP_PATH + "/", target_path: "target")
      create_file!("example", "example content")
      bucket.deploy
      assert_uploaded("target/example", "example content")
    end

    it "ignores leading slashes on the 'target_path'" do
      options.merge!(target_path: "/target")
      create_file!("example", "example content")
      bucket.deploy
      assert_uploaded("target/example", "example content")
    end

    it "ignores trailing slashes on the 'target_path'" do
      options.merge!(target_path: "target/")
      create_file!("example", "example content")
      bucket.deploy
      assert_uploaded("target/example", "example content")
    end

    it "calls the given block for each file" do
      options.merge!(target_path: "/target")
      create_file!("example", "example content")
      create_file!("sample", "sample content")
      yielded = []
      bucket.deploy do |file| yielded << file end
      expect(yielded).to match_array(["example", "sample"])
    end

    it "returns the list of files" do
      options.merge!(target_path: "/target")
      create_file!("example", "example content")
      create_file!("sample", "sample content")
      expect(bucket.deploy).to match_array(["example", "sample"])
    end
  end

  def assert_uploaded(target, contents)
    path = "https://s3.amazonaws.com/#{options[:bucket_name]}/#{target}"
    assert_requested(:put, path, :body => contents, :times => 1)
  end
end
