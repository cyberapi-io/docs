# Python SDK

Official Python client library for CyberAPI.

## Installation

Currently, the SDK is available as a single file drop-in.

1. Download [`cyberapi.py`](https://github.com/cyberapi-io/sdk/blob/main/python/cyberapi.py)
2. Place it in your project directory
3. Install dependencies:

```bash
pip install requests
```

## Usage

```python
from cyberapi import CyberAPI

# Initialize
client = CyberAPI(api_key="your_api_key")

# Check a domain
result = client.check(domain="example.com")

if result["risk_score"] > 80:
    print("Dangerous domain!")
else:
    print("Safe domain")
```

## Features

- **Async Support**: Native `asyncio` compatibility
- **Type Hints**: Full PEP 484 support
- **Retries**: Automatic retry on network failure

[View Source on GitHub →](https://github.com/cyberapi-io/sdk/tree/main/python)
