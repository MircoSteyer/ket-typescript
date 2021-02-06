import React, {useState} from 'react';
import Carousel from "react-material-ui-carousel";
import {AlbumCardContent} from "../Types"
import ImageCarouselItem from "./ImageCarouselItem";
import {imageCarouselItems} from "../content";

/*type CarouselProps = {
    imageCarouselItems: AlbumCardContent[]
}*/

const ImageCarousel = () => {

    const [shownImageCarouselItems, setShownImageCarouselItems] = useState<AlbumCardContent[]>(imageCarouselItems)

    return (
        <Carousel autoPlay={false} indicators={false} >
            {
                shownImageCarouselItems.map( (card) => <ImageCarouselItem key={card.id} card={card} /> )
            }
        </Carousel>
    );
};

export default ImageCarousel;
