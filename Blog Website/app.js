const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// In-memory storage for blog posts
let posts = [];
let postIdCounter = 1;

// Routes
// Home page - display all posts
app.get("/", (req, res) => {
  res.render("home", { posts: posts });
});

// Create new post page
app.get("/compose", (req, res) => {
  res.render("compose");
});

// Handle post creation
app.post("/compose", (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    const newPost = {
      id: postIdCounter++,
      title: title,
      content: content,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };
    posts.unshift(newPost); // Add to beginning of array
  }
  res.redirect("/");
});

// Edit post page
app.get("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.render("edit", { post: post });
  } else {
    res.redirect("/");
  }
});

// Handle post update
app.post("/edit/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const post = posts.find((p) => p.id === postId);
  if (post && title && content) {
    post.title = title;
    post.content = content;
  }
  res.redirect("/");
});

// Handle post deletion
app.post("/delete/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== postId);
  res.redirect("/");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

