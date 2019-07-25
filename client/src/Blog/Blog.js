import React, {Component} from 'react';

import BlogItem from './BlogItem';
import client from './../contentful';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }

    fetchPosts = (() => {
        return client.getEntries({content_type: 'product'});
    });

    setPosts = response => {
        this.setState({
            posts:response.items
        });
    };

    render() {
        return (
            <div>
            <h1> This is the Blog Page </h1>
            <p> From Contentful</p>
            <br/>
            {this.state.posts.map(({fields}, i) =>
                <BlogItem key={i} {...fields}></BlogItem>
            )}
            </div>
        )

    }
}

export default Blog;
