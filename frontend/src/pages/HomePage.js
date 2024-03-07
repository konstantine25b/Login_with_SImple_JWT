import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
const HomePage = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });

    let data = await response.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div>
      <p>Homepage</p>

      <ul>
        {notes? notes.map((note) => {
          return <li key={note.id}>{note.body}</li>;
        }): null}
      </ul>
    </div>
  );
};

export default HomePage;
