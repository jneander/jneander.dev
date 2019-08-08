$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))

require "tasks/task_helper"
require "yaml"

Dir.glob("tasks/*.rake").each {|r| load r}

desc "Build all posts, then serve the Jekyll site"
task default: [:serve]
