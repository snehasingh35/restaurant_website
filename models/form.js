//Requiring mongoose package 
var mongoose=require("mongoose"); 

// Schema 
var formSchema=new mongoose.Schema({ 
	username : String, 
	email : String 
}); 

module.exports=mongoose.model("Form",formSchema);
