import NewsFeed from "../Components/Main/NewsFeed";

const ARTICLES_TO_SHOW = 50;

const News = ({news}) => {
 
    return ( 
        <div className="news">
            <NewsFeed news={news}  length={ARTICLES_TO_SHOW} />
        </div>
     );
}

export default News;