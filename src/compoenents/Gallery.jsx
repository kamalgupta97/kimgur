import React from 'react';
import { Post } from './Post';
import styles from '../styles/Gallery.module.css'
import axios from 'axios'



export const Gallery = () => {

    const [data, setData] = React.useState([])
    var config = {
        method: 'get',
        url: 'http://alpha-meme-maker.herokuapp.com/',
        // headers: {
        //     "client": "createClient 563492ad6f9170000100000127e4364dc0a943818a60c80ce6965329",

        // },

    };

    React.useEffect(() => {
        axios(config)
            .then(function (response) {
                console.log(response.data.data)
                setData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return <div className={styles.gallery}>
        <div className={styles.galleryHead}>Head</div>
        <div className={styles.container}>

            {
                data.map((item, i) => <Post key={i} {...item} />)
            }
        </div>
    </div>
}
