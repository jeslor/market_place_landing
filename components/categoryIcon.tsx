"use client";
import { Icon } from '@iconify/react';

const CategoryIcon = ({product}:{
    product:{
        name:string,
        icon:string
    }
}) => {
  return (
    <div className="text-primary10 mx-8  flex flex-col items-center">
        <Icon className="text-[3rem]" icon={product.icon} />
        <p className="text-[14px] opacity-65 pt-2">{product.name}</p>
    </div>
  )
}

export default CategoryIcon