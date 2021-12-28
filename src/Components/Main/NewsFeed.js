const NewsFeed = ({news, length}) => {
    
    return ( 
      <section>
          <div className="crypto-news"> 
          {
            Object.values(news.slice(0, length)).map(newsItem => {
              return(
                <a href={newsItem.url}>
                    <div className='news-item'>
                      <div className="img">
                        <img src={newsItem.image} />
                      </div>
                      <div className="news-content">
                        <span className="date">{newsItem.date}</span>
                        <h2>{newsItem.title}</h2>    
                        <p>{newsItem.desc}</p>
                      </div>

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