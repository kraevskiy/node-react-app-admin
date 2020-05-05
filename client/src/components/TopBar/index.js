import React from 'react'
import {NavLink} from "react-router-dom"
import {Navbar} from "react-materialize/"
import cls from "./TopBar.module.css"

const TopBar = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={<NavLink to={'/'} exact>LOGO</NavLink>}
      centerChildren
      id="mobile-nav"
      menuIcon={<i className="material-icons">menu</i>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavLink to={'/login'} activeClassName={cls.active} exact>Вход</NavLink>
      <NavLink to={'/register'} activeClassName={cls.active} exact>Регистрация</NavLink>
    </Navbar>
  )
}

export default TopBar