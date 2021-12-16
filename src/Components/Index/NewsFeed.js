const NewsFeed = ({news}) => {
    
    return ( 
      <section>
          <div className="crypto-news"> 
          {
            Object.values(news.slice(0, 4)).map(newsItem => {
              return(
                <a href={newsItem.url}>
                    <div className='news-item'>
                      <div className="img">
                        <img src={newsItem.image} />
                      </div>
                      <h2>{newsItem.title}</h2>
                    </div>
                </a>
              );
            })
          }  
          </div>
        </section>
     );
}

export default NewsFeed;