import React from 'react';

const currency = new Intl.NumberFormat ( 'en-US',  {
        
    style: 'currency',
    currency: 'USD'
  
});

export default class USCurrencyFormat extends React.Component {
    
    render () {
        
        const cost = currency.format ( this.props.cost )

        return cost ;

    }

}