import { Link } from 'react-router-dom';
import { PostsData } from '../../components/PostsData';
import './search.css';
import Post from '../../components/post/Post';
import { useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
    const [Results, setResults] = useState([]);
    const inputSearch = useRef();

    const SearchAlg = () => {
        setResults([]);
        PostsData.posts.map(e => {
            if (e.title.toLowerCase().includes(inputSearch.current.value.toLowerCase())) {
                setResults((eee) => [...eee, e]);
            }
        })
    }

    return (
        <div>
            <div className='searchform' onKeyDown={SearchAlg}>
                <input type="text" placeholder='Czego szukasz?' ref={inputSearch} autoFocus />
                <FaSearch onClick={SearchAlg} />
            </div>
            <div className='posts-search'>
                {Results.map(onepost => {
                    if (onepost.ID) {
                        console.log(onepost);
                        return (<Link key={onepost.ID} to={"/post/" + onepost.ID} ><Post art={onepost.image} title={onepost.title} date={onepost.date} categories={onepost.categories} content={onepost.content} /></Link>);
                    }
                })}
            </div>
        </div>
    )
}

