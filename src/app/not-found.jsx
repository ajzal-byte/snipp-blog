import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <Link href={"/"}>Return Home</Link>
    </div>
  )
}

export default NotFound