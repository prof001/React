import React from 'react';

const ItemTwo = () => (
  <div>
    <p>This is Item Two. With Id {props.match.params.id} </p>
  </div>
);

export default ItemTwo;
