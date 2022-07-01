import React from 'react'

import classes from '../../styles/logistics-item.module'

const LogisticsItem = (props) => {
  // get the icon
  const { icon: Icon } = props

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  )
}

export default LogisticsItem
