# API-Sentinel

> Enterprise-Grade Automated API Security & Vulnerability Scanner

API-Sentinel is a full-stack API security assessment platform designed to automatically discover API endpoints, identify common security weaknesses, generate detailed vulnerability reports, and provide real-time scan visibility through a modern dashboard.

The platform combines automated reconnaissance, vulnerability testing, evidence collection, risk scoring, and executive reporting into a single unified system.

---

# Overview

Modern applications heavily depend on APIs, making API security one of the most critical aspects of cybersecurity.

API-Sentinel helps security teams, developers, students, and researchers identify vulnerabilities before attackers do.

The platform automatically:

* Discovers API endpoints
* Parses OpenAPI / Swagger specifications
* Performs vulnerability assessments
* Detects OWASP API Security risks
* Streams real-time scan logs
* Generates PDF reports
* Maintains historical scan records

---

# Key Features

## Automated API Discovery

Automatically identifies:

* Public endpoints
* Hidden routes
* API documentation paths
* Swagger/OpenAPI specifications

Supported discovery methods:

* Swagger/OpenAPI ingestion
* Route enumeration
* Custom wordlist crawling

---

## Vulnerability Detection

Current Version (V1) includes:

### BOLA / IDOR Detection

Broken Object Level Authorization testing.

Example:

```http
GET /api/users/profile?id=1001
GET /api/users/profile?id=1002
```

The scanner checks whether unauthorized resources can be accessed by modifying identifiers.

---

### Broken Authentication Detection

Tests:

* Missing tokens
* Invalid JWTs
* Expired sessions
* Authorization bypasses

---

### SQL Injection Detection

Payload testing:

```sql
' OR 1=1 --
```

```sql
' UNION SELECT NULL --
```

Detects:

* Error-based SQL Injection
* Authentication bypass
* Unsanitized inputs

---

### Security Header Analysis

Checks:

* Content-Security-Policy
* Strict-Transport-Security
* X-Frame-Options
* X-Content-Type-Options
* Referrer-Policy

---

### Rate Limiting Assessment

Tests:

* Request throttling
* Brute-force protection
* API abuse resistance

---

### Excessive Data Exposure

Detects sensitive information exposed through API responses such as:

* Internal identifiers
* Sensitive fields
* Debug information
* Hidden metadata

---

# Architecture

## High-Level System Design

```text
Dashboard (Next.js)
        │
        ▼
Control Plane API
(Node.js + TypeScript)
        │
        ▼
Redis Queue (BullMQ)
        │
        ▼
Scanner Workers
        │
        ├─────────────► Vulnerable Sandbox API
        │
        └─────────────► External Target APIs
        │
        ▼
MongoDB
        │
        ▼
PDF Reports & Findings
```

---

# Project Structure

```text
API-Sentinel/

├── apps/
│
│   ├── dashboard/
│   ├── core-api/
│   └── vulnerable-target/
│
├── packages/
│
│   ├── engine-core/
│   ├── shared-types/
│   ├── shared-utils/
│   └── pdf-reporter/
│
├── infrastructure/
│
│   ├── mongodb/
│   ├── redis/
│   └── docker/
│
├── docs/
│
├── .github/
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

---

# Core Components

## Dashboard

Technology:

* Next.js
* TypeScript
* Tailwind CSS
* Shadcn UI
* Recharts
* Socket.IO Client

Responsibilities:

* Launch scans
* Monitor progress
* View findings
* Download reports
* Manage scan history

---

## Control Plane API

Technology:

* Node.js
* Express
* TypeScript

Responsibilities:

* Scan orchestration
* Job scheduling
* WebSocket communication
* Authentication
* Report management

---

## Scanner Engine

Technology:

* TypeScript
* BullMQ

Responsibilities:

* Discovery
* Vulnerability testing
* Evidence collection
* Risk calculation

---

## Vulnerable Sandbox

A deliberately vulnerable API used for demonstrations and testing.

Contains:

* BOLA vulnerabilities
* SQL Injection flaws
* Weak authentication
* Sensitive data exposure
* Missing security headers

This allows safe demonstrations without targeting real systems.

---

# Scan Workflow

```text
Target Submitted
        │
        ▼
Target Validation
        │
        ▼
Discovery Engine
        │
        ▼
Endpoint Enumeration
        │
        ▼
Plugin Execution
        │
        ▼
Evidence Collection
        │
        ▼
Risk Scoring
        │
        ▼
PDF Report Generation
        │
        ▼
Scan Completion
```

---

# Plugin Architecture

API-Sentinel follows a modular plugin-based architecture.

```text
plugins/

├── bola/
├── broken-auth/
├── sql-injection/
├── rate-limit/
├── security-headers/
├── excessive-data/
└── sensitive-exposure/
```

New modules can be added without modifying the core engine.

---

# Evidence Collection

Every finding stores:

```json
{
  "type": "SQL Injection",
  "severity": "HIGH",
  "endpoint": "/products/search",
  "payload": "' OR 1=1 --",
  "responseCode": 200,
  "evidence": "Database error message returned"
}
```

This provides reproducible proof of findings.

---

# Database Design

## Scans Collection

```json
{
  "targetUrl": "http://localhost:5001",
  "status": "COMPLETED",
  "riskScore": 87,
  "startedAt": "",
  "completedAt": ""
}
```

---

## Findings Collection

```json
{
  "scanId": "",
  "severity": "HIGH",
  "type": "SQL Injection",
  "endpoint": "/products/search",
  "evidence": {}
}
```

---

## Reports Collection

Stores:

* PDF reports
* Executive summaries
* Historical reports

---

# Reporting

The platform generates:

## Executive Report

Contains:

* Risk Overview
* Business Impact
* Executive Summary
* Recommendations

---

## Technical Report

Contains:

* Vulnerability Details
* Request/Response Evidence
* Reproduction Steps
* Remediation Guidance

---

# Tech Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Shadcn UI
* Recharts
* Socket.IO Client

## Backend

* Node.js
* Express
* TypeScript
* Socket.IO
* BullMQ

## Database

* MongoDB
* Redis

## Reporting

* PDFKit

## Monorepo

* pnpm Workspaces
* Turborepo

## Deployment

* Docker
* Docker Compose

---

# Future Enhancements

Planned Features:

* OWASP API Top 10 Full Coverage
* NoSQL Injection Detection
* JWT Weakness Analysis
* GraphQL Security Assessment
* SSRF Detection
* Command Injection Testing
* CVE Mapping
* AI-Assisted Remediation Suggestions
* Multi-Tenant Architecture
* Kubernetes Deployment

---

# Security Notice

API-Sentinel is intended for:

* Educational environments
* Authorized penetration testing
* Internal security assessments
* Security research

Users must only scan systems they own or have explicit permission to test.

Unauthorized security testing may violate laws and regulations.

---

# Author

Shubhang Mishra

Cybersecurity Student | Ethical Hacker | Full-Stack Developer

Specialization:

* API Security
* Application Security
* Offensive Security
* Secure Software Development

---

# License

MIT License

Copyright (c) 2026 API-Sentinel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files to deal in the Software without restriction.
