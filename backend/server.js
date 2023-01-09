require('dotenv').config()
const Query=require('./models/queryModel.js')
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())
// app.use((req, res, next) => {
//   console.log(req.path, req.method)
//   next()
// })

// routes
app.get('/', async (req, res) => {
    const queries = await Query.find({}).sort({createdAt: -1})
  
    res.status(200).json(queries)
  })

app.post('/submitQuery', async (req, res) => {
    const {username, desc, isResolved} = req.body
    
    try {
      const query = await Query.create({username, desc, isResolved})
      res.status(200).json(query)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })

  //mark resolved
  app.patch('/:id', async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such query'})
    }
  
    const query = await Query.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!query) {
      return res.status(400).json({error: 'No such query'})
    }
  
    res.status(200).json(query)
  })


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 


// listen for requests
// app.listen(process.env.PORT, () => {
//   console.log('listening on port', process.env.PORT)
// })