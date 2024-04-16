import React from "react";

const NewsItem =(props)=> {

    let { title, description, imageUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div>          
            <span className=" badge rounded-pill bg-danger" style={{
    display:' flex',
    position: 'absolute',
    justifyContent: "flex-end",
    right: 0
}}>
           {source}
          </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}</h5><h4><span className="badge bg-secondary">New</span></h4>
            <p className="card-text">{description}......</p>
            <p className="card-text">
              <small className="text-danger">
                By {author} on {new Date(date).toUTCString()}
              </small>
            </p>

            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
