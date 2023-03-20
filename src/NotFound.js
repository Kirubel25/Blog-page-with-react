import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div>
        <h1>Sorry</h1>
        <p>The Page you are looking for is not found</p>
        <Link to="/">Back To Home PAge</Link>
    </div>
  )
}

export default NotFound