import React from "react";

function NamePreview({ familyName, middleName, givenName, suffixName }) {
    return (
        <div className="preview-name">
            <p className="family-name-preview">{familyName?.length > 0 ? familyName : "Family Name"},&nbsp;</p>
            <p className="given-name-preview">{givenName?.length > 0 ? givenName : "Given Name"}&nbsp; </p>
            {middleName && <p className="middle-name-preview">{middleName}&nbsp;</p>}
            {suffixName && <p className="suffix-name-preview">{suffixName}</p>}
        </div>
    )
}

export default NamePreview;
