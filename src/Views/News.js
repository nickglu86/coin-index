import NewsFeed from "../Components/Main/NewsFeed";
import { DataContext } from "../Utils/DataContext";
import { useContext } from "react";

const ARTICLES_TO_SHOW = 50;

const News = () => {
    const { news } = useContext(DataContext)
    return ( 
        <div className="news">
            <NewsFeed news={news}  length={ARTICLES_TO_SHOW} />
        </div>
     );
}

export default News;