function GalleryItem({galleryItem}) {

    const handleClick = () => {
        console.log('Inside handleClick() for clicking an image.');
        // If statement goes in here
    }

    const handleLike = () => {
        console.log('Inside handleLike() for the Like button.');
        // increment the num of likes
    }

    return (
        <>
        <a href="#" onClick={handleClick}>
            <img src={galleryItem.path} alt={galleryItem.title} />
        </a>
        <button onClick={handleLike}>Like</button>
        <p>Likes: {galleryItem.likes}</p>
        </>
    );
}

export default GalleryItem;