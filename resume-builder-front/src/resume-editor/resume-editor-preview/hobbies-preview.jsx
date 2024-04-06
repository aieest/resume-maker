import React from "react";

function HobbyPreview({ hobbies }) {
    return (
        <div>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}

export default HobbyPreview;