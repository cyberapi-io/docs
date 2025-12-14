# PHP SDK

Official PHP client library for CyberAPI.

## Installation

### Via Composer (Recommended)

```bash
composer require cyberapi/sdk
```

*Note: If package is not yet on Packagist, use the manual method below.*

### Manual Installation

1. Download [`CyberAPI.php`](https://github.com/cyberapi-io/sdk/blob/main/php/CyberAPI.php)
2. Include it in your script:

```php
require_once 'path/to/CyberAPI.php';
```

## Usage

```php
use CyberAPI\CyberAPI;

$client = new CyberAPI('your_api_key');

try {
    $result = $client->check('example.com');
    
    if ($result['risk_score'] > 75) {
        echo "High Risk Detected!";
    }
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
```

[View Source on GitHub →](https://github.com/cyberapi-io/sdk/tree/main/php)
