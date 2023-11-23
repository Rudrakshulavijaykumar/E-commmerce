import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import student from './model/student.js';
// import nodemailer from "/nodemailer"

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://rvijay77:25724600@cluster0.nxslt4m.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(() => app.listen(8888))
.then(() =>console.log("connected to database and listing to localhost 8888"))
.catch((err) => console.log(err));
app.post('/addstudent1',(req,res,next)=>{
  console.log(req.body.formdata)
  const {FullName,EmailAddress,Password} = req.body.formdata;
  const student1 = new student({
    FullName,
    EmailAddress,
    Password
  })
  try{
    student1.save()
  }catch(err){
    console.log(err);
  }
  return res.send({"student":student1})
})
