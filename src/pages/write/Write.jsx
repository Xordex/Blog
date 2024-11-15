import './write.css';
import { FaPlus } from "react-icons/fa";
import writeImg from '../../assets/nature.jpg';

export default function Write() {
    return (
        <div className='write'>
            <img src={writeImg} alt="" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <FaPlus className='writeIcon' />
                    </label>
                    <input type="file" id='fileInput' />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}
