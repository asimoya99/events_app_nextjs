import Link from 'next/link'
import classes from '../../styles/button.module.css'

import React from 'react'

const Button = (props) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  )
}

export default Button
