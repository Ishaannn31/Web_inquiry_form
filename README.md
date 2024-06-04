# Web_inquiry_form

Welcome to the Web Inquiry Form project. This is a simple web application that provides a contact form, allowing users to submit their name, email, and message. The application is built using Express.js for server-side logic and EJS (Embedded JavaScript) for templating.

• Table of Contents :

    Features
    Prerequisites
    Installation
    Usage
    Project Structure
    Routes
    Technologies Used

• Features :

    Static pages for Home, About, and Contact.
    A contact form that collects user information (name, email, and message).
    Server-side handling of form submissions with console logging of form data.
    Simple and clean user interface.

• Prerequisites :

Ensure you have the following installed on your local machine:

    Node.js
    npm (Node package manager)

• Installation and usage :

    Clone the repository
    Install dependencies : npm install
    Start the server : node index.js
    Open your browser and navigate to : http://localhost:3000

 Project Structure

```markdown

- public/
  - images/
    - image
  - styles/
    - content.css
    - layout.css

- views/
  - partials/
    - footer.ejs
    - header.ejs
  - index.ejs
  - about.ejs
  - contact.ejs
  - reply.ejs

- index.js
- package.json
- package-lock.json
```
• Description :

    public/: Contains static assets like CSS and JavaScript files.
    views/: Contains EJS templates for different pages.
    index.js: Main server file that sets up routes and handles form submissions.
    package.json: Lists project dependencies and scripts.

• Routes :

    GET /: Renders the home page.
    GET /about: Renders the about page.
    GET /contact: Renders the contact page.
    POST /submit: Handles form submissions, logs the form data, and renders a response page.

• Technologies Used :

    Express.js: Fast, unopinionated, minimalist web framework for Node.js.
    EJS: Embedded JavaScript templates for generating HTML markup.
    Body-parser: Middleware to parse incoming request bodies.

HAPPY CODING!!!    
