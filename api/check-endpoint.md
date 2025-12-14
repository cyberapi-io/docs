# Check Endpoint

The `/check` endpoint analyzes domains and IP addresses for potential threats.

## Request

```http
GET /api/v1/check?domain={domain}&ip={ip}
```

### Base URL

```
https://threats.cyberapi.io
```

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `domain` | string | No* | Domain name to check (e.g., `example.com`) |
| `ip` | string | No* | IP address to check (e.g., `192.0.2.1`) |

*Either `domain` or `ip` is required

### Headers

| Header | Required | Description |
|--------|----------|-------------|
| `X-API-Key` | Yes | Your API authentication key |
| `Accept` | No | Response format (default: `application/json`) |

## Response

### Success Response

```json
{
  "domain": "example.com",
  "risk_score": 15,
  "verdict": "clean",
  "signals": [],
  "dns_security": {
    "has_mx": true,
    "spf_record": "v=spf1 include:_spf.google.com ~all",
    "dmarc_record": "v=DMARC1; p=reject;",
    "valid_config": true
  },
  "ssl_info": {
    "valid": true,
    "issuer": "DigiCert",
    "expires_at": "2025-12-31T23:59:59",
    "days_to_expire": 365,
    "is_self_signed": false,
    "protocol": "TLSv1.3"
  },
  "seo_health": {
    "score": 90,
    "issues": []
  },
  "content_analysis": {
    "title": "Example Domain",
    "description": "This domain is established to be used for illustrative examples in documents.",
    "social_links": [],
    "emails": []
  },
  "geo_location": {
    "country": "US",
    "city": "Mountain View",
    "asn": 15169,
    "isp": "Google LLC"
  },
  "tech_stack": {
    "server": "ECS",
    "framework": null
  },
  "cached": true
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Analyzed domain name |
| `risk_score` | integer | Risk score from 0-100 (higher = riskier) |
| `verdict` | string | Overall verdict: `safe`, `suspicious`, or `malicious` |
| `signals` | array | List of detected threat signals |
| `dns_security` | object | MX, SPF, DMARC configuration status |
| `ssl_info` | object | SSL certificate validity, issuer, and expiration |
| `seo_health` | object | Basic SEO checks (Robots.txt, Sitemap) |
| `site_content` | object | Content analysis (Title, Description, Contacts) |
| `tech_stack` | object | Detected Server and Framework |
| `security_headers` | object | Analysis of HSTS, CSP, and X-Frame-Options |
| `cookies` | object | Analysis of cookies (Secure, HttpOnly, SameSite) |
| `geo_location` | object | Physical location and ASN/ISP data |
| `carbon_footprint` | object | Green hosting status |
| `cached` | boolean | Whether result was served from cache |

### Response Headers

| Header | Description |
|--------|-------------|
| `X-Cache` | Cache status: `HIT` or `MISS` |
| `X-RateLimit-Remaining` | Remaining requests in current period |
| `X-RateLimit-Reset` | Unix timestamp when limit resets |

## Examples

### Check a Domain

::: code-group

```bash [curl]
curl "https://threats.cyberapi.io/api/v1/check?domain=example.com" \
  -H "X-API-Key: your_key"
```

```python [Python]
from cyberapi import CyberAPI

client = CyberAPI(api_key="your_key")
result = client.check(domain="example.com")
```

```javascript [JavaScript]
const client = new CyberAPI('your_key');
const result = await client.check({ domain: 'example.com' });
```

:::

### Check an IP Address

::: code-group

```bash [curl]
curl "https://threats.cyberapi.io/api/v1/check?ip=192.0.2.1" \
  -H "X-API-Key: your_key"
```

```python [Python]
result = client.check(ip="192.0.2.1")
```

```javascript [JavaScript]
const result = await client.check({ ip: '192.0.2.1' });
```

:::

## Risk Score Interpretation

| Score Range | Verdict | Recommended Action |
|-------------|---------|-------------------|
| 0-30 | Safe | Allow |
| 31-70 | Suspicious | Review manually or add extra verification |
| 71-100 | Malicious | Block immediately |

## Rate Limiting

See [Rate Limiting](/guide/rate-limiting) for details on quotas and handling limits.

## Error Responses

See [Error Codes](/api/error-codes) for complete error reference.
