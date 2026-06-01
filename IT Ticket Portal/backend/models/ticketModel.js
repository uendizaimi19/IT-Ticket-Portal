const mongoose=require("mongoose");

const ticketSchema=
mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

title:{
type:String,
required:true
},

category:{
type:String,
required:true
},

status: {
  type: String,
  enum: ["Open", "In Progress", "Resolved", "Closed"],
  default: "Open",
},

description:{
type:String,
required:true
},

priority:{
type:String,
required:true
},

status:{
type:String,
default:"Open"
}

},

{

timestamps:true

}

);

module.exports=
mongoose.model(
"Ticket",
ticketSchema
);