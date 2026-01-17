# 🚀 CloudLex-A-Cloud-Native-Dictionary
CloudLex is a cloud-native, serverless web application that allows users to search and understand cloud computing terms (e.g., virtualization, DevOps, containers) with clear definitions, detailed explanations, and related concepts.
The application is designed for learners, students, and early professionals who want quick, accurate explanations of cloud concepts through a simple web interface backed by real AWS services.

## 🟠 Project Overview

CloudLex demonstrates how a modern serverless application can be built using AWS-managed services with minimal infrastructure overhead.
Users interact with a static frontend hosted on AWS. Search requests are handled by an API that invokes a Lambda function, which retrieves term data from DynamoDB and returns structured JSON responses.

The project focuses on:

🔸Serverless architecture

🔸Clean API design

🔸Cost efficiency (AWS Free Tier)

🔸Practical cloud engineering fundamentals

### 🟠Project Goal

The goal of CloudLex is to:

🔸Demonstrate practical serverless architecture on AWS

🔸Build an end-to-end cloud-native application

🔸Showcase real-world AWS service integration

## 🟠 AWS Services Used
### Core Services

◾ Amazon S3 – Static website hosting for frontend assets

◾ Amazon CloudFront – CDN and HTTPS access for the frontend

◾ AWS Lambda – Serverless backend logic (Python)

◾ Amazon API Gateway (HTTP API) – Public API endpoint

◾ Amazon DynamoDB – NoSQL database for storing cloud terms

### Supporting Services

◾ AWS IAM – Secure access control between services

◾ Amazon CloudWatch – Logging and monitoring

◾ AWS Budgets – Cost alerts and billing control

## 🟠 Technologies & Languages

Frontend: HTML, CSS, JavaScript

Backend: Python 3.11

Architecture: Serverless, Cloud-Native

Hosting & Deployment: AWS (S3, CloudFront, Lambda, API Gateway)

## 🟦 Sample API Call
#### Request
GET https://<api-id>.execute-api.ap-south-1.amazonaws.com/prod/term?term=virtualization

#### Response (JSON)
{
  "term": "virtualization",
  "category": "compute",
  "definition": "Virtualization is the technology of creating virtual versions of computing resources...",
  "explanation": "Virtualization allows a single physical server to run multiple isolated virtual machines...",
  "related_terms": ["hypervisor", "virtual machine", "container"]
}

### 🟠 Deployment Overview

◾Backend logic implemented using AWS Lambda (Python)

◾DynamoDB table created to store cloud terms

◾API Gateway configured to expose Lambda as a public HTTP API

◾Frontend built using plain HTML, CSS, and JavaScript

◾Frontend hosted on Amazon S3 with static website hosting

◾CloudFront added to provide HTTPS and global access

◾IAM roles configured following least-privilege principles

◾Billing alerts set up using AWS Budgets

### 🟠 Cost Model (AWS Free Tier)

#### This project is designed to stay within the AWS Free Tier:

🔹Lambda: 1M free requests/month

🔹API Gateway (HTTP API): Free tier eligible for low traffic

🔹DynamoDB: Free tier read/write capacity

🔹S3: Free tier storage for static assets

🔹CloudFront: Free tier data transfer sufficient for demo traffic

#### With low usage, the expected cost is ₹0.

### ✨ Future Enhancements

🔹Search suggestions and autocomplete

🔹Category-based browsing

🔹Admin interface to add new terms

🔹Authentication (Cognito) for contributors

🔹CI/CD using AWS Amplify or GitHub Actions

🔹Custom domain name for CloudFront

#### 🧑‍💻 Author Akanksha Ravi

Feel free to explore!

END
