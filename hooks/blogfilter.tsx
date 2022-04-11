import type { Blog } from '.contentlayer/types';
import type { NextRouter } from 'next/router'
import { useRouter } from 'next/router';
import React from 'react';
interface Props {
    posts: Blog[],
    keyword: string,
    category: string
}

let useBlogs = (data: Props): {
    posts: Blog[],
} => {
    const router: NextRouter = useRouter();
    let [posts, setPosts] = React.useState(data.posts);
    React.useEffect(() => {
        let filteredPost: Blog[];
        if (data.category === 'All') {
            filteredPost = data.posts.filter((post: Blog) => {
                return post.title.toLowerCase().includes(data.keyword.toLowerCase()) || post.summary.toLowerCase().includes(data.keyword.toLowerCase())
            })
        } else {
            let category: any = data.category
            filteredPost = data.posts.filter(post => post.categories && post.categories.includes(category));
        }
        if (data.keyword !== '') {
            filteredPost = filteredPost.filter(post => {
                return post.title.toLowerCase().includes(data.keyword.toLowerCase()) || post.summary.toLowerCase().includes(data.keyword.toLowerCase());
            });
        }
        setPosts(filteredPost);
    }, [data.keyword, posts, data.category, data.posts])
    return {
        posts: posts,
    };
}

export default useBlogs;