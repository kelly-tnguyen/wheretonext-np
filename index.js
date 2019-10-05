let express = require("express");
const dotenv = require("dotenv");
const thePort = process.env.PORT || 4000;

dotenv.config();
let usersRoute = require("./server/routes/usersRoute");
let nationalParksRoute = require("./server/routes/nationalParksRoute");
let likedRoute = require("./server/routes/likedRoute")
let archiveRoute = require("./server/routes/archiveRoute")
const path = require('path')

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://kelly-nguyen-1:45683968kn@aca-practice-ss4lm.mongodb.net/wheretonext?retryWrites=true&w=majority', {useNewUrlParser: true},(err)=>{
//    console.log("the error is",err)
//    //start web server
// });


const mongoose = require('mongoose');
mongoose
.connect(process.env.mongodburi,  {useNewUrlParser: true},(err)=>{
   //start web server
}).then(console.log('db connected')).catch(err => console.log(err))


const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("./client/public"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(usersRoute);
app.use(nationalParksRoute);
app.use(likedRoute);
app.use(archiveRoute);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static(path.join(__dirname, "../build")));
  
  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
  });
  } else{
  app.use(express.static(path.join(__dirname, "../build")));
  }



  app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
