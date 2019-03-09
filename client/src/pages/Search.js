import React, { Component } from "react";
import { Form, Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import { CardDeck, Card, Image, CardBody, CardButton } from "../components/ResultCard";
import API from "../utils/API";
import { NoResult } from "../components/NoResults";

class Search extends Component {
	state = {
		books: [],
		title: "",
		bookArray: []
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		//if (this.state.title) {
		API.googleBook(this.state.title)
			.then(res => {
				this.setState({
					books: res.data.items.filter(book => {
						if (book.volumeInfo.imageLinks === undefined) {
							return false;
						}
						return true;
					}).map(book => ({
						title: book.volumeInfo.title,
						author: book.volumeInfo.authors,
						description: book.volumeInfo.description,
						image: book.volumeInfo.imageLinks.smallThumbnail,
						link: book.volumeInfo.infoLink
					}))
				})

			})
			.catch(err => console.log(err));
		//}
	};

	saveBook = book => {
		API.saveBook(book).then(console.log).catch(console.log);
	};

	render() {
		return (
			<div>
				<Link to={"/saved"}>
					<strong>
						Go to Saved Books
					</strong>
				</Link>
				<Form>
					<Input
						value={this.state.title}
						onChange={this.handleInputChange}
						name="title"
						placeholder="Title to search"
					/>
					<FormBtn onClick={this.handleFormSubmit}>Search Book</FormBtn>
				</Form>
				{this.state.books.length ? (
				<CardDeck>
					{this.state.books.map((book, i) => (
						<Card key={i}>
							<Image src={book.image} />
							<CardBody title={book.title} save={() => this.saveBook(book)} description={book.description} authors={book.authors} />
							<CardButton save={() => this.saveBook(book)} />
						</Card>
					))}
				</CardDeck>
				) : (
					<NoResult />
				)}
			</div>
		)
	}
}

export default Search;