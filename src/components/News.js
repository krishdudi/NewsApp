import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>  {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async ()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews(); 
    }, [])

    // const handlePreviousClick = async () => {
    //     setPage(page-1)
    //     updateNews();
    // };
    // const handleNextClick = async () => {
    //     setPage(page+1)
    //     updateNews()
    // };

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }
        return (
            <>
                <div className="text-center" style={{marginTop: "70px", marginBottom:"30px"}}>
                    <h2>NewsFetch - Top Headlines</h2>
                </div>
                {loading && <Spinner/>}
                <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row">
                            
                            {articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItems
                                            title={element.title}
                                            description={element.description}
                                            imageUrl={element.urlToImage}
                                            newsUrl={element.url}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between my-4">
                    <button
                        disabled={this.state.page <= 1}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePreviousClick}
                    >
                        &larr; Previous
                    </button>
                    <button
                        disabled={Math.ceil(
                            this.state.page + 1 >
                            this.state.totalResults / this.props.pageSize
                        )}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                    >
                        Next &rarr;
                    </button>
                </div> */}
            </>
        );
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News;
