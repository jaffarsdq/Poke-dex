import React, { useEffect, useState } from 'react'

//css import
import './pokeDetails.css'

function PokeDetail({name, height, weight, image, types}) {

  return (
    <div className='detail-wrapper'>
      <div className="detail-main">
        <img className='detail-img' src={image} alt="pokemon" />
        <h3 className='detail-name'>{name}</h3>
        <h3 className='detail-height'>height : {height}</h3>
        <h3 className='detail-weight'>weight : {weight}</h3>
      </div>
      <div className="detail-type-wrapper">
        {types && types.map((t, i) => <h6 key={i} className='detail-type'>{t}</h6>)}
      </div>
    </div>
  )
}

export default PokeDetail