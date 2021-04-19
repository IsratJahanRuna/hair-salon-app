import React from 'react';
import Reviews from '../Reviews/Reviews';
import './Review.css';

const Review = () => {
   
    return (
        <div>
            <h1 className="text-center font-family mb-5 mt-5 review" style={{ fontWeight: '600', color: '#65555D' }}>WHAT<span style={{ color: '#C94185' }}> THEY</span> SAY</h1>
            <div className="review-container" style={{ paddingTop: '8%' }}>

                <p></p>
                <div>
                    <Reviews></Reviews>
                </div>
            </div>
        </div>
    );
};

export default Review;