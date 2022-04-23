import React from 'react';
import css from './Post.module.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';




const Post = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [post, setPost] = useState("")
    const [image, setImage] = useState("")

    const navigate = useNavigate();

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault();


        fetch('https://625eaae63b039517f1fa093e.mockapi.io/house', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                image: image
            }),
            // headers: {
            //     "Content-type": "application/json; charset=UTF-8",
            //   },
        })
            .then((response) => {
                response.json()
                if (response.status === 201) {
                    alert('succes')
                    navigate('/')
                }
            
            })
            .then((res) => {
                setPost([res]);
                console.log(post)

                
            })






    }
    return (
        <form onSubmit={submit} className='container mt-5'>
            <div className={css.container}>
                <h1 className={css.main_text}>Создать объявление</h1>
                <div className={css.input_block}>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
                        <input type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            value={title}
                            onChange={handleTitle}
                        />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
                        <input type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            value={description}
                            onChange={handleDescription}
                        />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
                        <input type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            value={price}
                            onChange={handlePrice}
                        />
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Image link</span>
                        <input type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            value={image}
                            onChange={handleImage}
                        />
                    </div>

                </div>
                <div className={css.btn}>
                    <Link to={"/"} className="btn btn-secondary">Close</Link>
                    <button type="submit" className="btn btn-secondary">Save</button>
                </div>
            </div>
        </form>
    );
}

export default Post;
