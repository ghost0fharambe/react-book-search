import React from "react";
import "./style.css";


export function CardDeck(props) {
	return (
		<div className="card-deck">
			{props.children}
		</div>
	);
};

export function Card(props) {
	return (
		<div className="card">
			{props.children}
		</div>
	);
};

export function Image(props) {
	return (
		<img className="card-img-top img-container" src={props.src} alt="img" />
	);
};

export function CardBody(props) {
	return (
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">{props.description}</p>
			<p className="card-text"><small className="text-muted">{props.authors}</small></p>
		</div>
	);
};

export function CardButton(props) {
	return (<button className="btn btn-danger" onClick={props.save}>Save Book</button>)
}

export function BookLink(props) {
	return (
		<a href={props.link}>{props.children}</a>
	)
}