import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import db from "./firebase-config";
import "./App.css"

function CardAdd() {
    const [Name, setName] = useState("");
    const [Type, setType] = useState("");
    const [Description, setDescription] = useState("");
    const [ImageURL, setImageURL] = useState("");
    const [Rarity, setRarity] = useState("");

    const handleAddData = async () => {
        if (Name != "" && Type != "" && Description != "" && ImageURL != "" && Rarity != "") {
            const docRef = await addDoc(collection(db, "cards"), {
                Name : Name,
                Type : Type,
                Description : Description,
                ImageURL: ImageURL,
                Rarity : Rarity
            });
            console.log("Document written with ID: ", docRef.id);
            restart();
        }
    }

    const restart = () => {
        let inputs = document.querySelectorAll('input');
        setName("");
        setType("");
        setDescription("");
        setImageURL("");
        setRarity("");
        inputs.forEach(input => input.value = "");
    }

    return (
        <div className="cardsAdd"> 
            <div className="inputsAdd">
                <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Type (Item, Special, Unique)" onChange={(e) => setType(e.target.value)}/>
                <input type="text" placeholder="Rarity (Common, Rare, Epic)" onChange={(e) => setRarity(e.target.value)}/>
                <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                <input type="text" placeholder="ImageURL" onChange={(e) => setImageURL(e.target.value)}/>
                <button onClick={handleAddData}>Add</button>
            </div>
        </div>
    )
}

export default CardAdd;
