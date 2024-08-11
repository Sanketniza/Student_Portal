
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";          // for cross-origin resource sharing . naturally used to connect backend and frontend
import dotenv from "dotenv";      // for environment variables , to create and use .env file for security 
import connectDB from "./util/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRouter from "./routes/job.route.js";


//? ------------------------------------------------------------------------------------------------------

const app = express();
dotenv.config();

//? ------------------------------------------------------------------------------------------------------

// ^Connect to MongoDB
//  connectDB();
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

//? ------------------------------------------------------------------------------------------------------

// Middleware
app.use(express.json()); // All the data in the form of JSON, Parse JSON request bodies 
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cookieParser());
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,            //access-control-allow-credentials:true
  // optionSuccessStatus: 200
}
app.use(cors(corsOptions));


//? ------------------------------------------------------------------------------------------------------

//^ api creating 

app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRouter);

//? ------------------------------------------------------------------------------------------------------

//^ Define routes....

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//? ------------------------------------------------------------------------------------------------------

//^ Start the server
const port =  process.env.PORT || 3000;
app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});


//? ------------------------------------------------------------------------------------------------------