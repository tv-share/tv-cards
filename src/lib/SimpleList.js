import React from "react";
import PropTypes from "prop-types";

const SimpleList = props => {
	return (
		<ul className="simple-list">
			{renderItems(props.list)}
		</ul>
	);	
};

const renderItems = items => {
	return items.map(item => {
		return (
			<li className="item">
				<span> {item.label} </span>
				<span> {item.value || "-"} </span>
			</li>
		);
	});
};

SimpleList.propTypes = {
	label: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func
};

export default SimpleList;