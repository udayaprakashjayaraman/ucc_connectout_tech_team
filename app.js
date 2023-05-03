const express = require('express')
const mongoose = require('mongoose')
const PostJob = require('./modules')

const app = express()
const port = 4400
 app.use(express.json())
 app.use(express.urlencoded({extended: false }))

 app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/postjob',async(req,res) =>{
  try{
    const postjob =await PostJob.find({});
    res.status(200).json(postjob);

  }
   catch(error){
    res.status(500).json({message: error.message})

  }
})
app.get('/postjob/:id',async(req,res) =>{
  try{
    const {id} =req.params;
    const postjob=await PostJob.findById(id);
    res.status(200).json(postjob); 

  }
   catch(error){
    res.status(500).json({message: error.message})

  }
}  )



 app.post('/postjob',async(req,res)=>{
    try{
           const postjob = await PostJob.create(req.body)
           res.status(200).json(postjob)


    } catch(error){
      console.log(error.message);
      res.status(500).json({message: error.message})
    }

     } )
     
     app.put('/postjob/:id',async(req,res)=>{
      try{
        const {id} = req.params;
        const postjob=await PostJob.findByIdAndUpdate(id, req.body);
        if(!postjob){
          return res.status(404).json({message:`cannot find any jobs with ID ${id}`})
        }
        const updatedPostJob = await PostJob.findById(id);
        res.status(200).json(updatedPostJob);
        

      }catch(error){
        res.status(500).json({message: error.message})
      }
     })
      app.delete('/postjob/:id',async(req,res)=>{
        try{
          const {id} =req.params;
          const postjob = await PostJob.findByIdAndDelete(id);
          if(!product){
            return res.status(404).json({message:`cannot find any job post with ID ${id}`})
          }
          res.status(200).json(jobpost);
        }catch (error) {
          res.status(500).json({message:error.message})
        }
      })


mongoose.
connect('mongodb+srv://sidharth:sidh007%40@cluster0.xhnthke.mongodb.net/test')
.then(()=>{
    console.log('connected to mongo db successfully.')
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      });
}
).catch(()=>{
    console.log('error')
})
