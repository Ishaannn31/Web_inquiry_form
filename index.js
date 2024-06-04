import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.post("/submit", (req, res) => {
  const { name, email, text } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Comment: ${text}`);
  res.render("reply.ejs");
  // Handle the form data as needed
  // ...
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
