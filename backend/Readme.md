# Payments App Backend

This is the backend server for the Payments App. It provides various API endpoints for account management, user authentication, and user interactions. The server is built with Node.js and Express.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shubhhhGT/Payments_App/tree/main/backend.git
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add the necessary environment variables:

```plaintext
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### Running the Server

To start the server, use the following command:

```bash
node index.js
```

The server will be running on \`http://localhost:3000/`.

## API Endpoints

### Authentication Routes

#### POST /auth/signup

- Description: Sign up a new user.
- Request Body:
  ```json
  {
    "firstname": "john",
    "lastname": "doe",
    "username": "johndoe@example.com",
    "password": "123456"
  }
  ```

#### POST /auth/signin

- Description: Sign in an existing user.
- Request Body:
  ```json
  {
    "username": "johndoe@example.com",
    "password": "123456"
  }
  ```

### Account Routes

#### GET /account/balance

- Description: Get the current balance of the authenticated user.
- Headers: \`Authorization: Bearer <token>\`

#### POST /account/transfer

- Description: Transfer balance to another user.
- Headers: \`Authorization: Bearer <token>\`
- Request Body:
  ```json
  {
    "to": "userId",
    "amount": 100
  }
  ```

### User Routes

#### PUT /user

- Description: Update the credentials of the authenticated user. It is optional, a user can update all or any one or two fields.
- Headers: \`Authorization: Bearer <token>\`
- Request Body:
  ```json
  {
    "firstname": "john",
    "lastname": "doe",
    "password": "newpassword"
  }
  ```

#### GET /user/bulk

- Description: Search for a friend.
- Headers: \`Authorization: Bearer <token>\`

#### GET /user/getCurrentUser

- Description: Get the details of the currently authenticated user.
- Headers: \`Authorization: Bearer <token>\`

## Middleware

### Auth Middleware

The \`auth\` middleware is used to protect routes that require authentication. It verifies the JWT token provided in the request headers.

## Contributing

Feel free to open issues or submit pull requests if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.
