import React from "react";

function ContactPreview({ mobileContact, homeContact, emailContact }) {
    return (
        <>
        <p className="preview-subheader">Contacts</p>        
        <div className="preview-contacts">
            {mobileContact && <p>{mobileContact}</p>}
            {homeContact && <p>{homeContact}</p>}
            {emailContact && <p>{emailContact}</p>}
        </div>
        </>
    )
}

export default ContactPreview;