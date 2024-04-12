import React from "react";

function HobbyPreview({ hobbies }) {
    return (
        <>
        <p className="preview-subheader">Hobbies</p>
        <div className="hobbies-preview">
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default HobbyPreview;