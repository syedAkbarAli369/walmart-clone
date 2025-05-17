

import GridOption from '@/components/GridOption'
import React from 'react'

const Home = () => {
  return (
    <main>
      <div className='grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 m-3 gap-3'>
        <GridOption 
          title="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-33"
        />
        <GridOption 
          title="Shop Wardrobe"
          image="https://links.papareact.com/8ko"
          className="bg-blue-200 col-span-2 row-span-2"
        />
        <GridOption 
          title="Shop Home"
          image="https://links.papareact.com/szu"
          className="bg-yellow-200 row-span-2"
        />
        <GridOption 
          title="Shop Electronics"
          image="https://links.papareact.com/n7r"
          className="bg-orange-200 h-63"
        />
        <GridOption 
          title="Shop Toys"
          image="https://links.papareact.com/pj2"
          className="bg-purple-200 h-63 col-span-2"
        />
        <GridOption 
          title="All you need for Match Day"
          image="/sports.avif"
          className="bg-amber-200 col-span-2 row-span-2"
        />
        <GridOption 
          title="Shop Gadgets"
          image="https://links.papareact.com/gs1"
          className="bg-indigo-200 h-63"
        />
        <GridOption 
          title="Shop Beauty"
          image="https://links.papareact.com/4y0"
          className="bg-lime-200 h-63"
        />
        <GridOption 
          title="Shop Sports"
          image="https://links.papareact.com/sq2"
          className="bg-emerald-200 h-63"
        />
        <GridOption 
          title="Enjoy Free Shipping"
          image="https://links.papareact.com/9fh"
          className="bg-fuchsia-200 h-63"
        />
        <GridOption 
          title="Flash Deals"
          image="https://links.papareact.com/qx7"
          className="bg-sky-200 h-63 col-span-2"
        />
      </div>
    </main>
  )
}

export default Home