import React from 'react'
import Link from 'next/link'

const EventItem = (props) => {
  //get the title, image, date, location and id after destructuring
  const { title, image, date, location, id } = props

  // convert date to human readable

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  // add new line for each address
  const formattedAddress = location.replace(', ', '\n')

  const exploreLink = `/events/${id}`

  return (
    <li>
      <img src={'/' + image} alt={title} />

      <div>
        <div>
          <h2>{title}</h2>

          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
