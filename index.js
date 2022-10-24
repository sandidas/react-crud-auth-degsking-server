const express = require('express'); // call express
const app = express(); // use express 
const cors = require('cors'); // call cors to use publicly
app.use(cors()); // call app to use cors
//==
const port = process.env.PORT || 5000; // declare port from where we can get access




app.get('', (req, res)=>{
    res.send('your API is running.');
})





// check server
app.listen(port, ()=>{
    console.log('Server running on port: ', port);
})