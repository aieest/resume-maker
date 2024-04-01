import React from "react";

function AddressPreview({ streetAddress, cityAddress, postalCodeAddress, stateAddress }) {
    return (
        <div className="preview address">
            {streetAddress && <p>{streetAddress}</p>}
            {cityAddress && <p>{cityAddress}</p>}
            {postalCodeAddress && <p>{postalCodeAddress}</p>}
            {stateAddress && <p>{stateAddress}</p>}
        </div>
    )
}

export default AddressPreview;
