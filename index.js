require('dotenv').config()
const express = require('express');
const app = express();
const pg=require('pg')
const mongoose=require('mongoose')
const dbschema=require('./model/newschema')

app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const PORT=process.env.PORT
const MONGODB_URL=process.env.MONGODB_URL
const connection = async()=>{

    try {
        await mongoose.connect(MONGODB_URL);
            console.log("database connected");
    } catch (error) {
        console.log("database conenction error");
    }
}
connection();


app.get('/', async (req, res) => {
    try {
      const response = await fetch('https://api.wazirx.com/api/v2/tickers');
      const data = await response.json();
      const responsedata = Object.values(data).slice(0, 10);
      // console.log(responsedata);
      res.render('allinone/home',{data:responsedata});
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.post("/",async(req,res)=>{
  

try {
  const data=await dbschema.create({name:"Nine tail"})
    console.log("data saved");
    return res.status(200).json({
      msg:data
    })
} catch (error) {
  console.log(error)
   res.status(404).json({messege:"error found"}); 
}
});



app.listen(PORT,()=>{
    console.log(`server is listening at http://localhost:${PORT}`)
});
