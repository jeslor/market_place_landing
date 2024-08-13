"use client";
import { useEffect, useState } from "react";
import {products} from "@/constants/icons";
import CategoryIcon from '@/components/categoryIcon';






const Landing = () => {
  const [positionState, setPositionState] = useState({
    x: 0,
    y: 0
  });
  const [newStyles, setNewStyles] = useState({
  });

  useEffect(() => {
    const  fashionHeader = document.getElementById('fashionHeader');
    if(!fashionHeader) return;
    const fashionHeaderRect = fashionHeader.getBoundingClientRect();
    console.log(fashionHeaderRect);
    
    const fashionHeaderX = fashionHeaderRect.x;
    const fashionHeaderY = fashionHeaderRect.y;
    setPositionState({
      x: fashionHeaderX,
      y: fashionHeaderY
    });
  },[positionState.x, positionState.y]);

  useEffect(() => {
    setNewStyles({
      background: `radial-gradient(circle at ${positionState.x}px ${positionState.y}px, #726240, #2a2416)`
    });
  },[positionState]);
  


  return (
    <div style={newStyles} className="min-h-screen h-full  flex flex-col w-full items-center fixed ">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 id="fashionHeader" className="bg-clip-text text-transparent bg-gradient-radial from-primary9 to-primary1  text-[3rem] uppercase font-bold">nusoura fashions</h1>
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