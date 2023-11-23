//schema
 import mongoose from "mongoose";
 const Schema = mongoose.Schema;
 const Student = new Schema({
    FullName: String,
    EmailAddress: { type: String, required: true },
    Password: { type: String, required: true }
    
 });
 export default mongoose.model("students",Student);


//  const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const studentSchema = new Schema({
 
// });

// const Student = mongoose.model('Student', studentSchema);

