"use client";
import { Icon } from '@iconify/react';

const CategoryIcon = ({product}:{
    product:{
        name:string,
        icon:string
    }
}) => {
  return (
    <div className="text-primary10 text-[2rem] h-[50px] w-[50px] flex flex-col">
        <Icon icon={product.icon} />
        <p></p>
    </div>
  )
}

export default CategoryIcon