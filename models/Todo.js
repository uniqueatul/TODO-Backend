
const { MaxLength } = require("buffer");
const mongoose = require ("mongoose");
const { type } = require("os");
const { title } = require("process");

const todoSchema  =  new mongoose.Schema(
    {
        title:{
            type:String,
            required: true,
            MaxLength: 50,

        }, 
        

            descrption: {
                type: String,
                reqired: true,
                MaxLength: 50,

            },

            createdAt: {
                type : Date,
                 reqired: true,
                 default: Date.now,


            },

            updateAt: {
                type : Date,
                required: true,
                default: Date.now,
            }


    
        }
    
);

module.exports = mongoose.model("todo",todoSchema);