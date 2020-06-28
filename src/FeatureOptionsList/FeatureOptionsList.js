import React from 'react';

import FeatureOption from '../FeatureOption/FeatureOption';

export default class FeatureOptionsList extends React.Component {

    render () {

        const tmpState = { ...this.props.selectedFeatures };

        const features = Object.keys ( this.props.featureList ).map ( ( feature, idx ) => {
            
            const featureHash = feature + '-' + idx;

            return (
                
                <fieldset className = 'feature' key = { featureHash }>
                
                    <legend className = 'feature__name'>
                
                        <h4>{ feature }</h4>
                
                    </legend>
                
                    <FeatureOption key = 'featureOptions' tmpState = { tmpState } featureList = { this.props.featureList } feature = { feature } updateFeature = { this.props.updateFeature } />
                
                </fieldset>

            );
        
        });
        
        return (
        
            <section className = 'main__options'>
                
                <h2>Customize your laptop</h2>

                <form className = 'main__form'>

                    <legend>
                        
                        <h3>Options Menu</h3>
                    
                    </legend>

                    { features }

                </form>

            </section>

        );

    }

}