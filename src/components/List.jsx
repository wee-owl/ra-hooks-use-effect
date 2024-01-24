import React from 'react';


function List({state, onChange}) {
  const clickList = (e) => {
    e.preventDefault();
    if (!e.target.closest('li.list__item')) return;
    [...e.target.closest('ul').children].map(item => item.className = 'list__item');
    onChange(e.target.closest('li').id);
    e.target.closest('li').classList.add('list__item-active');
  }

  return (
    <ul className='list' onClick={clickList}>
      {state.map((item, i) => <li className='list__item' 
        id={item.id} 
        key={i}>{item.name}</li>)}
    </ul>
  );
};

export default List;
