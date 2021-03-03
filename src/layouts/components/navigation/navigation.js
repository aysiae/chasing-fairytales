import React, {useEffect, useState} from 'react';
import './navigation.scss'


function Nav(props) {
  const [categories, setCategories] = useState([
    {value: 'Home', status: true},
    {value:'Characters', status: false},
    {value:'Places', status: false},
    {value:'Scenes', status: false}])


  const handleClick = (e, item) => {
    let update = categories.map(category => {
      if(item.value == category.value) {
        category.status = true;
      } else {
        category.status = false;
      }
      return category;
    })
    setCategories(update);
  }


  return (
    <div id='nav'>
      <span>
        {categories.map(item => (
          <h3 className={item.status ? 'active': null}
          onClick={(e) => handleClick(e, item)}>{item.value}</h3>
        ))}
      </span>
    </div>
  );
}

export default Nav;