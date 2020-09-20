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
  const [classOn2, setClassOn2] = useState(false);
  const [classOn3, setClassOn3] = useState(false);
  const [classOn4, setClassOn4] = useState(false);
  const [classOn5, setClassOn5] = useState(false);

  const [showNavigation, setShowNavigation] = useState(false);
  const [showInput, setShowInput] = useState(false);

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

        <Link to="/" className={ classOn ? 'select' : ''} onClick={()=>setClassOn2(!classOn2)}>Séries</Link>

        <Link to="/" className={ classOn ? 'select' : ''} onClick={()=>setClassOn3(!classOn3)}>Filmes</Link>

        <Link to="/" className={ classOn ? 'select' : ''} onClick={()=>setClassOn4(!classOn4)}>Mais recentes</Link>

        <Link to="/" className={ classOn ? 'select' : ''} onClick={()=>setClassOn5(!classOn5)}>Minha lista</Link>
        </div>

        <div className="navigation" onClick={ () => setShowNavigation (!showNavigation) }>
          <Link >Navegar</Link>
          <ArrowDropDownIcon className="arrowNavigation"/>
           
          
        </div>
        {
       <div className={showNavigation ? 'navigationShow' : 'navigationHide' }>
            <Link>Início</Link>
            <Link>Séries</Link>
            <Link>Filmes</Link>
            <Link>Recentes</Link>
             <Link>Lista</Link>
          </div>
            }
   
      </div>

      <div className="container-right">

       <input type="text" className={showInput ? 'inputShow' : 'inputHide'}/>
       <SearchIcon className="icons" onClick={ ()=> setShowInput(!showInput)}/>
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