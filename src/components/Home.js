import React, {Component} from 'react';
import BookDetail from './BookDetail';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {books: []};
	}

	renderBooks = () => {
		return this.props.books.map((book) => {
			return(
				<BookDetail key={book.isbn} book={book} addToCart={this.props.addToCart}/>
			);
		});
	}

	render() {
		return(
			<div className='container'>
				<div className="grid grid--center">
					{this.renderBooks()}
				</div>
			</div>
		)
	}
}

export default Home;