
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({

    title: {
      type: String,
      required: true,
    },

    description:{
        type: String,
    },
    
    location: {
        type: String,
        required: true,
    },

    experience: {
        type: Number,
        required: true,
    },

    salary: {
        type: Number,
        required: true,
    },

    requirements: {
        type: String,
    },

    jobType: {
        type: String,
        required: true,
    },

    position:{
        type: String,
        required: true,
    },

    company: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Company",
        required: true,
    },
    
    created_by: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },

    applications: [
        {
           type: mongoose.SchemaTypes.ObjectId,
           ref: "Application",
        }
    ]
}, { timestamps: true });


 export default mongoose.model("Job", jobSchema);