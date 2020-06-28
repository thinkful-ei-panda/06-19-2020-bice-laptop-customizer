import React from 'react';

import USCurrencyFormat from '../USCurrencyFormat/USCurrencyFormat';

export default class Summary extends React.Component {

	render () {

		const summary = Object.keys ( this.props.selectedFeatures ).map ( ( feature, idx ) => {
		
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

		});
		
		const total = Object.keys ( this.props.selectedFeatures ).reduce (

		 	( acc, curr ) => acc + this.props.selectedFeatures[ curr ].cost,

		 	0

		);
		
		return (

			<section className="main__summary">

				<h2>Your cart</h2>

				{ summary }
				
				<div className="summary__total">
				
					<div className="summary__total__label">Total</div>
					
					<div className="summary__total__value">
					
						< USCurrencyFormat cost = { total } />
					
					</div>
					
				</div>

			</section>

		);

	}

}