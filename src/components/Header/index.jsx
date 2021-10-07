import {React} from 'react';
import './index.scss'
import wifi from '../../assets/images/wifi.svg'
import reception from '../../assets/images/reception.svg'
import battery from '../../assets/images/battery.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__status-bar">
        <img src={wifi} alt="wifi" />
        <img src={reception} alt="reception" />
        <img src={battery} alt="battery" />
        <span>12:30</span>
      </div>
    </header>
  );
}

export default Header;