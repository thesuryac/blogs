import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        default:"https://imgs.search.brave.com/2goiKsbBc-dbzWsesB7aioyGVhyAON40zeRA6DvyiM0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2VhNy9ibG9n/LTEyNDIwMzguanBn/P2ZtdA",
    },
    category:{
        type:String,
        default:"uncategorized",
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    }
},{
    timestamps:true
});

const Post = mongoose.model("Post",postSchema);

export default Post;
