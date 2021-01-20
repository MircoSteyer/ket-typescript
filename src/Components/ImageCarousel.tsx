import React from 'react';
import Carousel from "react-material-ui-carousel";
import {AlbumCardContent} from "../Types"
import ImageCarouselItem from "./ImageCarouselItem";

type CarouselProps = {
    albumCards: AlbumCardContent[]
}

const ImageCarousel: React.FC<CarouselProps> = ({albumCards}) => {
    return (
        <Carousel>
            {
                albumCards.map( (card, i) => <ImageCarouselItem key={i} card={card} /> )
            }
        </Carousel>
    );
};

export default ImageCarousel;