import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular'
import { Offers } from '../components/Offers/Offers'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <br /><br /><br /><br />
        <Popular/>
        <br /><br /><br /><br /><br />
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}
