const express = require("express");
const path = require("path");
const upload = require("./utilities/fileupload");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render(path.join(__dirname, "public/views/homepage.ejs"));
});
app.post("/successfull", upload.single("file"), (req, res) => {
  res.render(path.join(__dirname, "public/views/successfull.ejs"));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
