def inform(message)
  puts "\e[34m#{message}\e[0m"
end

def error(message)
  puts "\e[31m#{message}\e[0m"
end

def increment
  print "\e[32m.\e[0m"
end
