import React from 'react';

//Icone do menu para dispositivos moveis
import MenuMobileIcon from '../../assets/menu-icon.png';

const MenuMobile = () => {
  return (
    <div className='MenuMobile'>
        <button><img src={MenuMobileIcon} alt="" /></button>
    </div>
  )
}

export default MenuMobile;