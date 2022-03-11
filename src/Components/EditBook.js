import React, { useState } from "react";
import { editbook } from "../Service/BookService";
import Button from 'react-bootstrap/Button';

function EditBook(props) {
  const [nom, setNom] = useState(props.idtoupdate.nom);
  const [auteur, setauteur] = useState(props.idtoupdate.auteur);
  const [category, setCategory] = useState(props.idtoupdate.category);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
       book nom:
      <input value={nom} onChange={(e) => setNom(e.target.value)} />
      auteur:
      <input value={auteur} onChange={(e) => setauteur(e.target.value)} />
      category:
      <input value={category} onChange={(e) => setCategory(e.target.value)} />
      <Button
        onClick={() => {
          console.log(props.idtoupdate.id)
          editbook(
            { id: props.idtoupdate.id, nom, auteur: auteur, category: category },
            props.books,
            props.setbooks,
            props.idtoupdate.id
          );
          props.setshow(false);
        }}
        variant="primary"
      >
        Edit Book{" "}
      </Button>
    </div>
  );
}

export default EditBook;
