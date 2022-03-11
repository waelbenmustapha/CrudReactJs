import React, { useState } from 'react';
import { deletedbook } from '../Service/BookService';
import edit from "../images/edit.png";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

import del from "../images/delete.png";
function ListeBook(props) {
  const [show, setShow] = useState(false);
  const [id,setId]=useState(null);

  return (
    <div>
        <Modal size='sm' show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Are you sure you want to delete this book ?</p></Modal.Body>
        <Modal.Footer>
    <Button onClick={()=>setShow(false)} variant="secondary">Close</Button>
    <Button  onClick={()=>{deletedbook(props.books,props.setbooks,id);setShow(false)}} variant="outline-danger">Delete</Button>
  </Modal.Footer>
      </Modal>
<table>
<tr><th>nom</th>
<th>auteur</th>
<th>category</th>
<th>edit</th>
<th>delete</th></tr>
{props.books.map((el)=><tr>
<td>{el.nom}</td> 
<td>{el.auteur}</td> 
<td>{el.category}</td> 
<td className='hover pop' onClick={()=>{props.setidtoupdate(el);props.setshow(true)}}><img style={{height:'25px',width:'25px'}} src={edit}/></td> 
<td className='hover pop' onClick={()=>{setShow(true);setId(el.id)}}><img style={{height:'25px',width:'25px'}} src={del}/></td> 
</tr>)}

</table>


    </div>
  )
}

export default ListeBook