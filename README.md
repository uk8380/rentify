```markdown
# Rentify - Presidio Exam

## Description

Rentify is a web application designed to help users find rental properties easily. This project is developed as part of the Presidio exam. The application allows users to register, login, view available properties, post their properties for rent, and logout securely.

## Features

- User Authentication: Users can register and login securely.
- View Properties: Users can view available properties.
- Post Property: Authenticated users can post their properties for rent.
- Logout: Users can securely logout from their accounts.

## Technologies Used

### Frontend

- **React**: Used for building the user interface.
- **React Router**: Used for handling client-side routing.
- **Tailwind CSS**: Used for styling the components.
- **axios**: Used for making HTTP requests to the backend.
- **localStorage**: Used for storing the user's authentication token.

### Backend

- **Node.js**: Used for building the server-side logic.
- **Express.js**: Used as the web application framework.
- **MongoDB**: Used as the database to store user information and properties.
- **Mongoose**: Used as the ODM library for MongoDB.
- **jsonwebtoken**: Used for generating and verifying JSON Web Tokens (JWT) for user authentication.
- **bcryptjs**: Used for hashing passwords for security.
- **dotenv**: Used for loading environment variables from a .env file.
- **cors**: Used for enabling Cross-Origin Resource Sharing (CORS).
- **morgan**: Used for HTTP request logging.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/uk8380/rentify.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rentify
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=8800
   MONGODB_URI=mongodb://localhost:27017/rentify
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_jwt_secret` with your own secret key for JWT.

5. Start the server:

   ```bash
   npm start
   ```

6. Start the frontend:

   Open a new terminal window and navigate to the `client` directory:

   ```bash
   cd client
   ```

   Install frontend dependencies:

   ```bash
   npm install
   ```

   Start the frontend server:

   ```bash
   npm start
   ```

7. Access the application:

   Open your web browser and navigate to `http://localhost:3000` to access the Rentify application.

## Usage

1. Register or login to your account.
2. View available properties on the homepage.
3. Post your property for rent if you are authenticated.
4. Logout securely from your account.

## Contributors

- [Mannepalli Uday Kumar](https://github.com/uk8380)

```