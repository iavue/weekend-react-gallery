import React, { useState } from 'react';

function GalleryItem({galleryItem}) {

    const [showDescription, setShowDescription] = useState(false);

    const handleClick = () => {
        console.log('Inside handleClick() for clicking an image.');
        // ! to toggle the 'showDescription' state between true and false
        setShowDescription(!showDescription);
    }

    const handleLike = () => {
        console.log('Inside handleLike() for the Like button.');
        let num = 0;
        // increment the num of likes
        num += 1;
        console.log('Num:', num);
        galleryItem.likes = num;
    }

    return (
        <>
        {/* if showDescription is true, the description should render */}
        {showDescription ? (
        <p>{galleryItem.description}</p>
        ) : (
        // else, render the image
        <a href="#" onClick={handleClick}>
            <img src={galleryItem.path} alt={galleryItem.title} />
        </a> )}
        <button onClick={handleLike}>Like</button>
        <p>Likes: {galleryItem.likes}</p>
        </>
    );
}

export default GalleryItem;