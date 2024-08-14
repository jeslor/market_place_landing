"use client";
import {products} from "@/constants/icons";
import CategoryIcon from '@/components/categoryIcon';
import { useEffect, useState } from "react";


let initialY = window.innerWidth/2;
let initialX = window.innerHeight/2;
let gradientRadius = 400;
const Landing = () => {
 const [currGradientPosition, setCurrGradientPosition] = useState({
  x: initialX,
  y: initialY,
 });
 const [newStyle, setNewStyle] = useState({
  background: `radial-gradient(circle at center, #726240, transparent ${gradientRadius}px)`
 });

 console.log(currGradientPosition.x, currGradientPosition.y);
 

 useEffect(() => {

 }, [currGradientPosition.x, currGradientPosition.y])
  


  return (
    <div style={newStyle}  className="min-h-screen h-full  flex flex-col w-full items-center fixed">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 id="fashionHeader" className="bg-clip-text text-transparent bg-gradient-radial from-primary9 to-primary3  text-[3rem] uppercase font-bold">nusoura fashions</h1>
        <div style={{gridTemplateColumns:`repeat(${products.length}, 1fr)`}} className={`flex flex-wrap tablet:grid grid-cols-${products.length}  pt-[14rem] gap-4 laptop:gap-[2.8rem] desktop:gap-[4rem]`}>
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