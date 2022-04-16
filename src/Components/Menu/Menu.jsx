import React from 'react';
import ContentContainer from '../../sampleComponents/ContentContainer/ContentContainer';
import s from './Menu.module.css';

const Menu = (props) => {
   return (
      <div className={s.menu}>
         <ContentContainer>
            <div className={s.menuContainer}>
               <div className={`${s.home} ${s.imageMenu}`}></div>
               <div className={`${s.ranking} ${s.imageMenu}`}></div>
               <div className={`${s.calendar} ${s.imageMenu}`}></div>
               <div className={`${s.watch} ${s.imageMenu}`}></div>
               <div className={`${s.more} ${s.imageMenu}`}></div>
            </div>
         </ContentContainer>
      </div>
   )
}
export default Menu;