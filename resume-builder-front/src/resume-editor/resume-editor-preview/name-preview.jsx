import React from "react";

function NamePreview({ familyName, middleName, givenName, suffixName }) {
    return (
        <div className="preview name">
            <p>{familyName?.length > 0 ? familyName : "Family Name"}</p>
            <p>{givenName?.length > 0 ? givenName : "Given Name"}</p>
            {middleName && <p>{middleName}</p>}
            {suffixName && <p>{suffixName}</p>}
        </div>
    )
}

export default NamePreview;
