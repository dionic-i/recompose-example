import React from 'react';
import withToggle from './helpers/WithToggle';

export default withToggle(
	({tooltip, children, isShow, hide, show}) =>
		<span>
		{ isShow && <div className="Tooltip">{tooltip}</div> }
			<span onMouseEnter={ show } onMouseLeave={ hide }>
            {children}
		</span>
	</span>
);
