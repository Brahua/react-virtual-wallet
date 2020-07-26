import React from 'react'
import dineroSrc from './../../../../assets/img/dinero.svg';
import calendarioSrc from './../../../../assets/img/calendario.svg';
import './Feeds.scss';
import FeedItem from './FeedItem';

export default function Feed({available, date}) {
  return (
    <div className="feed d-flex justify-content-between">
      <FeedItem description="Saldo disponible" value={`S/. ${available}`} imgSrc={dineroSrc}/>
      <FeedItem description="Fecha" value={`${date.toLocaleString()}`} imgSrc={calendarioSrc}/>
    </div>
  )
}
