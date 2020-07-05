import React from 'react';

import FeatureOption from '../FeatureOption/FeatureOption';

export default class Features extends React.Component {
    
    //tmpState = { ...this.props.selectedFeatures };
    
    render () {
        
        const features = Object.keys ( this.props.features ).map ( ( feature, idx ) => {
            
            const featureHash = feature + '-' + idx;

            return (
                
                <fieldset className = 'feature' key = { featureHash }>
                
                    <legend className = 'feature__name'>
                
                        <h4>{ feature }</h4>
                
                    </legend>
                
                    <FeatureOption key = 'featureOptions' selectedFeatures = { this.props.selectedFeatures } featureList = { this.props.features } feature = { feature } updateFeature = { this.props.updateFeature } />
                
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