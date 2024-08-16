"use client";
import {useEffect, useState} from 'react';
import { Icon } from '@iconify/react';

const CategoryIcon = ({product, position, totalProducts, setGradientRadius, setCurrGradientPosition, currGradientPosition}:{
    product:{
        name:string,
        icon:string,
        id:string
    },
    position:number
    totalProducts:number,
    setGradientRadius:Function,
    setCurrGradientPosition:Function,
    currGradientPosition:{
        x:string,
        y:string
    }
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
    });

    useEffect(() => {
        const handleMouseMove = (e:any) => {
            let currElement = document.getElementById(`categoryIcon${product.id}`);
            // if (currElement) {
            //     let rect = currElement.getBoundingClientRect();
            //    const ClientY = e.clientY;
            //     const ClientX = e.clientX;
            //     if(ClientY < rect.top || ClientY > rect.bottom || ClientX < rect.left || ClientX > rect.right){
            //        setGradientRadius(400);
            //     }else{
            //         setGradientRadius(150)
                    
            //     }
                
            // }
            currElement?.addEventListener('mouseover', () => {
                setGradientRadius(120);
            })
            currElement?.addEventListener('mouseleave', () => {
                setGradientRadius(400);
            })
          setCurrGradientPosition({
            x: `${e.clientX}px`,
            y: `${e.clientY}px`
          })
        }
      
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        }
        
       }, [currGradientPosition.x, currGradientPosition.y])
    
  return (
    <div id={`categoryIcon${product.id}`} style={{transform:`translateY(${displacementPosition}rem)`, transitionDelay:`${position/3}s`, transitionProperty:"transform", transitionTimingFunction:"ease-out", transitionDuration:"200ms"}} className={`text-primary10 flex flex-col font-semibold items-center justify-center h-[80px] laptop:h-[90px] desktop:h-[100px] w-[80px] laptop:w-[90px] desktop:w-[100px] hover:bg-gradient-to-t from-primary1 to-primary2 rounded-[50%] shadow-2xl cursor-pointer border-[1px] border-primary4 transition-all hover:scale-110`}>
        <Icon className=" text-[1.5rem] laptop:text-[2.5rem] h-[30%]" icon={product.icon} />
        <p className="text-[12px] opacity-65 pt-2 capitalize">{product.name}</p>
    </div>
  )
}

export default CategoryIcon