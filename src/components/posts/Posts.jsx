import Post from '../post/Post.jsx';
import { PostsData } from '../PostsData.jsx';
import './posts.css';
import { Link } from 'react-router-dom';

export default function Posts() {

    return (
        <div className='posts'>
            {PostsData.posts.map((onepost) => {
                return <Link to={"post/" + onepost.ID} key={onepost.ID}><Post art={onepost.image} title={onepost.title} date={onepost.date} categories={onepost.categories} content={onepost.content} /></Link>
            })}
        </div>
    )
}