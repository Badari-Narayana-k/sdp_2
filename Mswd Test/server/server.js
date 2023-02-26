const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')
const { request, response } = require('express')

const app = express()
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://Narayana:admin123@cluster0.xarsiol.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)
client.connect()
var db = client.db("s2")
var col = db.collection("sdp2")

app.get('/',(request,response) => {
	response.send('This is a Server')
})

app.post('/insert', (request,response) => {
	col = db.collection("sdp2")
	console.log(request.body)
	col.insertOne(request.body)
	response.send(request.body)
})

app.get('/check',(req,res)=>{
	col = db.collection("sdp2")
	console.log(req.query)
	async function find(){
		try{
			const result=await col.findOne({email:req.query.email})
			console.log(result)
			if(result == null)
			{
				res.send("FAIL")
			}
			else{
				if(req.query.password === result.password)
				{
					res.send("PASS")
				}
				else
				{
					res.send("FAIL")
				}

			}
		}
		finally{}	
	}
	find().catch(console.dir)
})

app.listen(3500)
console.log("server started")


