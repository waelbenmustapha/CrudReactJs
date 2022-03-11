import React, { useEffect, useState } from 'react'
import AddBook from '../Components/AddBook'
import EditBook from '../Components/EditBook'
import ListeBook from '../Components/ListeBook'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

function Book() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

 
  
const [books,setBooks]=useState([{id:1,nom:"book one",auteur:"act 1",category:"drama"},{id:2,nom:"book two",auteur:"act 2",category:"action"},{id:3,nom:"book three",auteur:"act 3",category:"action"}])
const [idtoupdate,setidtoupdate]=useState(null);



  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',gap:20}}>
    <div style={{margin:'0px auto'}}>
        <p className='hover' style={{padding:'15px',border:'1px solid blue',borderRadius:'8px'}} onClick={()=>{setShow(true);console.log(show)}}>Add Book</p>
        <ListeBook setshow={setShow1} setidtoupdate={setidtoupdate} books={books} setbooks={setBooks}/></div>
        <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><AddBook setshow={setShow} books={books} setbooks={setBooks}/></Modal.Body>
        <Modal.Footer>
         
         
        </Modal.Footer>
      </Modal>
      <Modal show={show1} onHide={()=>setShow1(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><EditBook setshow={setShow1} books={books} setbooks={setBooks} idtoupdate={idtoupdate}/>
</Modal.Body>
        <Modal.Footer>
        
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Book