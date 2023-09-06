const express = require("express");

const mongoose = require("mongoose");

const blogRouter = require("./routes/blog_route");

// const handleHomeRequest = (req, res) => {
//   res.send("Hello, Elijah welcomes you"); //html can be typed eg; responseobject.write("<h1><h1>")
// };

// const handleServiceRequest = (req, res) => {
//   res.send("How can I help you"); //html can be typed eg; responseobject.write("<h1><h1>")
// };

// const handleContactRequest = (req, res) => {
//   res.send("Contact page"); //html can be typed eg; responseobject.write("<h1><h1>")
// };

// const handleTrashRequest = (req, res) => {
//   res.send("Items deleted!"); //html can be typed eg; responseobject.write("<h1><h1>")
// };

const server = express();

// middlewares
server.use(express.json())

// mongodb URI
const URI =
  "mongodb+srv://kobbyofori9:bS16WEWGG0B3oxWD@cluster0.vatbi2g.mongodb.net/";
// connect mongodb
mongoose
  .connect(URI)
  .then(() => {
    console.log(`mongodb connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });


// routes
server.use("/blog", blogRouter);

// server.delete("/Trash", handleTrashRequest);
// server.put("/Contact", handleContactRequest);
// server.post("/Service", handleServiceRequest);
// server.get("/", handleHomeRequest);
// server.use(handleALLRequests);

server.listen(4000, "0.0.0.0", () =>
  console.log(
    "Hello, Elijah welcomes you and server is ready to accept request"
  )
);

// bS16WEWGG0B3oxWD
// bS16WEWGG0B3oxWD
