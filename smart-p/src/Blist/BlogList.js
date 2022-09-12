
import { useState } from 'react';
import { useEffect } from 'react';
import TableTitle from './TableTitle';
import TableRow from './TableRow';




function BlogList() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        async function fetchAddressBlog() {
            let call = await fetch("http://localhost:8081/blogs")
            let tmp = await call.json()
            setBlogs(tmp)
        }
        fetchAddressBlog()
    }, [])

    console.log(blogs)

    return (
        <div className ="cont" >
        <h1 >All blogs!!!</h1>
        <br></br>
        
        <table className="fl-table">
            <TableTitle />
            
            <tbody>
                {blogs.slice(0, 20).map(row => (
                    <TableRow
                        id={row.user_id}
                        blog_title={row.blog_title}
                        blog_body={row.blog_body}  
                        
                    />
                ))}
            </tbody>
            
        </table>
        
        </div>
    )

    
}
export default BlogList;


//Portare l'id del blog post nelle row 
//

