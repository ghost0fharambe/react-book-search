import React from "react";

export function Form(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-4">GoogleBooks Search!</h1>
			<p className="lead">Enter book to search for!</p>
			<hr className="my-4" />
			{props.children}
		</div>
	)
}

export function Input(props) {
	return (
		<div className="form-group">
			<input className="form-control" {...props} />
		</div>
	)
}

export function FormBtn(props) {
	return (<button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
		{props.children}
	</button>)
}