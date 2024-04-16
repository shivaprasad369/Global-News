import React, {useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=> {
 const [articals,setArticals]=useState([])
 const [loading,setLoading]=useState(true);
 const [page,setPage]=useState(1)
 const [totalResults,settoatalResults]=useState(0);
 
  const capitalizeFirstCharacter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
 
  
 const updateNews=async()=> {
    console.log("cmd");
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url); //fetch() return promise
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticals(parsedData.articles);
    settoatalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100)
  }
  useEffect(()=>{
      document.title = `${capitalizeFirstCharacter( props.category)} - Honest News`;
    updateNews();
  },[props.category,updateNews])
 
  
  // const handleClickNext = async () => {
    //  console.log("next");
    //if(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)){
    //}else{
    //  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f540b434aa9a4518b32fbce69ba1b639&page=${this.state.page+1}&pagesize=${props.pageSize}`;
    //   this.setState({loading:true});
    //  let data=await fetch(url);//fetch() return promise
    //let parsedData=await data.json();

    //this.setState({
    //page:this.state.page+1,
    //articals:parsedData.articles,
    //loading:false)}
  //   setPage(page+1);
  //   updateNews();
  // };
  // const handleClickPrevious = async () => {
    //  console.log("preivous");
    //let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f540b434aa9a4518b32fbce69ba1b639&page=${this.state.page-1}&pagesize=${props.pageSize}`;
    //this.setState({loading:true});
    //    let data=await fetch(url);//fetch() return promise
    //  let parsedData=await data.json();
    //console.log(parsedData);

    //  this.setState({
    //page:this.state.page-1,
    //articals:parsedData.articles,
    //loading:false

    //  })
  //   setPage(page);
    
  //   updateNews();
  // };
 const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
      setPage(page+1);
      let data = await fetch(url); //fetch() return promise
      let parsedData = await data.json();
      console.log(parsedData);
      setArticals(articals.concat(parsedData.articles));
      settoatalResults(parsedData.totalResults);
}
  
  
    return (
     <>
     <div>
        <h2 className="text-center">
          Globle News - Top Headlines from{" "}
          {capitalizeFirstCharacter(props.category)}
        </h2>
        </div>
      {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articals.length}
          next={fetchMoreData}
          hasMore={articals.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <h2 className="text-center my-4">
          Globle News - Top Headlines from{" "}
          {capitalizeFirstCharacter(props.category)}
        </h2>
          <div className="row">
            {/* // {!this.state.loading && this.state.articals.map((element)=>{*/}
            {articals.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    newsUrl={element.url}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://thehill.com/wp-content/uploads/sites/2/2022/12/6976cda2cf1c4f04baf0d6441c203034-e1671751401419.jpg?w=640&h=360&crop=1"
                    }
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
                
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      
        {/*
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleClickPrevious} >
            {" "}
            &larr;Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleClickNext}
          >
            Next&rarr;
          </button>
        </div>
          </div>*/}
          </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
