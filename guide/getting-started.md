# Quick Start

Get up and running with CyberAPI in under 2 minutes.

## 1. Get Your API Key

Choose a plan and get your API key instantly:

- **Startup**: €9/month - 10,000 requests
- **Business**: €29/month - 50,000 requests

[Get API Key →](https://cyberapi.io/#pricing)

## 2. Make Your First Request

### Using curl

```bash
curl "https://threats.cyberapi.io/api/v1/check?domain=suspicious-site.xyz" \
  -H "X-API-Key: your_api_key_here"
```

### Response

```json
{
  "domain": "suspicious-site.xyz",
  "risk_score": 85,
  "verdict": "malicious",
  "is_malicious": true,
  "signals": {
    "blacklist_hits": 3,
    "ml_score": 92,
    "age_days": 7
  },
  "dns_security": {
    "has_mx": true,
    "spf_record": "v=spf1 include:_spf.google.com ~all",
    "dmarc_record": "v=DMARC1; p=reject;",
    "valid_config": true
  },
  "ssl_info": {
    "valid": true,
    "issuer": "DigiCert API G1",
    "expires_at": "2025-12-31T23:59:59",
    "days_to_expire": 180,
    "is_self_signed": false,
    "protocol": "TLSv1.3"
  },
  "seo_health": {
    "score": 85,
    "issues": []
  },
  "content_analysis": {
    "title": "Suspicious Login Page",
    "description": "Please login to continue",
    "social_links": [],
    "emails": ["admin@suspicious.xyz"]
  },
  "geo_location": {
    "country": "United States",
    "city": "Ashburn",
    "asn": 15169,
    "isp": "Google LLC"
  },
  "tech_stack": {
    "server": "nginx",
    "framework": "PHP"
  },
  "cached": false
}
```

## 3. Use an SDK

Choose your preferred language:

::: code-group

```python [Python]
from cyberapi import CyberAPI

client = CyberAPI(api_key="your_key")
result = client.check(domain="example.com")
print(f"Risk: {result['risk_score']}")
```

```javascript [JavaScript]
const CyberAPI = require('./cyberapi');

const client = new CyberAPI('your_key');
const result = await client.check({ domain: 'example.com' });
console.log('Risk:', result.risk_score);
```

```php [PHP]
use CyberAPI\CyberAPI;

$client = new CyberAPI('your_key');
$result = $client->check('example.com');
echo "Risk: " . $result['risk_score'];
```

:::

## Next Steps

- [Authentication →](/guide/authentication)
- [API Reference →](/api/check-endpoint)
- [SDK Documentation →](/guide/sdks)
- [Best Practices →](/guide/best-practices)

## Need Help?

- 📧 Email: [inbox@cyberapi.io](mailto:inbox@cyberapi.io)
- 💻 GitHub: [cyberapi-io/sdk](https://github.com/cyberapi-io/sdk)
- 📚 Swagger: [cyberapi.io/docs/api](https://cyberapi.io/docs/api/check-endpoint)
