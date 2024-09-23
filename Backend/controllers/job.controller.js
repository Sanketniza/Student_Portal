
import Job from "../models/job.models.js";


// &  ----------------------------------------------------------------------------------------------------

export const postJob = async (req, res) => {

    try{

        const {title , description , location ,experience , salary , requirements , jobType , position , companyId } = req.body;
        const userId = req.id;

            if(!title || !description || !location || !experience || !salary || !requirements || !jobType || !position || !companyId) {
                return res.status(400).json({
                    message: "Something went wrong (postJob controller)",
                    success: false
                });
            };
          
         
            const job = await Job.create({
                title,
                description,
                location,
                experience,
                salary:Number(salary),
                requirements,
                jobType,
                position,
                company:companyId,
                created_by: userId
            });

            return res.status(201).json({
                message: "New Job created successfully",
                job,
                success: true
            });

    } catch(error){
        console.log("error is found in postJob controller");    
        console.log(error);
    }

};

// &  ----------------------------------------------------------------------------------------------------
export const getAllJobs = async (req, res) => {

    try{

        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                {title:{ $regex:keyword,$options: "i"}},
                {description:{ $regex:keyword,$options: "i"}},
            ]
        };

        const jobs = await Job.find(query).populate({
            path: "company",
            // select: "name",
            // match: { name: { $regex: keyword, $options: "i" } },
        }).sort({createdAt: -1});
        
            if(!jobs) {
                return res.status(404).json({
                    message: "Jobs not found",
                    success: false
                });
            };

        return res.status(200).json({
            message: "Jobs fetched successfully",
            jobs,
            success: true
        });

    }catch(e){
        console.log("error is found in getAllJobs controller");
        console.log(e);
    }
};

// &  ----------------------------------------------------------------------------------------------------

export const getJobById = async (req, res) => {

    try {

        const id = req.params.id;
        const job = await Job.findById(id).populate({
            path:"applications",
        })
        
            if(!job) {
                return res.status(404).json({
                    message: "Job not found",
                    success: false
                });
            };

        return res.status(200).json({
            message: "Job fetched successfully",
            job,
            success: true
        });

    }catch(e) {
        console.log("error is found in getByJobs controller");
        console.log(e);
    }
};

// &  ----------------------------------------------------------------------------------------------------

//how mach job created by admin
export const getAdminJobs = async (req, res) => {

    try {

        const adminId = req.id;
        const jobs = await Job.find({created_by: adminId});
            if(!jobs) {
                return res.status(404).json({   
                    message: "Jobs not found",
                    success: false
                });
            };

        return res.status(200).json({
            message: "Jobs fetched successfully",
            jobs,
            success: true
        });

    } catch (error) {
        console.log("error is found in getJobByLoggedInUser controller");
        console.log(error);
    }
};