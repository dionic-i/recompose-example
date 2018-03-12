import {
	compose,
	withState,
	withHandlers,
} from 'recompose';

export default compose(
	withState('isShow', 'toggleVisible', false),
	withHandlers({
		show  : ({toggleVisible}) => (e) => toggleVisible(true),
		hide  : ({toggleVisible}) => (e) => toggleVisible(false),
		toggle: ({toggleVisible}) => (e) => toggleVisible((current) => !current)
	})
);
