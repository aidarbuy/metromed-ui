import $ from 'jquery';
import Mustache from 'mustache';
import header from './Header.html';
import './Header.scss';

export default class Header {
	constructor(link) {
		this.link = link;
	}

	render(node) {
		const text = $(node).text();

		$(node).html(
			Mustache.render(header, {text})
		);
	}
};