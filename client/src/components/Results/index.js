import React from "react";

export function UnorderedList(props) {
	return (
		<div className="list-overflow-container">
			<ul className="list-group">
				{props.children}
			</ul>
		</div>
	);
}

export function ListItem(props) {
	return (
		<li className="list-group-item" {...props} >
			{props.children}
		</li>
	)
}