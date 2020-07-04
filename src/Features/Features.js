import React from 'react';

import FEATURES from '../Features';

import FeatureOption from '../FeatureOption/FeatureOption';

export default class Features extends React.Component {
    
    tmpState = { ...this.props.selectedFeatures };
    
    render () {
        
        const features = Object.keys ( FEATURES ).map ( ( feature, idx ) => {
            
            const featureHash = feature + '-' + idx;

            return (
                
                <fieldset className = 'feature' key = { featureHash }>
                
                    <legend className = 'feature__name'>
                
                        <h4>{ feature }</h4>
                
                    </legend>
                
                    <FeatureOption key = 'featureOptions' tmpState = { this.tmpState } featureList = { FEATURES } feature = { feature } updateFeature = { this.props.updateFeature } />
                
                </fieldset>

            );
        
        });

        return (

            <>

                { features }
            
            </>

        );
    
    }
}