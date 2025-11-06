require 'rails/all'
module Taskflow
  class Application < Rails::Application
    config.load_defaults 7.1
    config.api_only = true
  end
end
