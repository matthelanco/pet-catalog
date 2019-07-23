import React from 'react';
import './BlogItem.css';

const BlogItem = (props) => (
    <div className='BlogItem box content'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
)
export default BlogItem;