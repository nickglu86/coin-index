import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const NewsFeed = ({news, length}) => {

  const NewsFeedCarousel = () =>  {
    var newsCarouselContent = [];
    for (var i = 0; i < length/3; i++) {
      var newsItemsRow = [];
      for (var k = 0; k < 3; k++) {
              newsItemsRow.push(
                      <div className="news-elem">
                         <img src={news[i*3+k].image}    height="180" />  
                          <h4>{news[i*3+k].title}</h4>                     
                      </div>      
              );
      }  
      newsCarouselContent.push(
        <Paper  className="paper-row" width="250" variant="outlined">
          {newsItemsRow}
        </Paper>
      )
    }
    return (
      <Carousel className="crypto-news-carousel">
        {newsCarouselContent}
      </Carousel>
    );
  }
    return ( 
      <section>
          <div className="crypto-news"> 
              <NewsFeedCarousel />
          </div>
        </section>
     );
}

export default NewsFeed;
