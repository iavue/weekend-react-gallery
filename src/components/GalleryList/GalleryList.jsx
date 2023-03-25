import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryList}) {

    return (
        <div className="gallery-container">
            {/* The name of the object that I am passing in to the .map() parameter is 'image'.
                Ex of what my object would look like: 
                    image = {id: 1, title: 'cow', path: '/path/to/image1.jpg'} */}
            {galleryList.map((image) => 
                ( 
                <div key={image.id}>
                {/* Each GalleryItem component will receive a 'galleryItem' prop 
                with the current corresponding 'image' object.
                    When the GalleryItem component is rendered for the first time, it will get:
                    galleryItem={id: 1, title: 'cow', path: '/path/to/image1.jpg'
                    Using .map(), we will keep looping through each object in the galleryList array
                    and return with the elements we have here: div, h3 and img} */}
                <GalleryItem galleryItem={image}/> 
                </div>
                )
            )}
        </div>
    )
}

export default GalleryList;