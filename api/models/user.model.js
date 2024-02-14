import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,

    },
    profilePicture:{
        type:String,
        default:"https://imgs.search.brave.com/UfByHaUWn4fefCd8wp5-WiFM1xqB_Vtkt6NdKl2XKuY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzgzLzkwLzk1/LzM2MF9GXzQ4Mzkw/OTU2OV9PSTRMS05l/RmdId3Z2Vmp1NjBm/ZWpMZDlnajQzZElj/ZC5qcGc",

    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true
});

const User = mongoose.model("User",userSchema);

export default User;
