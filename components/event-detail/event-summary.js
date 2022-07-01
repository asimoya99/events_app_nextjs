import React from 'react'
import classes from '../../styles/event-summary.module.css'

const EventSummary = (props) => {
  const { title } = props

  return (
    <section>
      <h1>{title}</h1>
    </section>
  )
}

export default EventSummary
