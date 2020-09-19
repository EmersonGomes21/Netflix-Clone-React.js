import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/Netflix_Logo_RGB.png';
import ImgUser from '../../assets/netflix-user.jpg';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './Header.css';

export default ({black}) => {
  const [classOn, setClassOn] = useState(false);
  return (
    <header className={black ? 'black':''}>
      <div className="container-left">

      <div className="header--logo">
        <Link to="/">
          <img src={Logo} alt="logo Netflix" />

        </Link>
      </div>

         <div className="container-as">
        
        <Link to="/"  className={ classOn ? 'select' : ''} onClick={()=>setClassOn(!classOn)}>Início</Link>

        <Link to="/" className={ classOn ? 'select' : ''} onClick={()=>setClassOn(!classOn)}>Séries</Link>

        <Link to="/" className={ classOn ? 'select' : ''} onClick={()=>setClassOn(!classOn)}>Filmes</Link>

        <Link to="/" className={ classOn ? 'select' : ''} onClick={()=>setClassOn(!classOn)}>Mais recentes</Link>

        <Link to="/" className={ classOn ? 'select' : ''} onClick={()=>setClassOn(!classOn)}>Minha lista</Link>
        </div>

        <div>
          <Link className="navigation">Navegar<ArrowDropDownIcon className="arrowNavigation"/></Link>
          
        </div>
   
      </div>

      <div className="container-right">

        <SearchIcon className="icons"/>
        <CardGiftcardIcon className="icons"/>
        <NotificationsIcon className="icons"/>

      <div className="header--user">
        <Link to="/">
          <img src={ImgUser} alt="usuario" />
          <ArrowDropDownIcon className="arrow"/>
         

        </Link>
      </div>
    
      </div>
    </header>
  );
}