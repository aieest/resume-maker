import React from "react";

function AddressPreview({ streetAddress, cityAddress, postalCodeAddress, stateAddress }) {
    return (
        <>
        <p className="preview-subheader">Address</p>
        <div className="preview-address">
            {streetAddress && <p>{streetAddress}<>,&nbsp;</></p>}
            {cityAddress && <p>{cityAddress}<>,&nbsp;</></p>}
            {postalCodeAddress && <p>{postalCodeAddress}<>&nbsp;</></p>}
            {stateAddress && <p>{stateAddress}</p>}
        </div>
        </>
    )
}

export default AddressPreview;
