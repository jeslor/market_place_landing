import React from 'react'
import {products} from "@/constants/icons";
import CategoryIcon from '@/components/categoryIcon';



const Landing = () => {
  return (
    <div className="min-h-screen h-full bg-primary2 grid items-center fixed w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="bg-clip-text text-transparent bg-gradient-radial from-primary9 to-primary1  text-[3rem] uppercase font-bold">nusoura shopping</h1>
        <div className='flex flex-wrap'>
            {
                products.map((product, index) => (
                  <CategoryIcon product={product} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Landing