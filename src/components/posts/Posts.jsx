import Post from '../post/Post.jsx';
import './posts.css';
import art1 from '../../assets/article/art1.jpg';
import art2 from '../../assets/article/art2.jpg';
import art3 from '../../assets/article/art3.jpg';
import art4 from '../../assets/article/art4.jpg';
import art5 from '../../assets/article/art5.jpg';
import { Link } from 'react-router-dom';

export default function Posts() {
    return (
        <div className='posts'>
            <Link to="single"><Post art={art1} title="Lorem ipsum dolor sit amet" /></Link>
            <Link to="single"><Post art={art2} title="Lorem ipsum dolor sit amet" /></Link>
            <Link to="single"><Post art={art3} title="Lorem ipsum dolor sit amet" /></Link>
            <Link to="single"><Post art={art4} title="Lorem ipsum dolor sit amet" /></Link>
            <Link to="single"><Post art={art5} title="Lorem ipsum dolor sit amet" /></Link>
        </div>
    )
}
