import React from 'react';
import css from './More_card.module.css'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const MoreCard = () => {
    const { id } = useParams()
    const [houses, setHouses] = useState(null);

    useEffect(() => {
        fetch('https://625eaae63b039517f1fa093e.mockapi.io/house/' + id)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setHouses(data)
            })
    }, [id])

    if (!houses) {
        return <h1>...Loading</h1>
    }
    return (
        <div className={css.container}>
            <div className={css.description}>
                <img
                    src={houses.image}
                    alt='bebe'
                    width="500px"
                    height="300px"
                ></img>
                <div className={css.text_container}>
                    <p className={css.main_text}>{houses.title}</p>
                    <p className={css.main_text}>{houses.price} $</p>
                    <div className={css.text}>{houses.description} </div>
                </div>

            </div>
            <div className={css.btn}>
                <button type="submit" class="btn btn-outline-secondary">Call</button>
            </div>
        </div>
    );
}

export default MoreCard;
