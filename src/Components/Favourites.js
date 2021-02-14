import React from 'react';



function Favourite({verein}) {

   
    

    return (
        
        <div className="favouritecard">
            
            <div>{verein.kgvname}</div>
            <div>{verein.adresse.strasse}</div>
            <div>{verein.email}</div>
        </div>
    )
}

export default Favourite
