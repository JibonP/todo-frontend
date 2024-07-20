http://todo-46.s3-website.us-east-2.amazonaws.com/

# Todo Frontend

This is the frontend for the Todo application, built with React and deployed on AWS S3.

## Tech Stack

- **Frontend Framework:** React
- **Styling:** React Bootstrap
- **Deployment:** AWS S3

## Project Setup

### Prerequisites

- Node.js
- npm
- AWS account

### Installation

1. **Clone the repository:**
   ```bash
   git clone [(https://github.com/JibonP/todo-frontend.git)]
   cd todo-frontend
Install dependencies:

```
npm install
Start the development server:

```
npm start
Deployment
Build the project:

```
npm run build
Configure AWS CLI:

```
aws configure
Deploy to S3:

```
aws s3 cp build/ s3://your-s3-bucket-name/ --recursive

```
Set up bucket policy:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-s3-bucket-name/*"
    }
  ]
}
```
Configure S3 bucket for static website hosting:

Go to your S3 bucket in the AWS Management Console.
Navigate to the "Properties" tab.
Enable "Static website hosting" and set the index.html as the default document.
Environment Variables
