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
    displacementPosition = -(middlePosition - position) * 4;
    
  return (
    <div style={{transform:`translateY(${displacementPosition}rem)`}} className={`text-primary10 mx-10  flex flex-col items-center`}>
        <Icon className="text-[3rem]" icon={product.icon} />
        <p className="text-[14px] opacity-65 pt-2 capitalize">{product.name}</p>
    </div>
  )
}

export default CategoryIcon