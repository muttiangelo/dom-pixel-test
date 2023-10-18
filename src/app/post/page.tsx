'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
            const posts: Post[] = await res.json();
            setPosts(posts);
        };
        fetchPosts();
    }, []);

    return (
        <main>
            <div>
                <img src="path/to/image.jpg" alt="Blog Image" />
                {posts.map((post) => (
                    <div key={post.id}>
                        <Link href={`post/${post.id}`} passHref>
                            <h2>{post.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default PostPage;