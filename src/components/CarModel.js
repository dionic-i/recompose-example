import React from 'react';
import CarModelList from './CarModelList';
import withToggle from './helpers/WithToggle';

export default withToggle(
	({model, isShow, toggle}) =>
		<span className="Model" onClick={ toggle }>
            ({model})
			{isShow && <CarModelList />}
		</span>
);
