import React from 'react';
import type { Blog } from '.contentlayer/types';

interface Props {
    posts: Blog[],
    pinned: Blog[],
    keyword: string
}

let useBlogs = (data: Props): {
    posts: Blog[],
    pinned: Blog[],
} => {

    let [posts, setPosts] = React.useState(data.posts);
    let [pinned, setPinned] = React.useState(data.pinned);

    React.useEffect(() => {
        if (data.keyword !== '') {
            // filter by keyword
            let filteredPost = data.posts.filter(post => {
                return post.title.toLowerCase().includes(data.keyword.toLowerCase());
            });
            setPosts(filteredPost);
            let filteredPinned = data.pinned.filter(post => {
                return post.title.toLowerCase().includes(data.keyword.toLowerCase());
            });
            setPinned(filteredPinned);
        }

    }, [data.keyword, data.pinned, data.posts])


    return {
        posts: posts,
        pinned: pinned
    };
}

export default useBlogs;