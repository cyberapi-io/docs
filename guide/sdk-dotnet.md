# .NET SDK

Official C# client library for CyberAPI.

## Installation

Install via NuGet:

```bash
dotnet add package CyberAPI.SDK
```

*Note: If package is not on NuGet, reference the project directly.*

## Usage

```csharp
using CyberAPI;

// Initialize
using var client = new CyberAPIClient("your_api_key");

// Check Domain
var result = await client.CheckAsync("example.com");

Console.WriteLine($"Risk Score: {result.RiskScore}");

if (result.IsMalicious)
{
    Console.WriteLine("Warning: Domain is malicious!");
}
```

## Features

- **Async/Await**: Built for modern .NET async patterns
- **Strongly Typed**: Full IntelliSense support
- **.NET Standard**: Compatible with .NET Core, .NET 5/6/7, and Framework

[View Source on GitHub →](https://github.com/cyberapi-io/sdk/tree/main/dotnet)
