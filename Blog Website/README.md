# Blog Website

A simple blog web application built with Node.js, Express.js, and EJS. Create, view, edit, and delete blog posts with a beautiful, responsive interface.

## Features

- ✅ **Post Creation**: Create new blog posts with title and content
- ✅ **Post Viewing**: View all posts on the home page
- ✅ **Post Editing**: Edit existing posts
- ✅ **Post Deletion**: Delete posts with confirmation
- ✅ **Responsive Design**: Works beautifully on desktop and mobile devices

## Installation

1. Make sure you have Node.js installed on your system
2. Navigate to the project directory:
   ```bash
   cd "Blog Website"
   ```
3. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

## Running the Application

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
Blog Website/
├── app.js              # Main Express server file
├── package.json        # Project dependencies and scripts
├── views/              # EJS templates
│   ├── home.ejs       # Home page displaying all posts
│   ├── compose.ejs    # Form to create new posts
│   └── edit.ejs       # Form to edit existing posts
└── public/            # Static files
    └── css/
        └── styles.css # Application styles
```

## Usage

1. **View Posts**: Visit the home page to see all your blog posts
2. **Create Post**: Click "New Post" button to create a new blog post
3. **Edit Post**: Click "Edit" button on any post to modify it
4. **Delete Post**: Click "Delete" button on any post to remove it (with confirmation)

## Notes

- Posts are stored in memory and will be lost when the server restarts (no database)
- The application uses EJS templating for dynamic content rendering
- Styling is responsive and works on all device sizes

