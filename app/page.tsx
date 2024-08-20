"use client";
import {products} from "@/constants/icons";
import CategoryIcon from '@/components/categoryIcon';
import { useEffect, useState } from "react";



const Landing = () => {
 const [currGradientPosition, setCurrGradientPosition] = useState({
  x: `50%`,
  y: `50%`,
 });
 const [gradientRadius, setGradientRadius] = useState(400);
 const [newStyle, setNewStyle] = useState({
  transition: 'background 0.5s',
  background: `radial-gradient(circle at center, #52462e64;, transparent ${gradientRadius}px)`
 });



  useEffect(() => {
    setNewStyle({
      transition: 'background 01s',
      background: `radial-gradient(circle at ${currGradientPosition.x} ${currGradientPosition.y}, #52462e70, transparent ${gradientRadius}px)`
    })
  }, [currGradientPosition.x, currGradientPosition.y, gradientRadius])
  


  return (
    <div id="mainEntry" style={newStyle}  className="min-h-screen h-full  flex flex-col w-full items-center fixed">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 id="fashionHeader" className="bg-clip-text text-transparent bg-gradient-radial from-primary9 to-primary2  text-[2rem] tablet:text-[3rem] uppercase font-bold">nusoura fashions</h1>
        <div style={{gridTemplateColumns:`repeat(${products.length}, 1fr)`}} className={`flex flex-wrap justify-center tablet:grid grid-cols-${products.length} pt-12 px-4  tablet:pt-[14rem] gap-4 laptop:gap-[2.8rem] desktop:gap-[4rem]`}>
            {
                products.map((product:any, index) => (
                  <CategoryIcon key={index} product={product} position={index+1} totalProducts={products.length} currGradientPosition={currGradientPosition} gradientRadius={gradientRadius} setGradientRadius={setGradientRadius} setCurrGradientPosition={setCurrGradientPosition}/>
                ))
            }
        </div>
      </div>
      <p className="text-primary7 text-[12px] flex justify-between flex-col tablet:flex-row px-4 tablet:px-8 w-full py-4 ">
        <span>© 2024 Jeslor.com, All rights reserved</span>
        <span>privacy | Security</span>
      </p>
    </div>
  )
}

export default Landing