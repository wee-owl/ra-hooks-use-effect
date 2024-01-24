import React from 'react';


function Details({item}) {
  return (
    <div className='details' id={item.id}>
      <img className='details__item details__item-image' src={item.avatar} alt='Avatar'></img>
      <p className='details__item details__item-name'>{item.name}</p>
      <p className='details__item details__item-city'>{item.details.city}</p>
      <p className='details__item details__item-company'>{item.details.company}</p>
      <p className='details__item details__item-position'>{item.details.position}</p>
    </div>
  );
};

export default Details;
