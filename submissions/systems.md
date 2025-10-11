# ⚙️ Systems & Tools Submissions

Welcome to the **Systems & Tools Submissions** section!  

Here you’ll find **real implementations of system-level or utility projects** inspired by [categories/systems.md](../categories/systems.md). Each entry includes a short description, tech stack, and features added.  

Developers are encouraged to submit their own contributions using the [implementation template](../templates/implementation-template.md).  
Projects can include CLI tools, reverse proxies, schedulers, monitoring systems, or any utility software.  

✅ **Tips for contributors:**
- Link your submission to the **original idea**.  
- Include tech stack (Go, Rust, Python, Node.js, or any other appropriate framework).  
- Mention optional bonus features or enhancements you implemented.

---

### 🚀 Hermyx — Blazing-Fast Reverse Proxy
- **Author:** [spyder01](https://github.com/spyder01)
- **Idea:** [Minimal Reverse Proxy](../categories/systems.md#minimal-reverse-proxy)
- **Repo / Demo:** [https://github.com/spyder01/hermyx](https://github.com/spyder01/hermyx)
- **Description:** Hermyx is a blazing-fast, minimal reverse proxy built in Go using `fasthttp`. It supports:
  - Route-specific caching rules
  - Graceful shutdown
  - Flexible YAML configuration
  - Intelligent logging  
  Hermyx is designed for microservices, edge routing, and lightweight API gateways, emphasizing simplicity and performance.  
- **Tech:** Go, Fasthttp, YAML
- **Features Implemented:**  
  - Configurable caching with expiration rules  
  - Graceful shutdown handling with PID tracking  
  - Route-based logging and metrics  
- **Bonus / Future Challenges:**  
  - Distributed caching support  
  - Rate-limiting per route  
  - Web UI for monitoring cache hits/misses
