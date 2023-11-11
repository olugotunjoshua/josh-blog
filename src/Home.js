
import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);



    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:5000/blogsa')
        .then(res => {
            if(!res.ok){
                throw Error("could not fetch the data you were looking for or the resource");
            }
            return res.json()
        })
        .then(data =>{
            setBlogs(data);
            setError(null);
            setIsPending(false);
        })
        .catch(err =>{
            setIsPending(false);
            setError(err.message);
            console.log(err.message);
        })
    }, 1000);
    },[]);

    return (
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading....</div> }
           {blogs && <BlogList blogs={blogs} title={"All Blogs!"}/>}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'wisdom')} title={"Wisdom blogs"} handleDelete={handleDelete}></BlogList> */}
        </div>
    )



}
export default Home;