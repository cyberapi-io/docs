# JavaScript / Node.js SDK

Official JavaScript client library for CyberAPI.

## Installation

1. Download [`cyberapi.js`](https://github.com/cyberapi-io/sdk/blob/main/javascript/cyberapi.js)
2. Add it to your project

## Usage

### Node.js (CommonJS)

```javascript
const CyberAPI = require('./cyberapi');

const client = new CyberAPI('your_api_key');

async function check() {
    const result = await client.check({ domain: 'example.com' });
    console.log(`Risk Score: ${result.risk_score}`);
}

check();
```

### Browser (ESM)

```html
<script type="module">
  import CyberAPI from './cyberapi.js';
  
  const client = new CyberAPI('your_api_key');
  // ...
</script>
```

[View Source on GitHub →](https://github.com/cyberapi-io/sdk/tree/main/javascript)
