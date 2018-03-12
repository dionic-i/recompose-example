import React from 'react';
import filterByType from './helpers/FilterByType';

import Car from './Car';

export const CarList = ({ cars, type }) =>
	<div className="carList">
		<h3>{type}</h3>
		{cars && cars.map((car) => <Car key={car.id} {...car}/>)}
	</div>;

export const HondaCars = filterByType('Honda')(CarList);
export const NissanCars = filterByType('Nissan')(CarList);
export const SubaruCars = filterByType('Subaru')(CarList);
