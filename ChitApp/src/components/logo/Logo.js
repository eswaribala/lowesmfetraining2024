import React from 'react';
import LogoPath from '../../resources/images/logo.jpeg'
import './Logo.css'
//stateless component
export const Logo = () => (
 <figure>
     <img src={LogoPath} className="logo" />
 </figure>
);



//export default logo;
