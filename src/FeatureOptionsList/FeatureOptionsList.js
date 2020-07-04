import React from 'react';

import Features from '../Features/Features';

export default class FeatureOptionsList extends React.Component {
    
    render () {
        
        return (
        
            <section className = 'main__options'>
                
                <h2>Customize your laptop</h2>

                <form className = 'main__form'>

                    <legend>
                        
                        <h3>Options Menu</h3>
                    
                    </legend>

                    <Features selectedFeatures = { this.props.selectedFeatures } updateFeature = { this.props.updateFeature } />

                </form>

            </section>

        );

    }

}