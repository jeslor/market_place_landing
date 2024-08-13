"use client";
import { Icon } from '@iconify/react';

const CategoryIcon = ({product, position, totalProducts}:{
    product:{
        name:string,
        icon:string
    },
    position:number
    totalProducts:number
}) => {
    const middlePosition = Math.ceil(totalProducts/2);
    let  displacementPosition:number;
    if (position > middlePosition) {
        position = totalProducts - position + 1;
    }
    displacementPosition = -(middlePosition - position) * 5;
    
  return (
    <div style={{transform:`translateY(${displacementPosition}rem)`}} className={`text-primary10 flex flex-col items-center justify-center h-[100px] w-[100px] hover:bg-gradient-to-t from-primary1 to-primary2 rounded-[50%] shadow-2xl cursor-pointer`}>
        <Icon className="text-[2.5rem] h-[30%]" icon={product.icon} />
        <p className="text-[12px] opacity-65 pt-2 capitalize">{product.name}</p>
    </div>
  )
}

export default CategoryIcon