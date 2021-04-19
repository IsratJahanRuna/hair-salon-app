import React, { Component, useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

// const reviewData = [
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Wilson Harry',
//         from: 'California'
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Ema Gomez',
//         from: 'California'
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Aliza Farari',
//         from: 'California'
//     }
// ]

const Reviews=()=> {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('https://shrouded-bastion-35026.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


   
        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1, 
          autoplay:true
        };
        
    return (

        <div>

        <Slider {...settings} className="container h-100 mt-5">
        {
            reviews.map(review =>
                <div className="d-flex align-items-center text-center m-auto">
                    
                    <div className="align-items-center text-center m-auto">
                    <h1 className="text text-center text-center m-auto">{review.name}</h1>
                    <p className="text text-center text-center m-auto">{review.comment}</p>
                    {/* <h5 className="text text-center">From: {review.from}</h5> */}
                    </div>
                </div>
            )
        }
    </Slider>
      </div>
    );
}

export default Reviews;