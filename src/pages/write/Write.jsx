import './write.css';
import { FaPlus } from "react-icons/fa";
import writeImg from '../../assets/nature.jpg';
import { useRef, useState } from 'react';
import { PostsData } from '../../components/PostsData';
import { Link } from 'react-router-dom';

export default function Write() {
    const TitleInput = useRef();
    const ContentInput = useRef();
    const [image, setImage] = useState(writeImg);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className='write'>
            <img src={image} alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <FaPlus className='writeIcon' />
                    </label>
                    <input type="file" id='fileInput' onChange={handleImageUpload} />
                    <input type="text" ref={TitleInput} placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' ref={ContentInput} type="text" className='writeInput writeText'></textarea>
                </div>
                <Link to="/"><span className='writeSubmit' onClick={() => PostsData.add(TitleInput.current.value, ContentInput.current.value, image)}>Publish</span></Link>
            </form>
        </div>
    )
}
