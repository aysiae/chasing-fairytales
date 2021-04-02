import React, {useEffect, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import './navigation.scss'


function Nav(props) {
  const history = useHistory();
  const [categories, setCategories] = useState([
    {value: 'Home', route: '/'},
    {value:'Characters', route: '/chars'},
    {value:'Worlds', route:'/worlds'},
    {value: 'Universes', route:'/universes'},
    {value:'Scenes', route:'/scenes'},
    {value: 'Notes', route: '/notes'}
])


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
      <nav class="stroke">
          <ul>
            {categories.map(category => (
              <li><a href={category.route}>{category.value}</a></li>
            ))

            }
          </ul>
        </nav>
    </div>
  );
}

export default Nav;