import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    // const bodyInputRef = useRef(); Неуправляемый компонент

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form className='form'>
            <MyInput value={post.title} type="text"
                     placeholder='Post Title'
                     onChange={event => setPost({...post, title: event.target.value})}/>

            <MyInput value={post.body} type="text"
                     placeholder='Post Body'

                     onChange={event => setPost({...post, body: event.target.value})}/>

            {/*<MyInput ref={bodyInputRef}*/}
            {/*         type="text" placeholder='Post Body'/> Неуправляемый компонент*/}

            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
};

export default PostForm;