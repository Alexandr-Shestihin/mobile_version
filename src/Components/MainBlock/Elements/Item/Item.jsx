import { React, useState, useEffect } from 'react';
import s from './Item.module.css';

const Item = (props) => {
   const [triangle, setTriangle] = useState(`${s.triangle}`)
   useEffect(() => {
      switch (props.name) {
         case 'News': setTriangle(triangle + ` ${s.triangle_orange}`)
            break;
         case 'Events': setTriangle(triangle + ` ${s.triangle_blue}`)
            break;
         case 'Tournaments': setTriangle(triangle + ` ${s.triangle_red}`)
            break;
         case 'Matchs': setTriangle(triangle + ` ${s.triangle_green}`)
            break;
         default:
            break;
      }
   })

   return (
      <div className={props.id === 1 ?
         `${s.item} ${s.item_one}` : s.item}
      >
         <div className={triangle}></div>
         <div className={s.flag}>
            <img src={props.image} alt="" />
         </div>

         <p className={s.text}>{props.text}</p>
      </div>
   )
}
export default Item;