import Express from 'express';
import { fileURLToPath } from 'url';
const __dirname = fileURLToPath(import.meta.url);
import cors from 'cors'
import { ServerApiVersion, MongoClient } from 'mongodb';
import path from 'path';
import { error } from 'console';
try {

const uri = `mongodb+srv://elham:twoDWAat2@cluster0.whtn1t3.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);
const app = Express()

app.use(Express.json({type: 'application/json'}))
app.use(Express.static(path.join(__dirname, 'viteDir'), 
{ setHeaders: (res, path, stat) => { res.set('Content-Type', 'text/css'); }}));
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

    try {
        let data = await client.db('users').collection(email).find().toArray()

        name = data[1].Name
        lastName = data[1].LastName
        pass = data[0].Pass
        
        console.log("user login details :" + data)

        try {
            if(pass == req.body.password) {
                res.send("4") // 'login succeed'

                app.get('/user_page', (req, res) => {
                    res.send({name, lastName, email})
                    console.log({name, lastName, email})
                });
            }
            else {
                res.send("2") // 2 = 'Password incorrect'
            }

        } catch(err) {
            console.log(err)
        }

    } catch(error) {
        res.send("1")
    }


});





app.post('/GardenPlanner', async (req, res) => {
    
    let { SaveName, placedItemsDetails, email} = req.body;
    console.log(SaveName)
    
    if (req.body.command == 'save') {
        
        console.log('saving')
        
        try {
            await client.db('users').collection(email).insertOne(
                {SaveName, data: placedItemsDetails}
            )
            res.send('sucess')
        }catch(err) {

            console.log('save error: ' + err)
        }

        console.log({SaveName ,data: placedItemsDetails})


    } else if (req.body.command == 'load') {
        console.log('loading')

        try{
            const result = await client.db('users').collection(email).findOne({SaveName})
            res.send(JSON.stringify({SaveName: result.SaveName ,data: result.data}))
            console.log(result.data)
        } catch(err) {
            console.log('save error: ' + err, err.code)
        }
    }
});


app.post('/comunity', (req, res) => {
    const {title, description, image} = req.body
    console.log(req.body)
})

let port = 3000;
app.listen(port, console.log(`http://localhost:${port}`))

} catch(err) {
    console.log(err)
}