import React, { useEffect, useState } from 'react';
import Tmdb from '../../Tmdb';
import MovieRow from '../../components/MovieRow';
import FeaturedMovie from '../../components/FeaturedMovie';
import Header from '../../components/Header';
import Loading from '../../assets/netflix-loading.gif';
import './home.css'

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {

      //Pegando a lista ToTal
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      //pegando o Featured
      let originals = list.filter(i => i.slug === 'originals');

      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));

      let chosen = originals[0].items.results[randomChosen];
      //console.log(chosen);

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      //console.log(chosenInfo);

      setFeaturedData(chosenInfo);
      //console.log(featuredData);
    }

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists" >

        {movieList.map((item, key) => (
          <div key={key}>
            <MovieRow title={item.title} items={item.items} />
          </div>
        ))}

      </section>

      <footer>
          Feito com <span role="img" aria-label="coração">❤</span> por Emerson Gomes <br/>
          Direitos de imagem para a Netflix
          <br/>
          Dados pegos do site Themoviedb.org

      </footer>
       {movieList.length <= 0 &&
      <div className="loading">
        <img src={Loading} alt="Carregando" style={{width: 400,
        transition: 'all ease 0.4s'}}/>
      </div>
      }

    </div>
  );
};