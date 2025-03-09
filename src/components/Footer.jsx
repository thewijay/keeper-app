import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear(); 
    return(
        <footer>
        <p>copyright &#169; {currentYear}</p>
        </footer>
    );
}

export {Footer};