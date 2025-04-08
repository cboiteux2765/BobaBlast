# Boba Finder Backend

## Overview
The Boba Finder backend is built using Spring Boot and connects to a MongoDB database. It serves as the backend for the Boba Finder mobile application, allowing users to find boba drink stores, post on a blog, and receive analytics-based recommendations.

## Features
- User registration and login
- CRUD operations for user data
- API endpoints for fetching boba store information
- Blog functionality for users to share their experiences
- Analytics-based recommendations for boba drinks

## Technologies Used
- Spring Boot
- MongoDB
- Java
- Maven

## Getting Started

### Prerequisites
- Java 17 or higher
- Maven
- MongoDB

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd boba-finder-app/backend
   ```
3. Update the `application.properties` file with your MongoDB connection details.

### Running the Application
To run the application, use the following command:
```
mvn spring-boot:run
```

### API Endpoints
- **POST /api/users/register**: Register a new user
- **POST /api/users/login**: Login an existing user
- **GET /api/stores**: Fetch a list of boba drink stores
- **POST /api/blog**: Post a new blog entry

## Testing
To run the tests, use the following command:
```
mvn test
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.