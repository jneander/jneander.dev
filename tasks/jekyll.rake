require "jekyll"

def config
  Jekyll.configuration(options)
end

def options
  @options ||= {port: 4000, source: "jekyll"}
end

def set_port(port)
  options.merge!(port: port) if port
end

def set_limit(limit)
  options.merge!(limit_posts: limit.to_i) if limit
end

def build
  inform("\nBuilding the Jekyll site")
  Jekyll::Commands::Build.process(config)
end

def serve
  inform("\nServing the Jekyll site")
  Jekyll::Commands::Serve.process(config)
end

def build_and_serve
  options.merge!(watch: true, serving: true)
  build; serve
end

namespace :build do
  desc "Build the most recent :limit posts for the Jekyll site"
  task :recent, :limit do |t, args|
    set_limit(args[:limit])
    build
  end

  desc "Build all posts for the Jekyll site"
  task :all do
    build
  end
end

desc "alias of 'build:all'"
task build: ["build:all"]

namespace :serve do
  desc "Build all posts, then serve the Jekyll site (optional: :port)"
  task :all, :port do |t, args|
    set_port(args[:port])
    build_and_serve
  end

  desc "Build the most recent :limit posts, then serve the Jekyll site (optional: :port)"
  task :recent, :limit, :port do |t, args|
    set_limit(args[:limit])
    set_port(args[:port])
    build_and_serve
  end
end

desc "alias of 'serve:all'"
task serve: ["serve:all"]
