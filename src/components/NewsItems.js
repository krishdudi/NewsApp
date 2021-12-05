// import { getByTitle } from '@testing-library/react'
import React from 'react'
// import News from './News';

const NewsItems =(props)=>{
        let {title, description, imageUrl, newsUrl} = props;
        return (
            <div>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                    </div>
            </div>
        )
}

export default NewsItems
