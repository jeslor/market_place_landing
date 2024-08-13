import React from 'react'
import {products} from "@/constants/icons";
import CategoryIcon from '@/components/categoryIcon';



const Landing = () => {
  return (
    <div className="min-h-screen h-full bg-primary2 grid items-center fixed w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="bg-clip-text text-transparent bg-gradient-radial from-primary9 to-primary1  text-[3rem] uppercase font-bold">nusoura fashions</h1>
        <div style={{gridTemplateColumns:`repeat(${products.length}, 1fr)`}} className={`grid grid-cols-${products.length}  pt-[10rem]`}>
            {
                products.map((product, index) => (
                  <CategoryIcon product={product} position={index+1} totalProducts={products.length}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Landing