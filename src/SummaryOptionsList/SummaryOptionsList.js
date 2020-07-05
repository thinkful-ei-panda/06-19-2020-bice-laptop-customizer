import React from 'react';

import SummaryOptions from '.../SummaryOptions/SummaryOptions';

export default class SummaryOptionsList extends React.Component {
    
    render (){
        
        return Object.keys ( this.props.selectedFeatures ).map ( ( feature ) => {

            return ( <SummaryOptions selectedFeatures = { feature }/> );

        })

    }
}