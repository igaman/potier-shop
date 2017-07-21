import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import App from '../../src/components/App';
import Header from '../../src/components/Header';
import ResultOrder from '../../src/components/ResultOrder';

describe('A passing test', () => {
  it('should pass', () => {
    expect(true).to.be.true;
  });
})

describe('App', () => {
	it('renders App component', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper).to.have.length(1);
	});
})

describe('Header', () => {
	it('renders Header component', () => {
		const wrapper = shallow(<Header/>);
		expect(wrapper).to.have.length(1);
	});

	it('renders the custom numberArticles props text', () => {
		const wrapper = shallow(<Header/>);
		wrapper.setProps({ numberArticles: '5' });
		expect(wrapper.contains('5')).to.equal(true);
	});
})

describe('ResultOrder', () => {
	it('renders ResultOrder component', () => {
		const wrapper = shallow(<ResultOrder/>);
		expect(wrapper).to.have.length(1);
	});
})

/*it seems several components doesn't be tested because of es6 i guess*/

