import { Image } from 'react-datocms';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function RenderGallery({gallery}) {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return(
    <>
     
        
      <Slider {...settings}>

        {
          gallery.gallerySlides.map((slide) => {
            return( 
              <div>
                <h2>{slide.headline}</h2>
                <h4>{slide.subHead}</h4>
                <Image data={slide.image.responsiveImage} />
              </div>
            )
          })
        }

        {/*
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        */}
        
      </Slider>

      <style jsx global>{`
        .slick-slider { 
          width: 50%;
          margin: 0px auto;
          border: 1px solid red;
        }
        h3 {
          background: #5f9ea0;
          color: #fff;
          font-size: 36px;
          line-height: 100px;
          margin: 10px;
          padding: 2%;
          position: relative;
          text-align: center;
        }
        .slick-prev:before, .slick-next:before { color: black; }

      `}</style>
    </>

    
  )
}


