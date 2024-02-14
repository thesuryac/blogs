import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Button, Spinner} from 'flowbite-react'
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';


export default function Postpage() {
    const {postSlug} = useParams();
    const [loading ,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [post,setPost] = useState(null)
    const [recentPosts,setRecentPosts] = useState(null);

    useEffect(()=>{
        const fetchPost = async ()=>{
            try {
                setLoading(true)
                const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
                const data = await res.json();
                if(!res.ok){
                    setError(true)
                    setLoading(false)
                }
                else{
                    setPost(data.posts[0]);
                    setLoading(false);
                    setError(false)
                }
                
            } catch (error) {
                setError(true)
                setLoading(false)
                
            }
        }
        fetchPost();

    },[postSlug])
    useEffect(()=>{
        try {
            const fetchrecentPosts = async ()=>{
                const res = await fetch(`/api/post/getPosts?limit=3`);
                const data = await res.json();
                if(res.ok){
                    setRecentPosts(data.posts);
                }
            };
            fetchrecentPosts();
        } catch (error) {
            console.log(error)
            
        }
    },[postSlug])
    if(loading){
        return (
        <div className="flex justify-center item-center min-h-screen">
        <Spinner size="xl"/>
        
        </div>

        )
        
    }

  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
        <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-auto lg:text-4xl'>{post && post.title}</h1>
        <Link to={`search?category=${post && post.category}`} className='self-center mt-5' >
        <Button color='gray' pill size='xs' >{post && post.category}</Button>
        </Link>
        <img src={post && post.image} alt={post && post.title}  className='mt-10 p-3 max-h-[600px] w-full object-cover'/>
        <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
            <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
            <span className='italic'>{post && (post.content.length / 1000).toFixed(0)} mins read</span>
        </div>

        <div className="p-3 max-w-2xl mx-auto post-content"dangerouslySetInnerHTML={{__html:post && post.content}}>

        </div>
        <CommentSection postId={post._id}/>

        <div className="flex flex-col justify-center items-center mb-5">
            <h1 className='text-xl mt-5'>Recent articles</h1>
            <div className="flex flex-wrap gap-5 mt-5 justify-center w-full">
                {
                    recentPosts && 
                        recentPosts.map((post)=>(
                           <PostCard key={post._id} post={post}/>
                        ))
                }</div>
        </div>
     



    </main>
  )
}
