import React from 'react'

export default function FeedItem({description, value, imgSrc}) {
  return (
    <div className="feed__item d-flex justify-content-between p-2">
      <img src={imgSrc} alt={description} width="50px"/>
      <div className="mx-2">
        <small>{description}: </small>
        <h3>{value}</h3>
      </div>
    </div>
  )
}
