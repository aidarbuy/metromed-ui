import './styles.scss';

// If we have an anchor, render the Button component on it
if (document.querySelectorAll('a').length) {
  require.ensure([], () => {
    const Button = require('./Components/Button').default;
    const button = new Button('google.com');

    button.render('a');
  });
}

// If we have a title, render the Header component on it
if (document.querySelectorAll('H1').length) {
	require.ensure([], () => {
		const Header = require('./Components/Header');
		const header = new Header('google.com');

		header.render('h1');
	});
}