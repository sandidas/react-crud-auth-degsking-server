const express = require("express"); // call express
const app = express(); // use express
const cors = require("cors"); // call cors to use publicly
app.use(cors()); // call app to use cors
//==
const port = process.env.PORT || 5000; // declare port from where we can get access

app.get("", (req, res) => {
  res.send("your API is running.");
});

// select course file
const courses = require("./data/course.json"); // select json file

// get courses
app.get("/courses/", (req, res) => {
  res.send(courses);
});

// get by id
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id === id);
  res.send(selectedCourse);
});

// fetch category posts by category id (slug)
app.get("/courses/category/:id", (req, res) => {
  const id = req.params.id;
  const selectedCategory = courses.filter((course) => course.category_slug === id);
  res.send(selectedCategory);
});

// check server
app.listen(port, () => {
  console.log("Server running on port: ", port);
});
