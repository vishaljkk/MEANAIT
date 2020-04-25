const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Video = require('../models/video');
//const Author = require('../models/Author');

const db ='mongodb://vkk976:dESFx3ZlT3eDZMcn@mongotrail-shard-00-00-dqumd.mongodb.net:27017,mongotrail-shard-00-01-dqumd.mongodb.net:27017,mongotrail-shard-00-02-dqumd.mongodb.net:27017/test?ssl=true&replicaSet=mongotrail-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.Promise= global.Promise;
mongoose.connect(db,function(err){
  if(err){
    console.error("Error! :"+error);
  }
  else{
    console.log("connected");
  }
})
//mongoose.connection.once('open', () => {
//    console.log('conneted to database');
//});

router.get('/',function(req,res){
  res.send('api works');
});


router.get('/videoss',function(req,res){
  console.log('get request for all videos');
  Video.find({})
  .exec(function(err, videos){
    if(err){
      console.log("Error retriving videos");
    }
    else{
      res.json(videos)
    }
  })
});

router.get('/videos/:id',function(req,res){
  console.log('get request for video');
  Video.findById(req.params.id)
  .exec(function(err, video){
    if(err){
      console.log("Error retriving videos");
    }
    else{
      res.json(video);
    }
  })
});


router.post('/video',function(req,res){
  console.log('post request for video');
  var newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;
  console.log(req.body.title,req.body.url,req.body.description);
  newVideo.save(function(err,insertedVideo){
    if(err){
      console.log("Error retriving videos");
    }
    else{
      res.json(insertedVideo);
    }
  });
});


router.put('/video/:id',function(req,res){
  console.log('put request for video');
  Video.findByIdAndUpdate(req.params.id,
    {
      $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
      name: true
    },
    function(err, updatedVideo){
      if(err){
        res.send("Error updating video");
      }else{
        res.json(updatedVideo);
      }
    }
  );
});

router.delete('/video/:id',function(req,res){
  console.log('delete request for video');
  Video.findByIdAndRemove(req.params.id,function(err, deletedVideo){
      if(err){
        res.send("Error deleting video");
      }else{
        res.json(deletedVideo);
      }
    }
  );
});




module.exports = router;
