import React from 'react';

import SummaryTotal from '../SummaryTotal/SummaryTotal';

import SummaryOptions from '../SummaryOptions/SummaryOptions';

export default class Summary extends React.Component {

	render () {

		return (

			<section className="main__summary">

				<h2>Your cart</h2>

				< SummaryOptions selectedFeatures = { this.props.selectedFeatures } />
				
				< SummaryTotal selectedFeatures = { this.props.selectedFeatures } />

			</section>

		);

	}

}