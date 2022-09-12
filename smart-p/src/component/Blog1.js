import React, { useState } from "react"
import"./Blog1.css"



const Create = () => {
  
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {  title, body, date,  };
    
    fetch('http://localhost:8081/nBlog?blog_title='+title+'&blog_body='+body +' &day='+ date,{
    method: 'POST',
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(blog)
    }).then(() => {
        console.log('New blog added!!');
    }
    ) 

    
}
 
    return (
        <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit} className="form">
            <label style={{position: "absolute"}}>Blog title:</label>
            <input 
             type="text"
             value={title}
             required
             placeholder="Your blog in a few words "
             onChange= {(e) => setTitle(e.target.value)}
             /> 
             
            <label style={{position:"absolute"}}>Blog body:</label>
            <textarea className="write"
              required
              value={body}
              onChange = {(e) => setBody(e.target.value)}
              style={{position:"relative", left: "3px", top: "25px",bottom:"20px"}}
              placeholder="write here"
              ></textarea>

              <label  style={{position: "absolute",}}>Current date is {date}</label>
              
              <button  style={{position:"relative", left:"20px"}}>ADD BLOG</button>
              
        </form>
        </div>
    )
}


export default Create