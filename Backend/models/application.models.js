
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({ 

    job: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Job",
        required: true
    },

    applicant: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    }

}, [{ timestamps: true }]);

export default mongoose.model("Application", applicationSchema);


/* 
  ^ timestamps: true adds createdAt and updatedAt fields to each document created with this schema.
  ^ createdAt is automatically set to the date and time when the document is created.
  ^ updatedAt is automatically set to the date and time when the document is updated.
*/