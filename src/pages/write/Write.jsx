import './write.css';
import { FaPlus } from "react-icons/fa";
import writeImg from '../../assets/nature.jpg';
import { useRef, useState } from 'react';
import { PostsData } from '../../components/PostsData';
import { Link } from 'react-router-dom';

export default function Write() {
    const TitleInput = useRef();
    const ContentInput = useRef();
    const CategoriesInput = useRef();
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
                    <input type="text" ref={TitleInput} placeholder='Tytuł wpisu' className='writeInput' autoFocus={true} />
                    <input type="text" ref={CategoriesInput} placeholder='Kategorie (rozdziel przecinkiem)' className='writeInput catInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Treść wpisu...' ref={ContentInput} type="text" className='writeInput writeText'></textarea>
                </div>
                <Link to="/"><span className='writeSubmit' onClick={() => PostsData.add(TitleInput.current.value, ContentInput.current.value, image, CategoriesInput.current.value)}>Publikuj</span></Link>
            </form >
        </div >
    )
}