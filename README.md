# Password Reset

A simple website for user management system, built using React, Vite, and Tailwind CSS.

## Features

- User can request password reset link by providing their registered email.
- User will receive a password reset link in their email.
- User can set a new password using the link provided in the email.
- Form validations for email and password fields.
- Responsive design for better user experience on different devices.

## Technologies Used

- React 19
- Vite 7
- Tailwind CSS 4
- React Icons
- Lodash
- Axios for API calls
- React Toastify for notifications

## Project Structure

```
PASSWORD-RESET-FRONTEND/
├── public/
│   ├── Images/
│   │   ├── login.webp
│   │   ├── signup.webp
├── src/
│   ├── Components/
│   │   ├── FormComponents/
│   │   │   ├── InputField.jsx
│   │   ├── EmptyMessage.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── FormTitle.jsx
│   │   ├── Loading.jsx
│   │   ├── PrimaryButton.jsx
│   │   ├── UserLogin.jsx
│   │   ├── UserLoginForm.jsx
│   │   ├── UserRegister.jsx
│   │   ├── UserRegisterAndLoginForm.jsx
│   │   ├── UserRegisterForm.jsx
│   ├── Hooks/
│   │   ├── makeApiCalls.jsx
│   ├── Pages/
│   │   ├── ForgotPassword.jsx
│   │   ├── ResetPassword.jsx
│   ├── Utils/
│   │   ├── api.js
│   │   ├── common.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeoAlexThomas/password-reset-frontend.git
   cd password-reset-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```
