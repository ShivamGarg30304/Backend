import express from "express";

const app = express();

// app.use(express.static("dist")); => this will bind the compiled front end with the front end and the changes made in the front end will not directly propogate in this..

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first joke",
      contents: "This is first joke",
    },
    {
      id: 2,
      title: "second joke",
      contents: "This is second joke",
    },
    {
      id: 3,
      title: "Third joke",
      contents: "This is Third joke",
    },
    {
      id: 4,
      title: "fourth joke",
      contents: "This is fourth joke",
    },
    {
      id: 5,
      title: "fifth joke",
      contents: "This is fifth joke",
    },
  ];
  res.send(jokes);
});

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
