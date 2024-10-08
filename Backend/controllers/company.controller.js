
import Company from "../models/company.models.js";
import getDataUri from "../util/datauri.js";
import cloudinary from "../util/cloudinary.js"


//&  ----------------------------------------------------------------------------------------------------

 export const registerCompany = async (req, res) => {

    //todo: register company 
    try {
        const { companyName } = req.body;

        // check if company name is provided
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }

        // check if company already exists
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register same company.",
                success: false
            });
        };

        // create company
        company = await Company.create({
            name: companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        });

    } catch (error) {
        console.log(error);
    }
}; 


//&  ----------------------------------------------------------------------------------------------------


export const getCompany = async (req, res) => {
    try {

       const userid = req.id; // logged in user id
       console.log("userid" , userid);

       const companies = await Company.find({userid});
       console.log("company" , companies);

        if(!companies) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        };

        return res.status(200).json({
            message: "Company found successfully",
            companies,
            success: true
        });

    } catch (error) {
        console.log("error is found in getCompany controller");
        console.log(error);
    }
};

//&  ----------------------------------------------------------------------------------------------------
    // get company by id

export const getCompanyById = async (req, res) => {
    try {

        const id = req.params.id;
        console.log(id);
        
        const company = await Company.findById(id);
        console.log(company);
         
        if(!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        };

        return res.status(200).json({
            message: "Company found successfully",
            company,
            success: true
        });

    } catch (error) {}
}

//&  ----------------------------------------------------------------------------------------------------

export const updateCompany = async (req, res) => {
    try { 

        const {name , description , website , location} = req.body;
        const file = req.file;
        // console.log(name , description , website , location , file);

         // here cloudinary is used for uploading image   
         const fileUri = getDataUri(file);
         const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
         const logo = cloudResponse.secure_url;
         
        const updateData = {name , description , website , location , logo};

        const company = await Company.findByIdAndUpdate(req.params.id, updateData , {new: true});

            if(!company) {
                return res.status(404).json({
                    message: "Company not found",
                    success: false
                });
            };   

            return res.status(200).json({
                message: "Company Info updated successfully.",
                company,
                success: true
            });
           
    } catch (error) {
        console.log("error is found in updateCompany controller");
        console.log(error);
    };

}; 


/* 
export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                message: "You can't register same company.",
                success: false
            });
        };
        company = await Company.create({
            name: companyName,
            userId: req.id
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        });

    } catch (error) {
        console.log(error);
    }
};

export const getCompany = async (req, res) => {
    try {
        const userId = req.id; // logged in user id
        console.log(userId);// id of hr who created the company

        const companies = await Company.find({ userId });
        console.log(companies);

        if (!companies) {
            return res.status(404).json({
                message: "Companies not found.",
                success: false
            })
        }

        return res.status(200).json({
            companies,
            success:true
        })

    } catch (error) {
        console.log("error is found in getCompany , company controller");
        console.log(error);
    }
}


// get company by id
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        console.log("error is found in getCompanyById , company controller");
        console.log(error);
    }
}
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
 
        const file = req.file;
        // idhar cloudinary ayega
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        const logo = cloudResponse.secure_url;
    
        const updateData = { name, description, website, location, logo };

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Company information updated.",
            success:true
        })

    } catch (error) {
        console.log("error is found in updateCompany , company controller");
        console.log(error);
    }
} */