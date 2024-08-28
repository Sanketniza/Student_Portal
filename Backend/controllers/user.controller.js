

 import bcrypt from "bcrypt";
 import User from "../models/user.models.js";
 import jwt from "jsonwebtoken";
import getDataUri from "../util/datauri.js";


//&  ----------------------------------------------------------------------------------------------------

  export const register = async (req, res) => {
  
     try { 
       const { fullname , email , password , phoneNumber , role } = req.body;
        
            if(!fullname || !email || !password || !phoneNumber || !role) {
                   return res.status(400).json({
                    message: "All fields are required",
                    success: false
                });
            };
           
          const user = await User.findOne({ email });
            if(user) {
                  return res.status(400).json({
                      message: "User already exists",
                      success: false
                  });
            };

          const hashedPassword = await bcrypt.hash(password , 10);

                await User.create ({
                    fullname,
                    email,
                    password: hashedPassword,
                    phoneNumber,
                    role
                });

                return res.status(200).json({
                    message: "User Account created successfully",
                    success: true
                });

            
    } catch (error) {
       console.log("error is found in register controller");
       console.log(error.User.message);
    }  

  };


//&  ----------------------------------------------------------------------------------------------------


export const login = async (req, res) => {
 
 try {   
      const { email, password , role } = req.body;
      
        if(!email || !password || !role) {   // without filling this information you  can not be logged in
            return res.status(400).json({ 
                message: "All fields are required",
                success: false
            });
        };
      
      let user = await User.findOne({ email });  // finding user by email . if not found it will return null . here we use let because we want  to change (modified) the value of user in below if i declared it as const it will not work
      
        if(!user) {
            return res.status(400).json({
                message: "User does not exist",
                success: false
            });
        };
      
      const isPasswordMatch = await bcrypt.compare(password , user.password);
      
        if(!isPasswordMatch) {
            return res.status(400).json({
                message: "Invalid password",
                success: false
            });
        };
      
      // check role is correct or not

            if(role !== user.role) {
                return res.status(400).json({
                    message: "Invalid role",
                    success: false
                });
            };
   
            const tokenData = {
               userId: user.id
            }   
            
            const token = jwt.sign(tokenData , process.env.SECRET_KEY , { expiresIn: "1d" });
   
             user = {
               _id:user._id,
               fullname: user.fullname,
               email: user.email,
               role: user.role,
               phoneNumber: user.phoneNumber,
               profile: user.profile
            };
   
                return res.status(200).cookie("token" , token , { maxAge: 1*24*60*60*1000 , httpOnly: true , sameSite: "strict", secure: true }).json({
                    message: `Welcome ${user.fullname}`,
                    user,
                    success: true
                });
         
  } catch (error) {
        console.log("error is found in login controller");
      console.log(error.User.message);
  }

};


//&  ----------------------------------------------------------------------------------------------------


export const logout = async (req, res) => {
    
    try {
        
        return res.status(200).cookie("token" , "" , {maxAge: 0}).json({
            message: "User logged out successfully",
            success: true
        });
        
        
    } catch (error) {
        console.log("error is found in logout controller");
        console.log(error.message);
    };
    
};


//&  ----------------------------------------------------------------------------------------------------


/* export const updateProfile = async (req, res) => {
    
    try {
        
        const { fullname , email , phoneNumber , bio , skill , github , linkedin } = req.body;
        console.log(fullname , email , phoneNumber , bio , skill , github , linkedin);
        console.log(req.body);
        
        const file = req.file;
        
        //^not necessary to update those all this Fields
        // if(!fullname || !email || !phoneNumber || !bio || !skills) {
        //     return res.status(400).json({
        //         message: "Something went wrong (updateProfile controller)",
        //         success: false
        //     });
        // };  
        
        let skillsArray;
        if(skill) {
           skillsArray = skill.split(",");
        };

        const userId = req.id; // from middleware authentication
        
        let user = await User.findById(userId);
        if(!user) {
            return res.status(400).json({
                message: "User does not exist",
                success: false
            });
        };    
        
        // ^ update user profile
        if(fullname) user.fullname = fullname;
        if(email) user.email = email;
        if(github) user.github = github;
        if(linkedin) user.linkedin = linkedin;
        if(phoneNumber) user.phoneNumber = phoneNumber;
        if(bio) user.profile.bio = bio;
        if(skills) user.profile.skills = skillsArray;
        // if(file) user.profile.resume = file.path;
        

        console.log("Updated skills:", user.profile.skills);


        // resume comes later here ....
        
        await user.save();
        
        user = {
            _id:user._id,
            fullname: user.fullname,
            email: user.email,
            github: user.github,
            linkedin: user.linkedin,
            role: user.role,
            phoneNumber: user.phoneNumber,
            profile: user.profile,
            // file: user.profile.resume
        };
        
        
        return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true
        });
        
    } catch (error) {
        console.log("error is found in updateProfile controller");
        console.log(error.message);
    };
    
} */;

/* export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skill, github, linkedin } = req.body;
        // console.log(fullname, email, phoneNumber, bio, skill, github, linkedin);

        const file = req.file;

        let cloudResponse;
        if (file) {
            const fileUri = getDataUri(file);
            cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        }

        let skillsArray;
        if (skill) {
            skillsArray = skill.split(",");
        }

        const userId = req.id; // from middleware authentication
        
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                message: "User does not exist",
                success: false
            });
        }

        // Update user profile fields if provided
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (github) user.github = github;
        if (linkedin) user.linkedin = linkedin;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skillsArray) user.profile.skills = skillsArray;

        if (file && cloudResponse) {
            user.profile.resume = cloudResponse.secure_url; // Save the Cloudinary URL
            user.profile.resumeOriginalName = file.originalname; // Save the original filename if needed
        }

        // Save the updated user profile
        await user.save();

        // Prepare the user data to return in the response
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            github: user.github,
            linkedin: user.linkedin,
            role: user.role,
            phoneNumber: user.phoneNumber,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully",
            user,
            success: true
        });
        
    } catch (error) {
        console.log("Error is found in updateProfile controller");
        console.log(error.message);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}; */

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        let cloudResponse;
        if (file) {
            const fileUri = getDataUri(file);
            cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        }

        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
        }

        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            });
        }

        // updating data
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skills) user.profile.skills = skillsArray;
      
        // resume comes later here...
        if (cloudResponse) {
            user.profile.resume = cloudResponse.secure_url; // save the cloudinary url
            user.profile.resumeOriginalName = file.originalname; // Save the original file name
        }

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully.",
            user,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while updating the profile.",
            success: false
        });
    }
};




//&  ----------------------------------------------------------------------------------------------------


