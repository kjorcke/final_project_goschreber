import React from 'react';
import VerwaltungsItem from "./VerwaltungsItem"

function Verwaltung({userAnzeigen}) {
    return (
        <div>
             {userAnzeigen.map(anzeige => <VerwaltungsItem anzeige={anzeige} key={anzeige._id}/>)}
        </div>
    )
}

export default Verwaltung
