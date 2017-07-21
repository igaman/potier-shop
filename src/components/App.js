import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import axios from 'axios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { books: [], isFetch: false, order: [], isLoading: true, result: 0, isbnArray: [], isbnCode:'', bestPrice: 0 ,numberArticles: 0};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		axios.get('http://henri-potier.xebia.fr/books')
		.then(response => {
			//console.log(response.data);
			this.setState({books: response.data});
		})
		.catch(e => console.log(e));
	}

	addToCart = (book) => {
		const inventory = this.state.order;
		const searchInventory = inventory.findIndex((elem) => elem.title === book.title);
		if(searchInventory > -1) {
			//if products in shopping cart, update
			let updateInventory = [...inventory];
			updateInventory[searchInventory].count += 1;
			this.setState({order: updateInventory});
			//console.table(updateInventory);
		} else {
			//else add it
			const newInventory = [...this.state.order, {title: book.title, price: book.price, isbn: book.isbn, count: 1}];
			this.setState({order: newInventory});
			//console.table(newInventory);
		}
		this.addIsbnCode(book);
	}


	addIsbnCode = (book) => {
		let isbnArray = [...this.state.isbnArray];
		isbnArray.push(book.isbn)
		//console.log('isbnArray num ', isbnArray);
		this.setState({isbnArray: isbnArray, isbnCode: isbnArray.toString()});
	}


	calcArticles = (num) => {
		this.setState({numberArticles: num});
	}


	render() {
		return(
			<div>
				<Header numberArticles={this.state.isbnArray.length}/>
				<Main
				books={this.state.books}
				addToCart={this.addToCart}
				order={this.state.order}
				isbncode={this.state.isbnCode}
				numberArticles={this.state.isbnArray.length}
				/>
			</div>
		);
	}
}

export default App;