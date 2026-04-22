# TaskFlow

Hi, I am Marcos Facchetti, and this repository showcases one of the portfolio projects I built to strengthen my backend and full stack development skills.

TaskFlow is a full stack task management application built with Java, Spring Boot, Spring Security, JWT, PostgreSQL, HTML, CSS and JavaScript. I created it as a practical project to work on authentication, CRUD operations, layered architecture, frontend-backend integration and cloud deployment.

## What I Built

With this project, I implemented:

- user registration and login
- JWT-based authentication
- task creation, listing, update and deletion
- per-user task isolation
- validation and global error handling
- a responsive frontend connected to a real API
- deployment-ready configuration for Render and Neon

## Why I Built It

I wanted to move beyond tutorial-style exercises and build something that looked and behaved like a real application.

This project helped me practice:

- backend development with Spring Boot
- secure authentication flows
- relational database integration
- clean code organization by layers
- API consumption from a custom frontend
- deployment in a cloud environment

## Tech Stack

- Java 17+
- Spring Boot
- Spring Security
- JWT
- Maven
- PostgreSQL
- HTML
- CSS
- JavaScript
- Docker
- Render
- Neon

## Project Structure

I organized the backend using a layered structure to keep responsibilities separated and the code easier to maintain:

- `controller`: HTTP endpoints
- `service`: business logic
- `repository`: data access
- `domain`: entities and enums
- `dto`: request and response models
- `security`: JWT and Spring Security configuration
- `exception`: validation and error handling
- `config`: application and security setup

## Main Features

### Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`

### Tasks

- `POST /api/tasks`
- `GET /api/tasks`
- `GET /api/tasks/{id}`
- `PUT /api/tasks/{id}`
- `DELETE /api/tasks/{id}`

## Security Notes

To make the project closer to a real-world backend, I included:

- BCrypt password hashing
- JWT protection for task endpoints
- user-based task ownership
- configurable CORS for local and deployed environments

## Frontend

The frontend is built with vanilla HTML, CSS and JavaScript and is served directly by Spring Boot.

It includes:

- access page with registration and login
- separate task management dashboard
- JWT session persistence with `localStorage`
- task editor
- task board with filters and sorting
- responsive layout

## What This Project Demonstrates

I use this project to show practical experience with:

- secure API development
- CRUD application design
- frontend and backend integration
- PostgreSQL persistence
- code organization with clear layers
- deployment preparation and environment configuration

## Running It Locally

### Requirements

- Java 17+
- Maven 3.9+
- PostgreSQL

### Environment Variables

- `DB_URL`
- `DB_USERNAME`
- `DB_PASSWORD`
- `APP_CORS_ALLOWED_ORIGINS`
- `JWT_SECRET_KEY`
- `JWT_EXPIRATION`
- `SERVER_PORT`
- `DDL_AUTO`
- `SHOW_SQL`

### Default Local Database

- Host: `localhost`
- Port: `5432`
- Database: `codex_test`
- Username: `postgres`

### Start the Application

```powershell
mvn spring-boot:run
```

Then open:

```text
http://localhost:8080
```

## Deployment

This project is prepared to run with:

- PostgreSQL hosted on Neon
- application deployment on Render
- Docker using the included [Dockerfile](./Dockerfile)

### Example Production Variables

```text
DB_URL=jdbc:postgresql://your-host/your-db?sslmode=require&channel_binding=require
DB_USERNAME=your_user
DB_PASSWORD=your_password
JWT_SECRET_KEY=your_base64_secret
JWT_EXPIRATION=86400000
DDL_AUTO=update
SHOW_SQL=false
APP_CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
SERVER_PORT=8080
```

## Example Requests

### Register

```json
POST /api/auth/register
{
  "name": "Marcos",
  "email": "marcos@example.com",
  "password": "secret123"
}
```

### Login

```json
POST /api/auth/login
{
  "email": "marcos@example.com",
  "password": "secret123"
}
```

### Create Task

```json
POST /api/tasks
Authorization: Bearer <token>
{
  "title": "Prepare demo",
  "description": "Finish backend and verify deployment",
  "status": "PENDING",
  "dueDate": "2026-03-30"
}
```

## Final Note

If you are reviewing this repository as a recruiter or hiring manager, this project represents how I approach learning through real implementation: I prefer building complete, deployable applications that let me practice backend logic, security, database integration and frontend interaction in a practical way.
