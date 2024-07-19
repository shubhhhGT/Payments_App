# Payments App Frontend

This is the frontend application for the Payments App. It provides a user interface for managing accounts, performing transactions, and viewing user information. The frontend is built using React(vite) and Tailwind CSS.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shubhhhGT/Payments_App/tree/main/frontend.git
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Configuration

Create a `.env` file in the root directory and add the necessary environment variables:

```plaintext
VITE_BASE_URL=your_backend_api_url
```

### Running the App

To start the development server, use the following command:

```bash
npm run dev
```

The app will be running on \`http://localhost:5173/`.

## Pages

### Dashboard

- **Path:** \`/dashboard\`
- **Description:** Displays the user's balance, user information, and allows access to other features of the app.
- **Components Used:**
  - \`Appbar\`
  - \`Balance\`
  - \`Users\`

### Home

- **Path:** \`/\`
- **Description:** The landing page of the application, providing options to sign up or sign in.
- **Components Used:**
  - \`Home\`

### Send Money

- **Path:** \`/sendmoney\`
- **Description:** Allows the user to send money to another user.
- **Components Used:**
  - \`Heading\`
  - \`Appbar\`

### Settings

- **Path:** \`/settings\`
- **Description:** Allows the user to update their credentials.
- **Components Used:**
  - \`Heading\`
  - \`SubHeading\`
  - \`InputBox\`
  - \`Button\`
  - \`Appbar\`

### Signin

- **Path:** \`/signin\`
- **Description:** Allows the user to sign in to their account.
- **Components Used:**
  - \`Heading\`
  - \`SubHeading\`
  - \`InputBox\`
  - \`Button\`
  - \`BottomWarning\`

### Signup

- **Path:** \`/signup\`
- **Description:** Allows the user to create a new account.
- **Components Used:**
  - \`Heading\`
  - \`SubHeading\`
  - \`InputBox\`
  - \`Button\`
  - \`BottomWarning\`

## Components

The frontend application uses a variety of reusable components, including:

- \`Appbar\`
- \`Balance\`
- \`Users\`
- \`Heading\`
- \`SubHeading\`
- \`InputBox\`
- \`Button\`
- \`BottomWarning\`

## Contributing

Feel free to open issues or submit pull requests if you have any suggestions or improvements.

## License

This project is licensed under the MIT License.
