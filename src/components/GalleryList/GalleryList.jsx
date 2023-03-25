function GalleryList({galleryList}) {
    return (
        <>
            {galleryList.map((image) => 
                (
                <div key={image.id}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
                <img src={image.path}/>
                <p>Likes: {image.likes}</p>
                </div>
                )
            )}
        </>
    )
}

export default GalleryList;