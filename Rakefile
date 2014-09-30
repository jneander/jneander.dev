$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))

require "tasks/task_helper"
require "yaml"

unless File.exists?("config.yml")
  error "Please provide configuration in 'config.yml'."
  puts "Use 'config_example.yml' as a guide."
  exit
end

CONFIG = YAML.load_file("config.yml")

Dir.glob("tasks/*.rake").each {|r| load r}

desc "Run all specs, build all posts, then serve the Jekyll site"
task default: [:spec, :serve]
