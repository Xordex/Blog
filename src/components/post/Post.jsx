import './post.css';

// eslint-disable-next-line react/prop-types
export default function Post({ art, title }) {
    return (
        <div className='post'>
            <img src={art} alt="" className='postImg' />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">{title}</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem explicabo blanditiis doloremque necessitatibus assumenda pariatur cumque dolore. Numquam consectetur, odio qui tempora ad iure dolore ipsum dolor ullam reiciendis. Ullam!</p>
        </div>
    )
}
