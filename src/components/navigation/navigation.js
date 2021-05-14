import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './navigation.scss'


function Nav(props) {
  const [categories, setCategories] = useState([
    {value: 'Home', route: '/'},
    {value:'Characters', route: '/chars'},
    {value:'Worlds', route:'/worlds'},
    {value: 'Universes', route:'/universes'},
    {value:'Scenes', route:'/scenes'},
    {value: 'Notes', route: '/notes'}
])


  return (
    <div id='nav'>
      <nav class="stroke">
          <ul>
            {categories.map(category => (
              <Link to={category.route}>
                <li><p>{category.value}</p></li>
              </Link>
            ))

            }
          </ul>
        </nav>
    </div>
  );
}

export default Nav;