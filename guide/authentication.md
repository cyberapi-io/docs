# Authentication

All API requests require authentication using an API key.

## API Key Header

Include your API key in the `X-API-Key` header:

```http
GET /api/v1/check?domain=example.com HTTP/1.1
Host: threats.cyberapi.io
X-API-Key: your_api_key_here
```

## Security Best Practices

::: warning IMPORTANT
Never expose your API key in:
- Client-side JavaScript code
- Public GitHub repositories
- Browser console logs
- Error messages
:::

### Secure Storage

Store API keys in environment variables:

::: code-group

```bash [.env]
CYBERAPI_KEY=your_api_key_here
```

```python [Python]
import os
api_key = os.getenv('CYBERAPI_KEY')
```

```javascript [JavaScript]
const apiKey = process.env.CYBERAPI_KEY;
```

:::

## Managing API Keys

### Rotation

Rotate your API key periodically for security:

1. Contact support at [inbox@cyberapi.io](mailto:inbox@cyberapi.io)
2. Request a new API key
3. Update your application
4. Old key remains valid for 24 hours

### Multiple Keys

Business tier customers can request multiple API keys for different environments:

- **Production**: Main application
- **Staging**: Testing environment
- **Development**: Local development

Contact support to set this up.
