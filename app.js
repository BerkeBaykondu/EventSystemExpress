import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    result: "Berke Çalıştı!",
  });
});

app.listen(port, () => {
  console.log("App is running at port:", port);
});
