import React, {Component} from 'react';
import * as contentful from 'contentful'

import BlogItem from './BlogItem';

class Blog extends Component {
    state = {
        posts: []
    }
    client = contentful.createClient({
        space:'jxh66dyryk79',
        accessToken:'bLQWoVyo-xnsN8uKEfR5cm-UsUiG0fB_KG1bF0f28fY'
    });

    componentDidMount() {
        this.fetchPosts().then(this.setPosts);
    }

    fetchPosts = () => this.client.getEntries()
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
