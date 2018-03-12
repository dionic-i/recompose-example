import React from 'react';
import CarModel from './CarModel';
import {
	compose,
	branch,
	renderComponent
} from 'recompose';

import Spinner from './helpers/Spinner';
import withConfig from './helpers/WithConfig';

const CarWideInfo = ({model,config}) =>
	<span>{config.showModel && <CarModel model={model}/>} {config.canCarDelete && <button className="btn btn-primary btn-xs">X</button>}</span>;

const withSpinner = branch(
	({loading}) => loading,
	renderComponent(Spinner)
);

const enhance = compose(
	withConfig,
	withSpinner
);

export default enhance(CarWideInfo);
