import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001

const dbUrl = ``

app.use(express.json())
app.use(cors())

const connectDB = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("connect to database successfully!!!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};


connectDB().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`server starting at http://localhost:${PORT}`);
  });
});


