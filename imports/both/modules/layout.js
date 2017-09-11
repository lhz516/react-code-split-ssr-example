import React from 'react'
import { Link } from 'react-router-dom'

export default ({children}) => (
  <div>
    <Link to="/">Home </Link>
    <Link to="/posts">Post </Link>
    <Link to="/404">404 </Link>
    {children}
  </div>
)
