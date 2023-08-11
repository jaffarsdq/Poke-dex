import React, { useEffect, useState } from 'react'

//css import
import './pokeDetails.css'

function PokeDetail({name, height, weight, image, types}) {

  return (
    <div className='detail-wrapper'>
      <div className="detail-main">
        <img className='detail-img' src={image} alt="pokemon" />
        <h3 className='detail-name'>{name}</h3>
        <div className='detail-height'>Height : {height}</div>
        <div className='detail-weight'>Weight : {weight}</div>
      </div>
      <div className="detail-type-wrapper">
        <h6 className='detail-type-heading'>Type of poke</h6>
        {types && types.map((t, i) => <h6 key={i} className='detail-type'>{t}</h6>)}
      </div>
    </div>
  )
}

export default PokeDetail