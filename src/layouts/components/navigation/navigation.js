import React, {useState} from 'react';
import {connect} from 'react-redux';
import './navigation.scss'
import {changeActive} from '../../../redux/reducers/nav'

const mapDispatchToProps = {changeActive};

const mapStateToProps = state => ({
  nav: state.nav.nav,
})


function Nav(props) {


  const handleClick = (item) => {
    console.log('item',item);
    props.changeActive(item);

  }

  return (
    <div id='nav'>
      <span>
        {props.nav.map(item => (
          <h3 className={item.status}
          onClick={() => handleClick(item)}>{item.value}</h3>
        ))}
      </span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);