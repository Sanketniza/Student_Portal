
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    website: {
        type: String,
    },

    location: {
        type: String,
    },

    description: {
        type: String,
    },

    logo:{
        type: String, // usl to company logo
    },

    usrId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    }

}, { timestamps: true });

export default mongoose.model("Company", userSchema);
