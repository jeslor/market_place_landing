"use client";
import {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';

const CategoryIcon = ({product, position, totalProducts}:{
    product:{
        name:string,
        icon:string
    },
    position:number
    totalProducts:number
}) => {
const [displacementPosition, setDisplacementPosition] = useState(0);


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
 
    })
    
  return (
    <div style={{transform:`translateY(${displacementPosition}rem)`}} className={`text-primary10 flex flex-col font-semibold items-center justify-center h-[80px] laptop:h-[90px] desktop:h-[100px] w-[80px] laptop:w-[90px] desktop:w-[100px] hover:bg-gradient-to-t from-primary1 to-primary2 rounded-[50%] shadow-2xl cursor-pointer t`}>
        <Icon className=" text-[1.5rem] laptop:text-[2.5rem] h-[30%]" icon={product.icon} />
        <p className="text-[12px] opacity-65 pt-2 capitalize">{product.name}</p>
    </div>
  )
}

export default CategoryIcon