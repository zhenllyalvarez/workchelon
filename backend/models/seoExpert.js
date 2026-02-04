import mongoose from "mongoose";

// 1. create a schema
// 2. model base off of that schema

const seoExpertSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phonenumber: {
        type: Number,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    }
},
{ timestamps: true }
);

const seoExpert = mongoose.model("seoExpert", seoExpertSchema);

export default seoExpert;