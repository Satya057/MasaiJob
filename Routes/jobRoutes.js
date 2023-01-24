const { Router } = require("express");
const { JobModel } = require("../Model/jobPost.routes");

const JobRoute = Router();

JobRoute.post("/create", async (req, res) => {
  try {
    const {
      company,
      city,
      location,
      role,
      level,
      contract,
      position,
      language,
    } = req.body;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    const data = new JobModel({
      company,
      postedAt:today,
      city,
      location,
      role,
      level,
      contract,
      position,
      language,
    });
    await data.save();
    res.send("Job post added Successfully")
  } catch (err) {
    console.log(err);
  }
});

JobRoute.get("/", async(req,res)=>{
    try{
        const {role,sortBy,language,no_of_page} = req.query
        // console.log(search)
        if(!role && !sortBy && !language)
        {
            if(no_of_page)
            {
                let result = await JobModel.find({}).limit(Number(no_of_page))
                res.send(result)
            }
            let result = await JobModel.find({})
            res.send(result)
        }
        if(role && sortBy && language)
        {
            if(no_of_page)
            {
                let result = await JobModel.find({role,language}).sort({postedAt:sortBy}).limit(Number(no_of_page))
                res.send(result)
            }
            const result = await JobModel.find({role,language}).sort({postedAt:sortBy})
            res.send(result)
        }

        if(role && sortBy)
        {
            if(no_of_page)
            {
                let result = await JobModel.find({role}).sort({postedAt:sortBy}).limit(Number(no_of_page))
                res.send(result)
            }
            const result = await JobModel.find({role}).sort({postedAt:sortBy})
            res.send(result)
        }
        if(role &&language)
        {
            if(no_of_page)
            {
                let result = await JobModel.find({role,language}).limit(Number(no_of_page))
                res.send(result)
            }
            const result = await JobModel.find({role,language})
            res.send(result)
        }
        if(sortBy&&language)
        {
            if(no_of_page)
            {
                let result = await JobModel.find({language}).sort({postedAt:sortBy}).limit(Number(no_of_page))
                res.send(result)
            }
            const result = await JobModel.find({language}).sort({postedAt:sortBy})
            res.send(result)
        }


        if(role)
        {
            if(no_of_page)
            {
                let result = await JobModel.find({role}).limit(Number(no_of_page))
                res.send(result)
            }
            const result = await JobModel.find({role})
            res.send(result)
        }
        if(language)
        {
            if(no_of_page)
            {
                let result = await JobModel.find({language}).limit(Number(no_of_page))
                res.send(result)
            }
            const result = await JobModel.find({language})
            res.send(result)
        }
        if(sortBy)
        {
            if(no_of_page)
            {
                let result = await JobModel.find({}).sort({postedAt:sortBy}).limit(Number(no_of_page))
                res.send(result)
            }
            const result = await JobModel.find({}).sort({postedAt:sortBy})
            res.send(result)
        }
    }
    catch(err){
        console.log(err)
    }
})

module.exports = {
    JobRoute
}