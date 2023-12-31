const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users =[
    {id:1,name:"John",email:"john@gmail.com"},
    {id:2,name:"roimohn",email:"jxcfohn@gmail.com"},
    {id:3,name:"pobohn",email:"ssdffn@gmail.com"},
    {id:4,name:"tiohn",email:"dffohn@gmail.com"},
]

app.get ('/',(req, res) =>{
    res.send('user management server is running')
})

app.get('/users', (req, res)=>{
    res.send(users);
})

app.post('/users', (req, res)=>{
    console.log('post api hitting')
    // console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1
    users.push(newUser);
    res.send(users)
})

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
}) 