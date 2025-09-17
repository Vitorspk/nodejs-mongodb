# Node.js News Portal - Progressive Learning Project

## Overview

This repository contains a progressive learning project for building a news portal application using Node.js. The project is organized into sections (`secao-01` through `secao-09`), each representing a different stage of development and introducing new concepts and technologies.

## Project Structure

The repository is organized into the following sections:

```
nodejs-mongodb/
├── secao-01/          # Basic Node.js and Express setup
├── secao-02/          # Express routing fundamentals
├── secao-03/          # EJS templating and views
├── secao-04/          # Modular application structure
├── secao-05-mysql/    # MySQL database integration
├── secao-07-consign/  # Auto-loading with Consign
├── secao-08-body-parser/ # Form handling with body-parser
└── secao-09/          # Complete application with all features
```

## Technologies Used

### Core Technologies
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Templating engine for views
- **MySQL** - Database for storing news articles

### Additional Libraries
- **body-parser** - Middleware for parsing request bodies
- **consign** - Auto-loading for routes and models
- **nodemon** - Development server with auto-restart

## Section Progression

### Section 01: Basic Setup
- Initial Node.js application
- Basic Express server setup
- Introduction to routing

### Section 02: Express Routing
- Structured routing patterns
- Basic route handlers
- Express middleware concepts

### Section 03: Views and Templates
- EJS templating integration
- Views structure:
  - `admin/` - Admin panel views
  - `home/` - Homepage views
  - `noticias/` - News article views

### Section 04: Modular Architecture
- Application modularization
- Separation of concerns:
  - `app/` - Application logic
  - `config/` - Configuration files
  - Routes organization

### Section 05: MySQL Integration
- Database connectivity
- MySQL driver implementation
- Basic CRUD operations for news articles
- Database schema:
  - News articles table
  - Article management

### Section 07: Consign Auto-loading
- Automatic route loading
- Model auto-loading
- Simplified application bootstrap

### Section 08: Form Handling
- body-parser integration
- Form submission handling
- POST request processing
- Admin forms for article creation

### Section 09: Complete Application
- Full-featured news portal
- Complete MVC structure:
  - **Models**: `NoticiasDAO.js` for database operations
  - **Views**: EJS templates for rendering
  - **Controllers**: Route handlers for business logic
- Database connection management
- All features integrated

## Application Features

### Core Functionality
- **Homepage** - Display latest news
- **News Listing** - Browse all articles
- **Article View** - Read individual articles
- **Admin Panel** - Create and manage news articles

### Routes Structure
- `/` - Homepage
- `/noticias` - News listing page
- `/noticia` - Individual article view
- `/admin` - Admin panel for article management

## Installation & Setup

### Prerequisites
- Node.js (v10 or higher)
- MySQL Server
- npm or yarn package manager

### Database Setup

1. Create MySQL database:
```sql
CREATE DATABASE portal_noticias;
```

2. Create the news table:
```sql
CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255),
    noticia TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Running the Application

1. Navigate to the desired section (e.g., `secao-09` for the complete version):
```bash
cd secao-09
```

2. Install dependencies:
```bash
npm install
```

3. Configure database connection in `config/dbConnection.js`:
```javascript
{
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'portal_noticias'
}
```

4. Start the application:
```bash
node app.js
```

Or with nodemon for development:
```bash
npx nodemon app.js
```

5. Access the application:
```
http://localhost:3000
```

## Project Architecture (Section 09)

### Directory Structure
```
secao-09/
├── app/
│   ├── models/
│   │   └── NoticiasDAO.js    # Data Access Object for news
│   ├── routes/
│   │   ├── admin.js           # Admin routes
│   │   ├── home.js            # Homepage routes
│   │   ├── noticia.js         # Single article routes
│   │   └── noticias.js        # News listing routes
│   └── views/
│       ├── admin/
│       │   └── form_add_noticia.ejs  # Article creation form
│       ├── home/
│       │   └── index.ejs             # Homepage template
│       └── noticias/
│           ├── noticia.ejs           # Single article view
│           └── noticias.ejs          # Articles listing
├── config/
│   ├── dbConnection.js       # Database configuration
│   └── server.js              # Express server configuration
├── app.js                     # Application entry point
└── package.json               # Project dependencies
```

### Key Components

#### Server Configuration (`config/server.js`)
- Express application setup
- View engine configuration (EJS)
- Middleware setup (body-parser)
- Auto-loading with Consign

#### Database Connection (`config/dbConnection.js`)
- MySQL connection factory
- Database credentials configuration

#### Models (`app/models/NoticiasDAO.js`)
- Data Access Object pattern
- Database queries for news operations
- CRUD operations implementation

#### Routes
- **home.js**: Homepage routing
- **noticias.js**: News listing functionality
- **noticia.js**: Individual article display
- **admin.js**: Administrative functions

## Development Workflow

### Adding New Features
1. Create new route file in `app/routes/`
2. Add corresponding view in `app/views/`
3. Implement model methods in `app/models/` if database interaction is needed
4. Routes are auto-loaded via Consign

### Best Practices
- Keep routes thin - business logic in models
- Use EJS partials for reusable view components
- Maintain separation of concerns (MVC pattern)
- Use environment variables for sensitive configuration

## Learning Path

This project is designed for progressive learning:

1. **Start with Section 01** - Understand basic Node.js server
2. **Progress through sections** - Each adds new concepts
3. **Study Section 09** - See all concepts working together
4. **Experiment** - Modify and extend the final application

## Common Issues & Solutions

### MySQL Connection Error
- Verify MySQL server is running
- Check credentials in `dbConnection.js`
- Ensure database exists

### Port Already in Use
- Change port in `app.js`
- Kill existing process on port 3000

### Module Not Found
- Run `npm install` in the section directory
- Check package.json for missing dependencies

## Future Enhancements

Potential improvements for learning:
- Add user authentication
- Implement categories for news articles
- Add image upload functionality
- Create REST API endpoints
- Implement pagination for news listing
- Add search functionality
- Integrate MongoDB as alternative to MySQL
- Add unit and integration tests

## Contributing

This is a learning project. Feel free to:
- Fork and experiment
- Suggest improvements
- Report issues
- Share your learning experience

## Author

**Vitor Schiavo**

## License

ISC License