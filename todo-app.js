
const express = require('express')
const app = express();
const path = require('path')

const todotask= require('./module/todotask');
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs');

todotask({
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });


user ="jyotish"
app.get('/',async(req,res)=>{
    const data = todotask.find();
    user =await data;
    res.render(`todo`,{user})
});

app.post('/post',async(req,res)=>{
    const data = new todotask(
        {
            content:req.body.content
        }
    )
    let result = await data.save();
res.redirect('/')
})

    app.post('/delete/:id', async (req, res) => {
    await todotask.findByIdAndDelete(req.params.id); 
    res.redirect('/');
  });
    app.post('/edit/:id', async (req, res) => {
    let data = await todotask.findById(req.params.id);
    let result = data; 
    res.render(`todo`,{result})
    let data1 = await todotask.updateOne({_id:req.params.id},{$set:{content:result.content}})
    console.log(data)
    res.redirect('/');
  });


  app.put('/update',async(req,res)=>{
   let result= await todotask.updateMany({content:"jyotish"},{$set:{content:"rahul"}});
    res.send(result)
  })
  



app.listen(3000);

