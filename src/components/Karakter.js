import React from "react";

const Karakter = ({ karakter }) => {
    return <div>
        <h1>{karakter.name}</h1>
        <h3>{karakter.height}</h3>
        <h3>{karakter.mass}</h3>
        <h3>{karakter.hair_color}</h3>
        <h3>{karakter.skin_color}</h3>
        <h3>{karakter.eye_color}</h3>
        <h3>{karakter.birth_year}</h3>
        <h3>{karakter.gender}</h3>

    </div>
}
export default Karakter