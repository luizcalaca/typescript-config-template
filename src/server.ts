import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`App running on ${process.env.PORT}`);
});
