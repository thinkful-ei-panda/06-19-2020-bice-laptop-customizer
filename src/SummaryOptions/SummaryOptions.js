import React from 'react';

//import FEATURES from './Features';

import USCurrencyFormat from '../USCurrencyFormat/USCurrencyFormat';

export default class SummaryOptions extends React.Component {
    
    render (){
        
        let summaryOptions = Object.keys ( this.props.selectedFeatures ).map ( ( feature, idx ) => {
                
            const featureHash = feature + '-' + idx;

            const selectedOption = this.props.selectedFeatures[ feature ];

            return (

                <div className="summary__option" key = { featureHash }>
                    
                    <div className="summary__option__label">{ feature } </div>
                    
                    <div className="summary__option__value">{ selectedOption.name }</div>
                    
                    <div className="summary__option__cost">
                    
                        < USCurrencyFormat cost = { selectedOption.cost } />
                    
                    </div>

                </div>

            );

        })

        return (

            <> { summaryOptions } </>

        );
    }
}