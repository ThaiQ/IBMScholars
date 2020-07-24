const {app} = require('../constants')
const fs = require('fs')

app.get('/mp3/:name', function(req, res){
  const name = req.params.name.includes('.mp3')? req.params.name : req.params.name+'.mp3'
  const path = __dirname + '/mp3/' + name
  res.sendFile(path,(err)=>{
    if (err) return res.send(err)
  });
}); 