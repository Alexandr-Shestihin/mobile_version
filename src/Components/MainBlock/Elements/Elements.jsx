import React from 'react';
import Item from './Item/Item';
import s from './Elements.module.css';

const Elements = (props) => {
   return (
      <div className={s.elements} >
         <h1>{props.itemName}</h1>
         {props.item.map(u =>
            <Item
               className={s.item}
               key={u.id}
               id={u.id}
               color={u.color}
               name={props.itemName}
               image={u.flag}
               text={u.text}
            />
         )}
      </div>
   )
}
export default Elements;