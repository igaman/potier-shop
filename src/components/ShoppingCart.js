import React, {Component} from 'react';
import ResultOrder from './ResultOrder';

class ShoppingCart extends Component {
	constructor(props) {
		super(props);
	}

	shoppingList = () => {
		return this.props.order.map(elem => {
			return (
				<li key={elem.isbn}>
					<div className="grid article">
						<div className="grid__cell 2/4">{elem.title}</div>
						<div className="grid__cell 1/4"><span className="count">{elem.count}</span></div>
						<div className="grid__cell 1/4">{elem.price} Euros</div>
					</div>
				</li>
			);
		})
	}

	render() {
		return(
			<div className="container">
				<div className="box box--large">
					<div className="grid">
						<div className="grid__cell 2/4">
							<h2 className="your-cart">Votre Panier</h2>
						</div>
						<div className="grid__cell 1/4">
							Quantité
						</div>
						<div className="grid__cell 1/4">
							Prix
						</div>
					</div>
					<ul className="shopping-list">
						{this.shoppingList()}
					</ul>
					<div className="article-in-shop">
						Article(s) dans le panier: <span className="article-in-shop__number">{this.props.numberArticles}</span>
					</div>
					<ResultOrder order={this.props.order} isbncode={this.props.isbncode} />
				</div>
			</div>
		)
	}
}

export default ShoppingCart;