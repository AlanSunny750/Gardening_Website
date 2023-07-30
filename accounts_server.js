import express from 'express';
import path from 'path';
import { ServerApiVersion, MongoClient } from 'mongodb';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config()

const app = express()

const __dirname = fileURLToPath(import.meta.url);

let port = process.env.port || 5400;

const uri = `mongodb+srv://elham:twoDWAat2@cluster0.whtn1t3.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const  main = async () => {

    app.use(express.json())
    app.use(express.static('client'))
    let filePath = path.join(__dirname, '/client/').replace('\\server.js', '')

    app.get('/', (req, res) => {
        res.sendFile(filePath + 'accounts.html')
    });

    const sendUserData = (name, lname) => {
        app.post('/client.html', (req, res) => {
            res.send(JSON.stringify({Name: name, LastName: lname}))
            console.log(JSON.stringify({Name: name, LastName: lname}))
        })
    }

    client.connect()
    console.log('db online')
    

    app.post('/signup.html', async (req, res) => {
        console.log(req.body)

        const { Email, Password, Name, LastName } = req.body;

       await client.db('users').createCollection(Email)
        .catch(err =>{ 
            res.send("0") // 0 = 'An account with this email already exists!'
            console.log(err) 
        })  

        await client.db('users').collection(Email).insertMany([
            {'Pass': Password},
            {'Name': Name, 'LastName': LastName}
        ]).catch(err => console.log(err))
        .then(res.send("3")) // success

    })


    app.post('/login.html', async (req, res) => {
        
        let data = await client.db('users').collection(req.body.Email).find().toArray()
        .catch(err => {
            res.send("1"); // 1 = 'Incorrect email' 
            console.log(err)
        })

        if(data[0].Pass == req.body.Pass) {
            res.send("4") // 'login succeed'
            // sendUserData(data[1].Name, data[1].LastName)
        }else {
            res.send("2") // 2 = 'Password incorrect'
        }
    });

    app.listen(port, () => console.log(`http://localhost:${port}`))

}

try {
    main()
} catch(err) {
    console.log('Internal server error ', err)
}

