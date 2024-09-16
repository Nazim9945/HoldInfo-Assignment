require('dotenv').config()
const express = require('express');
const app = express();


app.use(express.json())

app.set('view engine', 'ejs');

const port=process.env.PORT


app.get('/', async (req, res) => {
    try {
      const response = await fetch('https://api.wazirx.com/api/v2/tickers');
      const data = await response.json();
      const firstTenData = Object.values(data).slice(0, 10);
    //   console.log(firstTenData);
      res.render('allinone/home');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });




app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`)
});
