var page = {
  title: "Money Minting App",
  subTitle: "This app is used to mint money"
};

var template = (
  <div>
    <h1>{page.title}</h1>
    <p>{page.subTitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

var user = {
  name: "John",
  age: 25,
  location: "Nigeria"
};

var template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age} </p>
    <p>Location: {user.location} </p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
