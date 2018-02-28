import React from "react";
import PropTypes from "prop-types";

const ExpandableBox = (className = "", title, children, isOpen, clickAction) => {
	return (
		<div className={`expandable-box ${className}`}>
			<div className="title" onClick={clickAction}>{title}
				<p className = {isOpen ? "down" : "up"}> <i className="right"></i></p>			
			</div>
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
	title: PropTypes.string.isRequired,
	isOpen: PropTypes.bool,
	clickAction: PropTypes.func
};

export default ExpandableBox;