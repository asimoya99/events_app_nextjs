import React from 'react'

import EventList from '../components/events/event-list'

const HomPage = () => {
  const feautedEvents = getFeaturedEvents()

  return (
    <div>
      <h1>The Home Page</h1>
      <EventList items={feautedEvents} />
    </div>
  )
}

export default HomPage
