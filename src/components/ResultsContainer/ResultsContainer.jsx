import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/Namecard';

const ResultsContainer =({ suggestedNames} ) =>{
    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName}></NameCard>
    })
    return(
        <div className ="results-container">
            { suggestedNameJsx }
        </div>
    )
}
export default ResultsContainer;