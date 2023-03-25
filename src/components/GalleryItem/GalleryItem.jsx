import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem({galleryItem}) {

    // We want showDescription to be false at first so when we click on the image, it will toggle to true and show the description.
    const [showDescription, setShowDescription] = useState(false);

    // The default for likeCount is whatever is in the gallery.data module
    const [likeCount, setLikeCount] = useState(galleryItem.likes);

    const handleClick = () => {
        console.log('Inside handleClick() for clicking an image.');
        // Use ! to toggle the 'showDescription' state between true and false
        setShowDescription(!showDescription);
    }

    const updateCount = () => {
        console.log('Inside updateCount() for the Like count.');

        axios({
            method: 'PUT',
            url: '/gallery/like/:id'
        }).then((response) => {
            // After PUT request is successful, update likeCount using setLikeCount
            setLikeCount(likeCount + 1);
        }).catch((err) => {
            console.log('Unable to update like count', err);
        });
    }

    return (
        <div className='galleryItemBox'>
        {/* if showDescription is true, the description should render */}
        {showDescription ? (
        <p>{galleryItem.description}</p>
        ) : (
        // else, render the image
        <a href="#" onClick={handleClick}>
            <img src={galleryItem.path} alt={galleryItem.title} />
        </a> )}
        <div className='likeBox'>
        <button onClick={updateCount}>❤️</button>
        <p>{likeCount} hearts</p>
        </div>
        </div>
    );
}

export default GalleryItem;