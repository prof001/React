//Object Destructruing
const person = {
  name: 'John',
  age: 26,
  location: {
    city: 'Philadephia',
    temp: 92
  }
};

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  published: {
    name: 'Penguin'
  }
};

const { name } = person;
//console.log(name)

const { name: publisherName = 'Self-Published' } = book.published;
//console.log(publisherName);
