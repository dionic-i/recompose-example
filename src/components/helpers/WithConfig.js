import {lifecycle} from 'recompose';
import _ from 'lodash';

function fetchCarPrivs() {
	return new Promise((resolve) => {
		const showModel = _.random(0, 100) > 50;
		const canCarDelete = _.random(0, 100) < 50;
		const howLong = _.random(1, 5) * 1000;
		setTimeout(() => {
			resolve({
				showModel,
				canCarDelete
			});
		}, howLong);
	});
}

export default lifecycle({
	componentWillMount() {
		this.setState({loading: true, config: {}});
	},
	componentDidMount() {
		fetchCarPrivs().then(config => {
			this.setState({loading: false, config});
		});
	}
});
