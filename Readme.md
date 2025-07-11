# 📧 Email Service API (Mock) with Fallback & Rate Limiting

### This project implements a simple email-sending service using Node.js and Express. It features two mock email providers with automatic fallback, simple rate-limiting, and input validation.

---

## 🚀 Features

-  Two mock email providers - ProviderA & ProviderB
-  Automatic fallback to Provider B if Provider A fails
-  Simple in-memory rate limiting (5 requests per minute per IP)
-  Input validation (`to`, `subject`, `body`)
-  Test with Postman any API client

---
## 🧑‍💻 Tech Stack

- Node.js
- Express
- express-rate-limit

---
## Usage

### Install dependencies

```bash
npm install
```
### Run the Server
```bash
npm run dev
```
