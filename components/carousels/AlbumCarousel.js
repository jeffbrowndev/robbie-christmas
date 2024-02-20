import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Album from "./Album";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";

const responsive = {
  desktopLarge: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 1
  },
  desktopSmall: {
    breakpoint: { max: 2300, min: 464 },
    items: 6,
    slidesToSlide: 1
  },
  desktopXSmall: {
    breakpoint: { max: 2000, min: 0 },
    items: 5,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1650, min: 0 },
    items: 4,
    slidesToSlide: 1
  },
  tabletSmall: {
    breakpoint: { max: 1350, min: 0 },
    items: 3,
    slidesToSlide: 1
  },
  mobileLarge: {
    breakpoint: { max: 1000, min: 0 },
    items: 2,
    slidesToSlide: 1
  },
  mobileSmall: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const AlbumCarousel = () => {
  const { albums } = useContext(DataContext);

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true}
      infinite={true} >
        {albums.map(album => <Album album={album} />)}
    </Carousel>
)
}

export default AlbumCarousel;