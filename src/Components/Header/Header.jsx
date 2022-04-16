import React from 'react';
import s from './Header.module.css';
import logo from '../../images/Earth.jpg';
import notification from '../../images/bell.jpg'
import ContentContainer from '../../sampleComponents/ContentContainer/ContentContainer';

const Header = (props) => {
   return (
      <div className={s.header}>

         <ContentContainer>
            <div className={s.headerContainer}>

               <div className={s.logo}>
                  <img src={logo} alt="logo" />
               </div>

               <input type="text" />

               <div className={s.notification}>
                  <img src={notification} alt="notification" />
               </div>

            </div>
         </ContentContainer>

      </div>
   )
}
export default Header;