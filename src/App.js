import React from 'react';
import {mockCars as cars} from './mock/car-config-mock';

import {HondaCars, SubaruCars, NissanCars} from './components/CarList';

const App = (props) => {
	return (
		<div className="container">
			<h1>Список машин</h1>
			<div className="row">
				<div className="col-xs-4">
					<HondaCars cars={cars} />
				</div>
				<div className="col-xs-4">
					<NissanCars cars={cars} />
				</div>
				<div className="col-xs-4">
					<SubaruCars cars={cars} />
				</div>
			</div>
		</div>
	);
};

export default App;
