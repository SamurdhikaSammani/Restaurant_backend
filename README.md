# 🍽️ Restaurant Reservation Backend API

A robust and scalable backend API for restaurant table reservation management built with Node.js, Express.js, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Table Reservation System**: Create and manage restaurant table reservations
- **Data Validation**: Comprehensive validation for customer information using Validator.js
- **Error Handling**: Centralized error handling middleware
- **CORS Enabled**: Cross-origin resource sharing for frontend integration
- **MongoDB Integration**: Scalable NoSQL database for data persistence
- **RESTful API**: Clean and intuitive API design
- **Environment Configuration**: Secure configuration management with dotenv

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.1.0
- **Database**: MongoDB with Mongoose ODM v8.20.0
- **Validation**: Validator.js v13.15.23
- **Environment Management**: dotenv v17.2.3
- **CORS**: cors v2.8.5
- **Development**: nodemon v3.1.11

## 📁 Project Structure

```
Restaurant_backend/
├── app.js                      # Express application setup
├── server.js                   # Server entry point
├── package.json               # Project dependencies
├── .gitignore                # Git ignore rules
├── config/
│   └── config.env            # Environment variables
├── controller/
│   └── reservation.js        # Reservation business logic
├── database/
│   └── dbConnection.js       # MongoDB connection setup
├── error/
│   └── error.js             # Error handling middleware
├── models/
│   └── reservationSchema.js  # Mongoose reservation schema
└── routes/
    └── reservationRoute.js   # API route definitions
```

## 📦 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Restaurant_backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## ⚙️ Configuration

1. **Create environment file**
   
   Navigate to the `config` folder and create/edit the `config.env` file:

   ```env
   PORT=4000
   FRONTEND_URL=http://localhost:5173
   MONGO_URI=mongodb://localhost:27017/restaurant
   ```

2. **Environment Variables**

   | Variable | Description | Example |
   |----------|-------------|---------|
   | `PORT` | Server port number | `4000` |
   | `FRONTEND_URL` | Frontend application URL for CORS | `http://localhost:5173` |
   | `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/restaurant` |

## 🏃 Running the Application

### Development Mode (with auto-restart)
```bash
npm run dev
```

### Production Mode
```bash
npm test
```

The server will start on the configured PORT (default: 4000)
```
Server is running on port 4000
```

## 🔌 API Endpoints

### Base URL
```
http://localhost:4000/api/v1
```

### Endpoints

#### Create Reservation
- **POST** `/reservation/send`
- **Description**: Create a new table reservation
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "date": "2025-12-25",
    "time": "19:00"
  }
  ```
- **Success Response** (201):
  ```json
  {
    "success": true,
    "message": "Reservation successful"
  }
  ```
- **Error Response** (400):
  ```json
  {
    "success": false,
    "message": "Please fill full reservation form"
  }
  ```

## 📊 Data Models

### Reservation Schema

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| `firstName` | String | Yes | 3-30 characters |
| `lastName` | String | Yes | 3-30 characters |
| `email` | String | Yes | Valid email format |
| `phone` | String | Yes | 10-15 characters |
| `date` | String | Yes | - |
| `time` | String | Yes | - |

## 🚨 Error Handling

The application implements centralized error handling:

- **Validation Errors**: Returns detailed validation error messages
- **Database Errors**: Handles MongoDB connection and query errors
- **Custom Errors**: Uses custom ErrorHandler class for specific error scenarios
- **HTTP Status Codes**: Appropriate status codes for different error types

### Error Response Format
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


**Happy Coding! 🚀**