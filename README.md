# Task Manager

Full stack task management application built with Java, Spring Boot, PostgreSQL, JWT authentication and a custom frontend served by the backend.

This project was designed as a portfolio-ready application that demonstrates backend development, authentication, database persistence, layered architecture and deployment to cloud services.

## What This Project Does

- User registration and login
- JWT-based authentication
- Task creation, listing, update and deletion
- Per-user task isolation
- Validation and global error handling
- Responsive frontend connected to the real API
- Cloud-ready configuration for Neon and Render

## Tech Stack

- Java 17
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

## Architecture

The backend follows a clean layered structure:

- `controller`: HTTP endpoints
- `service`: business logic
- `repository`: database access
- `domain`: entities and enums
- `dto`: request and response models
- `security`: JWT and Spring Security configuration
- `exception`: validation and error handling

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

- Passwords are stored encrypted with BCrypt
- JWT is required to access task endpoints
- Each authenticated user can only access their own tasks
- CORS is configurable through environment variables for deployment

## Frontend

The frontend is built with vanilla HTML, CSS and JavaScript and is served directly by Spring Boot.

It includes:

- registration and login forms
- JWT session persistence with `localStorage`
- task editor
- task board
- filters and sorting
- visual status indicators
- responsive layout

## Local Run

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

### Database

- PostgreSQL hosted on Neon

### Application

- Deploy-ready for Render
- Includes a multi-stage [Dockerfile](./Dockerfile)
- Includes [.dockerignore](./.dockerignore)

### Render Environment Variables

Example production variables:

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

## Why This Project Matters

This project demonstrates practical experience with:

- secure API development
- relational database integration
- full CRUD implementation
- frontend and backend integration
- cloud deployment preparation
- code organization for maintainability

It is intended to represent junior-level backend and full stack development skills through a complete, testable application.
