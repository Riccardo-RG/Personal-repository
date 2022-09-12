
import { useState } from 'react';
import './BlogList.css';
import { Modal, ModalBody, ModalFooter, ModalHeader,  } from "reactstrap"


function TableRow(value) {
    const [ntitle, setNtitle] = useState("")
  const [nbody, setNbody] = useState("")
    const [openModalUpdate, setOpenModalUpdate] = useState(false)
    
    console.warn(value.id)
    function deleteBlog() {
        
        if (window.confirm("Sei sicuro ?")) {
            fetch("http://localhost:8081/blogs/" + value.id, {method:'DELETE'}).then((tmp) =>{
                //O FACCIAMO UNA CHIAMATA PER FARTI RIDARE TUTTI I BLOG CHE NON HAI ELIMINATO
                //OPPURE RIMUOVERE QUESTA TABLE ROW
                    console.warn(tmp)
                 
            })  
        } 
    }

    function closeModalUp() {
        setOpenModalUpdate(false)
    }

    
    
    console.log(value)
    
    return (
        
        <tr>
        <td>{value.id}</td>
        <td>{value.blog_title}</td>
        <td>{value.blog_body}</td>
        <button style={{marginRight: "3px",backgroundColor:""}} onClick={deleteBlog} >X</button>
        
        <button onClick={function openModalUpdate(){setOpenModalUpdate(true)}} className="openModalBtn"  >Update</button> 
        <Modal isOpen={openModalUpdate}
        external={<button onClick={closeModalUp} className='Close' style={{position: 'absolute', left: '65%', top: "30px", backgroundColor:"rgb(255,102,102)",}}>X</button>}
        >
            <ModalHeader>
                <h3 style={{textAlign:"center"}}>Change your Blog </h3>
                <button onClick={closeModalUp}>X</button>
            </ModalHeader>
            <ModalBody>
            
                <div className='create'>
                    <form>
                    <label style={{position: "absolute"}}>New title:</label>
            <input 
             type="text"
             value={ntitle}
             required
             placeholder="Your blog in a few words "
             onChange= {(e) => setNtitle(e.target.value)}
             /> 
             
            <label style={{position: "absolute"}}>New body:</label>
            <textarea
              required
              value={nbody}
              onChange = {(e) => setNbody(e.target.value)}
              style={{position: "relative", left: "3px", top: "41px"}}
              placeholder="write here"
              ></textarea>
                    </form>
                </div>
            <ModalFooter>
            
            
            </ModalFooter>
                            
            </ModalBody>
        </Modal>
        </tr>
      
       
        
        
        
        )
        
}        


export default TableRow



//Devo creare una nuova pagina
//<td><button className="openModalBtn" onClick={() => setOpenModal(true)}>Update  </button></td>
   //     {openModal && <Modal closeModal ={setOpenModal}/>}
   //const [openModal, setOpenModal] = useState(false)