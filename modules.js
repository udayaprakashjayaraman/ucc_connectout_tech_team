const mongoose = require('mongoose')

const jobPostSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required:[true,"name"]
        }, 
        company :{
            type : String,
            required:[true,"Company"]
        },
        location:{
            type : String,
            required:[true,"Location"]
        },
        age :{
            type : Number,
            required : [true,"age"]
        },
        salary :{
            type : Number,
            required : [true,"salary"]
        },
        employeeid:{
             type : Number,
             required : [true,"employeeid"]
        }
    }
)

const PostJob = mongoose.model('PostJob' ,jobPostSchema)
module.exports = PostJob;