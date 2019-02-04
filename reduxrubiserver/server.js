var fs = require('fs')
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var DB_FILE = path.join(__dirname, 'database/data.json')

app.set('port', 3001)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.get('/', function(req, res){
  res.send("COMMENT REST API")
})

app.get('/api/comments', function(req, res){
  fs.readFile(DB_FILE, function(err, data){
    if(err){
      console.error(err)
      process.exit(1)
    }
    res.json(JSON.parse(data))
  })
})

app.post('/api/comments', function(req, res){
  fs.readFile(DB_FILE, function(err, data){
    if(err){
      console.error(err)
      process.exit(1)
    }
    var comments = JSON.parse(data)
    var comment = {
      id: req.body.id,
      author: req.body.author,
      message: req.body.message
    }
    comments.push(comment)
    fs.writeFile(DB_FILE, JSON.stringify(comments, null, 3), function(err){
      if(err){
        console.error(err)
      }
      res.json(comments)
    })
  })
})

app.delete('/api/comments/:id', function(req, res){
  fs.readFile(DB_FILE, function(err, data){
    if(err){
      console.error(err)
      process.exit(1)
    }
    var id = parseInt(req.params.id)
    var comments = JSON.parse(data)
    comments = comments.filter((item)=> item.id !== id)
    fs.writeFile(DB_FILE, JSON.stringify(comments, null, 3), function(err){
      if(err){
        console.error(err)
      }
      res.json(comments)
    })
  })
})

app.listen(app.get('port'), function(){
  console.log('server berjalan di port ' + app.get('port'))
})
