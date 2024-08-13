import React from 'react'
import {products} from "@/constants/icons";
import CategoryIcon from '@/components/categoryIcon';



const Landing = () => {
  return (
    <div className="min-h-screen h-full bg-primary2 flex flex-col w-full items-center fixed w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="bg-clip-text text-transparent bg-gradient-radial from-primary9 to-primary1  text-[3rem] uppercase font-bold">nusoura fashions</h1>
        <div style={{gridTemplateColumns:`repeat(${products.length}, 1fr)`}} className={`grid grid-cols-${products.length}  pt-[14rem] gap-[4rem]`}>
            {
                products.map((product, index) => (
                  <CategoryIcon product={product} position={index+1} totalProducts={products.length}/>
                ))
            }
        </div>
      </div>
      <p className="text-primary7 text-[12px] flex justify-between px-8 w-full py-4 ">
        <span>© 2024 Jeslor.com, All rights reserved</span>
        <span>privacy | Security</span>
      </p>
    </div>
  )
}

export default Landing