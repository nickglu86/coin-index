const NewsFeed = ({news}) => {
    
    return ( 
        <div className="crypto-news"> 
        {
          Object.values(news.slice(0, 4)).map(newsItem => {
            return(
               <a href={newsItem.url}>
                  <div className='news-item'>
                    <h2>{newsItem.title}</h2>
                    <p>{newsItem.desc}</p>
                    <img src={newsItem.image} />
                  </div>
               </a>
             );
          })
        }  
        </div>
     );
}

export default NewsFeed;