import React, {Component} from 'react';
import {Link, NavLink, IndexLink} from 'react-router-dom';

const Header = (props) => {
	return(
		<nav className="navbar">
			<div className="navbar__container">
				<span className="navbar__shop">
					Articles: <strong className="count-article">{props.numberArticles}</strong>
				</span>
				<ul className="menu">
					<li><NavLink exact activeClassName="active" to='/'>Accueil</NavLink></li>
					<li><NavLink activeClassName="active" to={'/shoppingcart'}>Panier</NavLink></li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;