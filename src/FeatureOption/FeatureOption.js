import React from 'react';

import slugify from 'slugify';

import USCurrencyFormat from '../USCurrencyFormat/USCurrencyFormat';

export default class FeatureOptionsList extends React.Component {

    render () {
        
        const options = this.props.featureList[ this.props.feature ].map ( ( option, i ) => {
            
            const optionHash = slugify ( JSON.stringify ( option ) );
                 
                return ( 
                        
                    <div key = { optionHash } className = 'feature__item'>
                         
                        <input
                            type = 'radio'
                            id = { optionHash }
                            className = 'feature__option'
                            name = { slugify ( this.props.feature ) }
                            checked = { option.name === this.props.selectedFeatures[ this.props.feature ].name }
                            onChange = { e => this.props.updateFeature ( this.props.feature, option ) }
                        />

                        <label htmlFor = { optionHash } className = 'feature__label'>
                             
                            { option.name } ( < USCurrencyFormat cost = { option.cost } /> )
         
                        </label>

                    </div>
                    
                );
        
        });
        
        return (

            <>

                { options }

            </>
            
        );

    }

}