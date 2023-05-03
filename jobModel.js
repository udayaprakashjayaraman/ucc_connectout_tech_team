const mongoose = require('mongoose')

const jobPostSchema = mongoose.Schema(
    {
        title:{
            type : String,
            required:[true,"Title"]
        }, 
        company :{
            type : String,
            required:[true,"Company"]
        },
        location:{
            type : String,
            required:[true,"Location"]
        },
        description:{
            type : String,
            required:[true,"Description"]
        },
        salary :{
            type : Number,
            required: true,
        }
        
    }
)

const PostJob = mongoose.model('PostJob' ,jobPostSchema)
module.exports = PostJob;
