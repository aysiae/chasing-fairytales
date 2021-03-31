import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import './navigation.scss'


function Nav(props) {
  const history = useHistory();
  const [categories, setCategories] = useState([
    {value: 'Home', route: '/' , status: true},
    {value:'Characters', route: '/chars', status: false},
    {value:'Places', route:'/places' ,status: false},
    {value:'Scenes', route:'/scenes', status: false}])


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
    history.push(item.route);
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