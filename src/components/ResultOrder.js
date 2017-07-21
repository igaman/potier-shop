import React, { Component } from 'react';
import axios from 'axios';

class ResultOrder extends Component {

	constructor(props) {
		super(props);
		this.state = { bestPrice: 0, result: 0};
	}

	componentDidMount() {
		if (this.props.isbncode !== "") {
			this.addition(this.props.order, this.props.isbncode);
		}
	}

	addition = (book, isbncode) => {
		//console.table(book);
		const add = book.map(elem => {
			return (elem.price * elem.count)
		});
		const result = add.reduce((a, b) => { return a + b }, 0);
		this.discountOffers(isbncode, result);
	}

	discountOffers = (isbnCode, result) => {
		const urlOffers = `http://henri-potier.xebia.fr/books/${isbnCode}/commercialOffers`;
		axios.get(urlOffers)
			.then(response => {
				//console.table(response.data.offers);
				this.bestResult(response.data.offers, result);
			})
			.catch(e => console.log(e));
	}

	bestResult = (offers, result) => {
		const calcReduc = [];
		const percentage = offers[0]['value'];
		const percentagePrice = result - (result * (percentage / 100));
		calcReduc.push(percentagePrice);

		if (offers.length > 1) {
			const minus = offers[1]['value'];
			const minusPrice = result - minus;
			calcReduc.push(minusPrice);
			const slice = offers[2]['value'];
			const sliceValue = offers[2]['sliceValue'];
			if (result >= sliceValue) {
				const slicePrice = result - (Math.floor(result / sliceValue)) * slice;
				calcReduc.push(slicePrice);
			}
			//console.log(percentage, minus, slice, sliceValue);
		}
		//console.log(calcReduc);
		//console.table(offers);
		const bestReducPrice = Math.min(...calcReduc);
		//console.log('Best Discount Price : ' + bestReducPrice);
		this.setState({ bestPrice: bestReducPrice, result: result });
	}

	render() {
		return (
			<div>
				{
					this.state.result === 0 && this.props.isbncode === "" ?
					<span>Vous n'avez pas encore d'articles</span> :
					<div className="finalprice">
						<span className="finalprice__title">Montant total: </span><span className="line"> {this.state.result} Euros</span> {this.state.bestPrice} Euros
					</div>
				}
			</div>
		);
	}
}

export default ResultOrder;