# Customer Management System (CMS)

## Table of Contents
1. [Project Overview](#project-overview)
2. [System Architecture](#system-architecture)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
5. [Backend](#backend)
   - [Directory Structure](#backend-directory-structure)
   - [Environment Variables](#backend-environment-variables)
   - [API Documentation](#api-documentation)
   - [Testing](#backend-testing)
6. [Frontend](#frontend)
   - [Directory Structure](#frontend-directory-structure)
   - [Environment Variables](#frontend-environment-variables)
   - [Component Guide](#component-guide)
   - [Testing](#frontend-testing)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

## Project Overview
The Customer Management System (CMS) is a web-based application designed to manage customer data, interactions, and support services. The system is split into two parts: the backend, which handles data storage, processing, and API services, and the frontend, which provides a user interface for users to interact with the system.

## System Architecture
- **Backend**: Built with Node.js, Express.js, and MongoDB.
- **Frontend**: Developed using Angular.

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: Angular

## Getting Started

### Prerequisites
- Node.js (>=14.x)
- MongoDB (>=4.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/manny1001/Customer-Feedback-System.git
    cd Customer-Feedback-System
    ```

2. **Install dependencies**:
    - Backend:
        ```bash
        cd backend
        npm install
        ```
    - Frontend:
        ```bash
        cd ../Customer-Feedback-System
        npm install
        ```

### Running the Application
1. **Backend**:
    ```bash
    cd backend
    npm start
    ```
    The backend server will start on `http://localhost:5000`.

2. **Frontend**:
    ```bash
    cd frontend
    npm start
    ```
    The frontend development server will start on `http://localhost:3000`.

## Backend

### Directory Structure
```
backend/
├── controllers/
├── entities/
├── interfaces/
├── middleware/
├── models/
├── repositories/
├── routes/
├── services/
├── utils/
├── config/
└── server.js
```

### Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```
MONGO_URI=mongodb://localhost:27017/customer_feedback_system
JWT_SECRET=M877BGKakWHYM0119100OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM
CFS_API_KEY=YOUR_GENERATED_API_KEY
MJ_APIKEY_PUBLIC='your API key'
MJ_APIKEY_PRIVATE='your API secret'
MJ_API_TOKEN='your API token'
```

### API Documentation
API endpoints and documentation can be found in the [http://localhost:5000/api-docs/](docs/api.md).


## Frontend

### Directory Structure
```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── containers/
│   ├── redux/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│   └── setupTests.js
```

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [MIT]  file for details.

## Contact
For any inquiries or issues, please contact [Emmanuelmuya@gmail.com] 
