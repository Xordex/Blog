import './singlepost.css'
import { FaTrash } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { PostsData } from '../PostsData';

export default function SinglePost() {
    const { postId } = useParams();
    let SearchedPost = {};
    PostsData.posts.map(post => {
        if (post.ID == postId) {
            SearchedPost = post;
        }
    })

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src={SearchedPost.image} alt="" />
                <h1 className="singlePostTitle">
                    {SearchedPost.title}
                    <div className="singlePostEdit">
                        <Link to="/"><FaTrash className='singlePostIcon' onClick={() => PostsData.delete(postId)} /></Link>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Autor: <b>Michał Jaroch</b></span>
                    <span className='singlePostDate'>{SearchedPost.date}</span>
                </div>
                {SearchedPost.content.map(e => <p className='singlePostDesc' key={e}>{e}</p>)}
            </div>
        </div>
    )
}

