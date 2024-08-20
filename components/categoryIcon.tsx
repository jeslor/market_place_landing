"use client";
import {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';

const CategoryIcon = ({product, position, totalProducts, setGradientRadius, setCurrGradientPosition, currGradientPosition,gradientRadius }:{
    product:{
        name:string,
        icon:string,
        id:string
    },
    position:number
    totalProducts:number,
    gradientRadius:number,
    setGradientRadius:Function,
    setCurrGradientPosition:Function,
    currGradientPosition:{
        x:string,
        y:string
    }
}) => {
const [displacementPosition, setDisplacementPosition] = useState(0);
const [resetPosition, setResetPosition] = useState(true);


    useEffect(() => {
        const middlePosition = Math.ceil(totalProducts/2);
        if (position > middlePosition) {
            position = totalProducts - position + 1;
        }
        if(window.innerWidth < 768){
            setDisplacementPosition(0);
        }else{
            setDisplacementPosition(-(middlePosition - position) * 5);
        }
    });

    useEffect(() => {
        let currElement = document.getElementById(`categoryIcon${product.id}`);
        const handleMouseMove = (e:any) => {
            const {clientX, clientY} = e;
            if (currElement) {
                const {top,left,right, bottom, width, height} = currElement?.getBoundingClientRect();
                if(clientX >= left && clientX <= right && clientY >= top && clientY <= bottom){
                    setResetPosition(false);
                    setCurrGradientPosition({x:`${left + width/2}px`, y:`${top +  height/2}px`});
                    setGradientRadius(width > height ? width+width/2 : height+height/2);
                }else{
                    setResetPosition(true);
                    setCurrGradientPosition({x:`${clientX}px`, y:`${clientY}px`});
                    setGradientRadius(400);
                }
            }
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          currElement?.removeEventListener('mouseenter', () => {});
         currElement?.removeEventListener('mouseleave', () => {});
        }
        
       }, [resetPosition]);



    
  return (
    <div id={`categoryIcon${product.id}`} style={{transform:`translateY(${displacementPosition}rem)`, transitionDelay:`${position/3}s`, transitionProperty:"transform", transitionTimingFunction:"ease-out", transitionDuration:"200ms"}} className={`tomatoes text-primary10 flex flex-col font-semibold items-center justify-center h-[80px] laptop:h-[90px] desktop:h-[100px] w-[80px] laptop:w-[90px] desktop:w-[100px] hover:bg-gradient-to-t from-primary1 to-primary2 rounded-[50%] shadow-2xl cursor-pointer border-[1px] border-primary4 transition-all hover:scale-110`}>
        <Icon className=" text-[1.5rem] laptop:text-[2.5rem] h-[30%]" icon={product.icon} />
        <p className="text-[12px] opacity-65 pt-2 capitalize">{product.name}</p>
    </div>
  )
}

export default CategoryIcon