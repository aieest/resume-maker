import React from "react";

function ContactPreview({ mobileContact, homeContact, emailContact }) {
    return (
        <div className="preview address">
            {mobileContact && <p>{mobileContact}</p>}
            {homeContact && <p>{homeContact}</p>}
            {emailContact && <p>{emailContact}</p>}
        </div>
    )
}

export default ContactPreview;