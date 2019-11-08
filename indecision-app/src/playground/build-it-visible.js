let pageText = 'This are the details';
let buttonText = 'Hide Details';

const buttonClicked = () => {
	//console.log('button clicked!');
	if (buttonText === 'Hide Details') {
		pageText = '';
		buttonText = 'Show Details';
	} else {
		pageText = 'This are the details';
		buttonText = 'Hide Details';
	}

	render();
};

const appRoot = document.getElementById('app');

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={buttonClicked}>{buttonText}</button>
			<p>{pageText}</p>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();
