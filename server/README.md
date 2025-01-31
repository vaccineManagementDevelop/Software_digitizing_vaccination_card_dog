# 🐾 Software Digitizing Vaccination Card for Dogs 🐶

This project provides an application to help digitize and store vaccination records for dogs. It allows users to register, log in, and manage vaccination details securely with the help of features like JWT authentication and email notifications.

## Features ✨

- **User Registration**: New users can register by providing their details (name, email, password).
- **User Login**: Registered users can log in using their credentials.
- **JWT Authentication**: After login, a JWT token is generated and stored in cookies for secure access.
- **Welcome Email**: A welcome email is sent to users after successful registration.
- **Logout**: Users can log out and clear their JWT token from the session.
- **Environment Configuration**: Uses environment variables to securely manage sensitive information like SMTP credentials and MongoDB URI.

## Technologies Used 🛠️

- **Node.js**: JavaScript runtime used to build the application.
- **Express.js**: Web framework for handling HTTP requests.
- **MongoDB**: Database for storing user and vaccination records.
- **bcrypt**: Library for hashing passwords securely.
- **JWT (JSON Web Tokens)**: Used for authentication and maintaining user sessions.
- **Nodemailer**: Used to send welcome emails to users after registration.
- **dotenv**: Loads environment variables for sensitive information like SMTP credentials and database URI.

## Installation ⚙️

### Prerequisites 📝

Make sure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **Nodemailer** credentials for email functionality

### Steps to Install 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/vaccineManagementDevelop/Software_digitizing_vaccination_card_dog.git