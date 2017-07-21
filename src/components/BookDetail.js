import React, {Component} from 'react';

class BookDetail extends Component {
	render() {
		const {title, cover, price, synopsis} = this.props.book;
		return(
			<div className="1/2--mobile 1/3--tablet 1/4--desktop grid__cell">
				<div className="bookdetail box">
					<img className="bookdetail__img" src={cover} alt={title}/>
					<h2 className="bookdetail__title">{title}</h2>
					<p className="bookdetail__text block-with-text">
						{synopsis}
					</p>
					<span className="bookdetail__price"><span className="light">Prix:</span> {price} €</span> 
					<button className="bookdetail__buy" onClick={() => this.props.addToCart(this.props.book)}>Acheter</button>
				</div>
			</div>
		)
	}
}

export default BookDetail;
