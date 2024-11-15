import './singlepost.css'
import mainImg from '../../assets/article/art1.jpg';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src={mainImg} alt="" />
                <h1 className="singlePostTitle">
                    Lorem impsum sorelr herter gher
                    <div className="singlePostEdit">
                        <FaEdit className='singlePostIcon' />
                        <FaTrash className='singlePostIcon' />
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Michael</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cum esse error odio ipsa amet reiciendis! Itaque assumenda commodi non odio modi repellendus odit iusto officiis exercitationem, accusamus at sint!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cum esse error odio ipsa amet reiciendis! Itaque assumenda commodi non odio modi repellendus odit iusto officiis exercitationem, accusamus at sint!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cum esse error odio ipsa amet reiciendis! Itaque assumenda commodi non odio modi repellendus odit iusto officiis exercitationem, accusamus at sint!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cum esse error odio ipsa amet reiciendis! Itaque assumenda commodi non odio modi repellendus odit iusto officiis exercitationem, accusamus at sint!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis cum esse error odio ipsa amet reiciendis! Itaque assumenda commodi non odio modi repellendus odit iusto officiis exercitationem, accusamus at sint!
                </p>
            </div>
        </div>
    )
}