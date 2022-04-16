import React from 'react';
import ContentContainer from '../../sampleComponents/ContentContainer/ContentContainer';
import Elements from './Elements/Elements';
import s from './MainBlock.module.css';

const MainBlock = (props) => {
   return (
      <div className={s.MainBlock} >
         <ContentContainer>
            {props.mainBlockElements.map(u =>
               <Elements
                  key={1}
                  itemName={u.itemName}
                  item={u.item}
               />
            )}
         </ContentContainer>

      </div>
   )
}
export default MainBlock;