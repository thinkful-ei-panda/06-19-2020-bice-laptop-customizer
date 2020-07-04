import React from 'react';

import USCurrencyFormat from '../USCurrencyFormat/USCurrencyFormat';

export default class SummaryTotal extends React.Component {

    render () {
        
        const total = Object.keys ( this.props.selectedFeatures ).reduce (

            ( acc, curr ) => acc + this.props.selectedFeatures[ curr ].cost,

            0

        );

        return (

            <div className="summary__total">
                
                <div className="summary__total__label">Total</div>
                    
                <div className="summary__total__value">
                    
                    < USCurrencyFormat cost = { total } />
                    
                </div>
                    
            </div>

        );

    }

}