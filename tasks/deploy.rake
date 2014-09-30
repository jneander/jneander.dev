require "lib/amazon"

def print_deployment_report(files)
  puts $/,
       "Deployment complete",
       "Total files: #{files.count}",
       $/
end

desc "Run all specs, build all posts, then deploy to Amazon on success"
task publish: [:spec, :build] do
  inform("\nDeploying to Amazon")
  files = Amazon::S3.new(CONFIG[:amazon]).deploy do increment end
  print_deployment_report(files)
end
