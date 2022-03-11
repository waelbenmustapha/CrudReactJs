import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { addbook } from "../Service/BookService";

function AddBook(props) {
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const [nom, setNom] = useState("");
  const [auteur, setauteur] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      nom:
      <input onChange={(e) => setNom(e.target.value)} />
      auteur:
      <input onChange={(e) => setauteur(e.target.value)} />
      category:
      <input onChange={(e) => setCategory(e.target.value)} />
      
      <Button   onClick={() => {
          addbook(
            { id: makeid(5), nom: nom, auteur: auteur, category: category },
            props.books,
            props.setbooks
          );
          props.setshow(false);
        }} variant="primary" >
Add Book          </Button>
    </div>
  );
}

export default AddBook;
