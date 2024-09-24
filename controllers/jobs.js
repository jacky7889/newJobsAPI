const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllJobs = async(req, res) => {
   const job = await Job.find({createdBy})
   res.status(StatusCodes.OK).json(job)
}

const getJob = async(req, res) => {
    res.send('get single job')
}

const createJob = async(req, res) => {
    // console.log(req.body)
    // const job = await Job.create({company:req.body.company, position:req.body.position})
    // res.status(StatusCodes.CREATED).json(job)
   
    req.body.createdBy = req.user.userId
    
    console.log(req.body.createdBy)
    console.log(req.user.userId)

    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})

}

const updateJob = async(req, res) => {
    res.send('update job')
}

const deleteJob = async(req, res) => {
    res.send('delete job')
}





module.exports = {getAllJobs, createJob, getJob, updateJob, deleteJob}