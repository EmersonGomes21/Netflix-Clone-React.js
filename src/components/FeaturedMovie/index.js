import React from 'react';
import './FeaturedMovie.css';

export default({item})=>{
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }
  let description =item.overview;
    let limitString = "Um jovem médico com autismo começa a trabalhar em um famoso hospital. Além dos desafios da profissão, ele terá também que provar sua capacidade.....";
   if (description.length > limitString.length){
     description = description.substring(0, limitString.length)+'...';
    }

  return (
    <section className="featured" style={{
      backgroundSize:'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
       }}>
        <div className="featured--vertical">
            
            <div className="featured--horizontal">
              <div className="featured--name">
               {item.original_name}
              </div>

               <div className="featured--info">

               <div className="featured--points">{item.vote_average} pontos</div>

      <div className="featured--year">{firstDate.getFullYear()}</div>

               <div className="featured--season">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's': ''}</div>

               <div className="featured--description">{description}</div>

              <div className="featured--bottons">
              <a href={`/watch/${item.id}`} className="featured--watch--button">► Assistir</a>

              <a href={`/list/add/${item.id}`}  className="featured--my--list--button"> + Minha Lista</a>
              </div>
              
              <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')} </div>


            </div>
            </div>
        </div>
    </section>
  );
}