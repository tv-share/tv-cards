import React from "react";
import PropTypes from "prop-types";

const ExpandableBox = (props) => {
	const { className = "", title, children, isOpen, clickAction } = props;
	return (
		<div className={`expandable-box ${className}`}>
			<div className="title" onClick={clickAction}>{title}</div>
			{
				isOpen ?
				<span>
					<div className="line" />
					<div className="content">
						{children}
					</div>
				</span>  :
				null
			}
		</div>
	);
};

ExpandableBox.propTypes = {
	title: PropTypes.string.isRequired
};

export default ExpandableBox;