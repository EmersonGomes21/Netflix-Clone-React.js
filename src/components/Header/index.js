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
  const [filterSelect, setFilterSelect] = useState('inicio');
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
        
        <Link to="/"  className={
           filterSelect === 'inicio' ? 'select' : '' } 
           onClick={()=>setFilterSelect('inicio')}>Início</Link>

        <Link to="/" className={
        filterSelect === 'series' ? 'select' : ''} 
        onClick={()=>setFilterSelect('series')}>Séries</Link>

        <Link to="/" className={
           filterSelect === 'filmes' ? 'select' : ''}    
           onClick={()=>setFilterSelect('filmes')}>Filmes</Link>

        <Link to="/" className={ 
          filterSelect === 'MRecentes' ? 'select' : ''}
          onClick={()=>setFilterSelect('MRecentes')}>Mais recentes</Link>

        <Link to="/" className={
           filterSelect === 'MLista' ? 'select' : '' }
           onClick={()=>setFilterSelect('MLista')}>Minha lista</Link>
        </div>

        <div className="navigation" onClick={ () => setShowNavigation (!showNavigation) }>
          <Link>Navegar</Link>
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

       <input type="text" className={showInput ? 'inputShow' : 'inputHide'} placeholder="Títulos, gente e gêneros" />

       <SearchIcon className={ showInput? 'SearchIcon-on' : 'icons'} onClick={ ()=> setShowInput(!showInput)}/>
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