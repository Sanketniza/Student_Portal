

import Application from '../models/application.models.js';
import Job from '../models/job.models.js';

//& ----------------------------------------------------------------------------------------------------

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
        };
        // check if the user has already applied for the job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs",
                success: false
            });
        }

        // check if the jobs exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            })
        }
        // create a new application
        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        });

        job.applications.push(newApplication._id);
        await job.save();
        return res.status(201).json({
            message:"Job applied successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
};

//& ----------------------------------------------------------------------------------------------------

export const getApplication = async (req, res) => {

    try{

      const userId = req.id;

        const application = await Application.find({applicant: userId}).sort({createAt: -1})
        .populate({
            path: "job",
            option:{sort:{createAt: -1}},
            populate:{
                path:"company",
                option:{sort:{createAt: -1}}
            }
        });

        if(!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            });
        };
        
        return res.status(200).json({
            message: "Application fetched successfully",
            application,
            success: true
        });

    }catch(e) {
        console.log("error is found in getApplication controller");
        console.log(e);
    }
};

//& ----------------------------------------------------------------------------------------------------

// TO check how many student or user's are applied for the application ( job ) for perticular job
// Admin check how many student's are applied for the application

export const getApplicants = async (req , res) => {

    try{

        const jobId = req.params.job
        const job = await Job.findById(jobId).populate({
            path:"applications",
            option:{sort:{createAt: -1}},
            populate:{
                path:"application",
                option:{sort:{createAt: -1}}
            }
        });

        if(!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        };

        return res.status(200).json({
            message: "Applicants fetched successfully",
            job,
            success: true
        });

    }catch(err){
        console.log("error is found in getApplicants controller");
        console.log(err);
    }
};

//& ----------------------------------------------------------------------------------------------------

export const updateStatus = async (req , res) => {

    try{

       const {status} = req.body;
       const applicationId = req.params.id;

        if(!status) {
            return res.status(404).json({
                message: "Status is required",
                success: false
            });
        };
        

        //finding the application by application id 

       const application = await Application.findOne({ _id: applicationId });

        if(!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false
            });
        };

        // updating the application

        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Status updated successfully",
            // application,
            success: true
        });

    }catch(error) {
        console.log("error is found in updateStatus controller");
        console.log(error);
    }
};
