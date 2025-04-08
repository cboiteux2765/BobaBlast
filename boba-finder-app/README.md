# Boba Finder App

## Overview
Boba Finder is a cross-platform mobile application that helps users discover boba drink stores, share their experiences through a blog, and receive personalized recommendations based on analytics. The app is built using React Native for the frontend and Spring Boot with MongoDB for the backend.

## Features
- **Find Boba Stores**: Users can search for nearby boba drink stores and view details about them.
- **Blog Posting**: Users can post and read blog entries about their boba experiences.
- **Recommendations**: The app provides analytics-based recommendations for boba drinks tailored to user preferences.

## Tech Stack
- **Frontend**: React Native, Tailwind CSS
- **Backend**: Spring Boot, MongoDB
- **Database**: MongoDB

## Project Structure
```
boba-finder-app
├── mobile-app
│   ├── src
│   │   ├── components
│   │   ├── screens
│   │   ├── navigation
│   │   ├── utils
│   │   └── App.tsx
│   ├── tailwind.config.js
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── backend
│   ├── src
│   │   ├── main
│   │   └── test
│   ├── pom.xml
│   └── README.md
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites
- Node.js and npm
- Java JDK
- MongoDB

### Installation

#### Frontend
1. Navigate to the `mobile-app` directory.
2. Install dependencies:
   ```
   npm install
   ```

#### Backend
1. Navigate to the `backend` directory.
2. Build the project using Maven:
   ```
   mvn clean install
   ```

### Running the Application

#### Frontend
1. Start the React Native application:
   ```
   npm start
   ```

#### Backend
1. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.