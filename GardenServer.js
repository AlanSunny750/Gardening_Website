import Express from 'express';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url);
import cors from 'cors'
import { ServerApiVersion, MongoClient } from 'mongodb';
import path from 'path';

const uri = `mongodb+srv://elham:twoDWAat2@cluster0.whtn1t3.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const app = Express()

app.use(Express.json({type: 'application/json'}))
app.use(Express.static(path.join(__dirname, 'viteDir'), { setHeaders: (res, path, stat) => { res.set('Content-Type', 'text/css'); } }));
app.use(cors())


const filePath = path.join(__dirname).replace('\\GardenServer.js', '')
console.log(filePath)

app.get('/', (req, res) => {
    res.sendFile(filePath)
})


app.post('/signup', async (req, res) => {
    client.connect()
    console.log('db online')
    
    console.log(req.body)

    const { email, password, name, lastName } = req.body;

    await client.db('users').createCollection(email)
        .catch(err =>{ 
        res.send("0") // 0 = 'An account with this email already exists!'
        console.log(err) 
    })  

    await client.db('users').collection(email).insertMany([
        {'Pass': password},
        {'Name': name, 'LastName': lastName}
    ]).catch(err => console.log(err))
    .then(res.send("3")) // success
})

let name, lastName, email, pass;

app.post('/login', async (req, res) => {


    email = req.body.email
    console.log(email)

    let data = await client.db('users').collection(email).find().toArray()
    .catch(err => {
        res.send("1"); // 1 = 'Incorrect email' 
        console.log(err)
    })

    name = data[0].Name
    lastName = data[0].LastName
    pass = data[1].Pass
    console.log(data)
    try {
        if(pass == req.body.password) {
            res.send("4") // 'login succeed'
        }else {

            res.send("2") // 2 = 'Password incorrect'
        }
    } catch(err) {
        console.log(err)
    }
});

app.post('/user_page', (req, res) => {
    res.send({name, lastName, email})
    console.log(name, lastName, email)
})

let port = 3000;
app.listen(port, console.log(`http://localhost:${port}`))

