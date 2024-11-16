import './post.css';
import PropTypes from 'prop-types';

export default function Post({ art, title, date, categories, content }) {
    Post.propTypes = {
        categories: PropTypes.any,
        art: PropTypes.any,
        title: PropTypes.any,
        date: PropTypes.any,
        content: PropTypes.any
    };

    return (
        <div className='post'>
            <img src={art} alt="" className='postImg' />
            <div className="postInfo">
                <div className="postCats">
                    {categories.map(e => {
                        return <span className="postCat" key={e}>{e}</span>
                    })}
                </div>
                <span className="postTitle">{title}</span>
                <hr />
                <span className="postDate">{date}</span>
            </div>
            <p className="postDesc">{content[0]}</p>
        </div>
    )

}