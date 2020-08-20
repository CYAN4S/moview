import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, rating }) {
  return (
    <div>
      <h1>I love {name}!</h1>
      <h2>RATING : {rating}</h2>
    </div>

  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
} 

const foodILike = [
  {
    id: 1,
    name: `Kimchi`,
    rating: 4
  },
  {
    id: 2,
    name: `Kimbap`,
    rating: 5
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} key={dish.id} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
