import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const Post = () => {

    const params = useParams();

    const [post, setPost] = useState({});

    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })

    const [fetchComments, isCommentsLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })


    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className='post__container'>
            {isLoading
                ? <Loader/>
                : <div className='post'><strong>{post.id}. {post.title}.</strong> {post.body}</div>
            }
            {isCommentsLoading
                ? <Loader/>
                : <div className='comments__container'>
                    <h1 className='comments__header'>
                        Comments
                    </h1>
                    {comments.map(comment =>
                        <div key={comment.id} className='comment'>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default Post;