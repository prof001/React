import React from 'react';

const ItemOne = props => (
  <div>
    <p> You click an item with Id {props.match.params.id} </p>
  </div>
);

export default ItemOne;
