import {mapProps} from 'recompose';

export default (type) => mapProps(({cars}) => ({
	type,
	cars: cars.filter(c => c.type === type)
}));
