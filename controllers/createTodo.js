
const { error } = require("console");
const Todo = require ("../models/Todo");

exports.createTodo = async (req , res) =>{
    try {

        const {title, discription} = req.body;
        const response = await Todo.create({title , description});
        res.status(200).json({
            success: true,
            data: response,
            message: "entery created successfully"
        });
    }
    catch (err){

        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data: "internal surver error",
            message: err.message,
        })
        

    }
}