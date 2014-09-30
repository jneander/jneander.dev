require "aws-sdk"

module Amazon
  class S3
    def initialize(options)
      @source_path = strip_slashes(options.delete(:source_path))
      @target_path = strip_slashes(options.delete(:target_path))
      @options = options
      validate_options!
    end

    def deploy
      files = source_files
      Dir.chdir(source_path) do
        files.each do |file|
          write(target_file(file), File.read(file))
          yield file if block_given?
        end
      end
      files
    end

    private

    attr_reader :options, :source_path, :target_path

    def validate_options!
      validate_amazon_options!
      validate_source_path!
    end

    def validate_amazon_options!
      all_options_valid = options[:access_key] &&
                          options[:secret_key] &&
                          options[:bucket_name]
      unless all_options_valid
        raise ArgumentError, ":access_key, :secret_key, and :bucket_name are required options"
      end
    end

    def validate_source_path!
      source_path_valid = source_path && File.directory?(source_path)
      unless source_path_valid
        raise ArgumentError, "a valid :source_path is required"
      end
    end

    def source_files
      Dir["#{source_path}/**/*"].
        reject {|file| File.directory?(file)}.
        map {|file| file.gsub(/^#{source_path}\/+/, "")}
    end

    def target_file(file)
      clean_path = (target_path || "").strip
      clean_path.empty? ? file : "#{clean_path}/#{file}"
    end

    def strip_slashes(path)
      path.split("/").reject(&:empty?).join("/") if path
    end

    def write(path, data)
      bucket.object(path).put(body: data)
    end

    def bucket
      @bucket ||= s3.bucket(options[:bucket_name])
    end

    def s3
      @s3 ||= Aws::S3::Resource.new(region: "us-east-1", access_key_id: options[:access_key], secret_access_key: options[:secret_key])
    end
  end
end
