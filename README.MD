# FreshKet Store

## Introduction

FreshKet

## How to Use the Application

### Running with Docker Compose

Ensure you have Docker and Docker Compose installed on your machine. Then follow these steps:

1. **Start the Application:**

Navigate to the backend directory and run the following commands for development:
npm run dev

For production, you can build and start the backend using:
npm run build
npm run start

Next, navigate to the frontend directory and start the frontend application with:
npm run start

you also can use docker for building and running images

This command will build and start the containers. Once running, the application is accessible at `http://localhost:3000`.

2. **Stop the Application:**

docker-compose down

This will stop and remove all running containers and networks.

## Technology Stack

- **Frontend**: Developed with React.
- **Backend**: Built using Node.js and express
- **DevOps Tools**: Docker, Nginx.
