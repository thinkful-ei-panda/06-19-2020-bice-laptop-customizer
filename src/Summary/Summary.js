import React from 'react';

import SummaryTotal from '../SummaryTotal/SummaryTotal';

import SummaryOptionsList from '../SummaryOptions/SummaryOptions';

export default class Summary extends React.Component {

	render () {

		return (

			<section className="main__summary">

				<h2>Your cart</h2>

				< SummaryOptionsList selectedFeatures = { this.props.selectedFeatures } />
				
				< SummaryTotal selectedFeatures = { this.props.selectedFeatures } />

			</section>

		);

	}

}