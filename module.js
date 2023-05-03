const mongoose = require('mongoose')

const jobPostSchema = mongoose.Schema(
    {
        name :{
            type : String,
            required:[true,"name"]
        }, 
        company :{
            type : String,
            required:[true,"Company"]
        },
        empID :{
            type : String,
            required:[true,"empID"]
        }
    }
)

const PostJob = mongoose.model('PostJob' ,jobPostSchema)
module.exports = PostJob;