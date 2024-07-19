# Payments App

Welcome to the Payments App! This project provides a secure platform for transferring money, managing user accounts, and viewing transaction details. It consists of both frontend and backend components.

## Features

- **User Authentication**: Signup and Signin functionalities.
- **Account Management**: Update user credentials.
- **Balance Management**: View current balance and transfer money.
- **Search and Add Friends**: Search for friends to transfer money.

## Project Structure

The project is divided into two main parts:

1. **Backend**: Built with Node.js and Express.js, it handles the API routes and database operations.
2. **Frontend**: Built with React and Vite, it provides the user interface for interacting with the application.

### Backend

The backend provides several API routes for managing accounts, authentication, and user details. You can find detailed information about these routes in the backend's [README file](./backend/Readme.md).

### Frontend

The frontend includes several pages like Dashboard, Home, Signin, Signup, Send Money, and Settings. Each page provides specific functionalities to the user. Detailed descriptions of these pages can be found in the frontend's [README file](./frontend/README.md).

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Vite

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/payments-app.git
   cd payments-app
   ```

2. **Install backend dependencies**:

   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies**:

   ```sh
   cd ../frontend
   npm install
   ```

### Running the Project

#### Backend

1. **Configure environment variables**:

   Create a `.env` file in the `backend` directory and add your configurations (e.g., database connection string, JWT secret).

2. **Start the backend server**:

   ```sh
   cd backend
   npm start
   ```

   The backend server will start on `http://localhost:3000`.

#### Frontend

1. **Start the frontend server**:

   ```sh
   cd ../frontend
   npm run dev
   ```

   The frontend application will start on `http://localhost:5173`.

### Testing

To test the backend and frontend applications, you can use tools like Postman (for API testing) and your browser (for frontend testing).

## Contributing

We welcome contributions to the project. If you have any ideas or suggestions, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or need further assistance, please contact me.
