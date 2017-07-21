import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<Route exact path='/' component={() => 
					<Home 
					books={this.props.books}
					addToCart={this.props.addToCart}
					/>}
				/>
				<Route exact path='/shoppingcart' component={() => <ShoppingCart 
					order={this.props.order}
					isbncode={this.props.isbncode}
					calcArticles={this.props.calcArticles}
					numberArticles={this.props.numberArticles}
				 />}/>
			</div>
		);
	}
}


export default Main;