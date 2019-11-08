const page = {
	title: 'The indecision app',
	subTitle: 'This app helps you make tough decisions fast',
	options: []
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		page.options.push(option);
		e.target.elements.option.value = '';
		renderFormApp();
	}
};

const removeAll = () => {
	page.options = [];
	renderFormApp();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * page.options.length);
	const option = page.options[randomNum];
	alert(option);
};

const appRoot = document.getElementById('app');

const renderFormApp = () => {
	const template = (
		<div>
			<h1>{page.title}</h1>
			{page.subTitle && <p>{page.subTitle}</p>}
			<p>{page.options.length > 0 ? 'Here are your options' : 'No Options'}</p>

			<button disabled={page.options.length === 0} onClick={onMakeDecision}>
				What should i do?
			</button>
			<button onClick={removeAll}>Remove all</button>

			<ol>
				{page.options.map((option) => {
					return <li key={option}>{option}</li>;
				})}
			</ol>

			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

renderFormApp();
