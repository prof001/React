"use strict";

var page = {
  title: "Money Minting App",
  subTitle: "This app is used to mint money"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    page.title
  ),
  React.createElement(
    "p",
    null,
    page.subTitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    )
  )
);

var user = {
  name: "John",
  age: 25,
  location: "Nigeria"
};

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age,
    " "
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location,
    " "
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
