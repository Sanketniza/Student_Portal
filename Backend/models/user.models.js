/* 
  
   * models (vscode ) = collection (database)
    ex - user model , application model
   * schema (vscode ) = document (database)
    ex - rahul user information about email , password ect , sanket , ect user documentations

*/

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
    fullname: {
          type: String,
          required: true,
        },

     email: {
         type: String,
         unique: true,
         required: true,
        },
   
     password: {
          type: String,
          required: true,
        },
   
     phoneNumber: {
          type: Number,
          required: true,
        },

        github: {
            type:String,
        },

        linkedin: {
            type:String,
        },
   
     role: {
          // user or admin
          type: String,
          enum: [ "student","hr" ], // both HR and user
          required: true,
          // default: 'user'
        },
   
     profile: {
          bio: { type: String },
          skills: [{ type: String }],
          resume: { type: String }, // url to resume file
          resumeOriginalName:{type:String},
          profilephoto: {
              type: String,
              default: "",
            },
          company: {
              type: mongoose.SchemaTypes.ObjectId,
              ref: "Company",
            },
        },


}, { timestamps: true });

export default mongoose.model("User", userSchema);
// export default mongoose.model("User", userSchema);
