# Ruby SDK

Official Ruby client library for CyberAPI.

## Installation

Add to your `Gemfile`:

```ruby
gem 'cyberapi'
```

And run:

```bash
bundle install
```

*Note: If gem is not published, copy `lib/cyberapi.rb` to your project.*

## Usage

```ruby
require 'cyberapi'

client = CyberAPI::Client.new(api_key: 'your_api_key')

result = client.check(domain: 'example.com')

puts "Risk Score: #{result['risk_score']}"

if result['is_malicious']
  puts "Verdict: MALICIOUS"
end
```

[View Source on GitHub →](https://github.com/cyberapi-io/sdk/tree/main/ruby)
