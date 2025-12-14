# Go SDK

Official Go client library for CyberAPI.

## Installation

```bash
go get github.com/cyberapi-io/sdk/go
```

## Usage

```go
package main

import (
	"fmt"
	"log"

	"github.com/cyberapi-io/sdk/go/cyberapi"
)

func main() {
	// Initialize client
	client := cyberapi.NewClient("your_api_key")

	// Check domain
	result, err := client.Check("example.com", "")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("Risk Score: %d\n", result.RiskScore)
}
```

[View Source on GitHub →](https://github.com/cyberapi-io/sdk/tree/main/go)
