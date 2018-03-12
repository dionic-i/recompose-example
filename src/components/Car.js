import React from 'react';
import PropTypes from 'prop-types';
import {
	compose,
	setDisplayName,
	setPropTypes,
} from 'recompose';

import withConfig from './helpers/WithConfig';
import Tooltip from './Tooltip';
import CarWideInfo from './CarWideInfo';
import Speed from './Speed';

const enhance = compose(
	setDisplayName('Car'),
	setPropTypes({
		model       : PropTypes.string.isRequired,
		speed       : PropTypes.number.isRequired,
		type        : PropTypes.string.isRequired,
		showModel   : PropTypes.bool,
		canCarDelete: PropTypes.bool,
	}),
	withConfig
);

export default enhance(({type, model, speed, config}) =>
	<div className="Car">
		<Tooltip tooltip="Формула: V = S/t">
			<Speed value={speed}/>
		</Tooltip>
		: {type} <CarWideInfo model={model} config={config} />
	</div>);
