import React, { Fragment, useState,  useCallback, useEffect } from "react";
import PageHeader from "../../components/pageHeader";
import Gallerys from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images"
// import { photos } from "./source";
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const photos = [
    {
      src: "https://i.imgur.com/lKYeuie.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/3YIPy0F.jpg",
      width: 1,
      height: 1
    },
    {
      src: "https://i.imgur.com/MVUKXia.jpg?1",
      width: 2,
      height: 3
    },
    {
      src: "https://i.imgur.com/ZAVP4XL.jpg",
      width: 3,
      height: 3
    },
    {
      src: "https://i.imgur.com/EIqh41j.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.imgur.com/42qcfuZ.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/zpQ7MPy.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.imgur.com/LhZI9hj.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/LEGScbw.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/aYrwHsr.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/KUR7sEF.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.imgur.com/JVGd1IL.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/1zF8E5x.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/BNZITkU.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/dJ9RVYv.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/or9SIzV.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/PDk0ON5.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/4T6EqYV.jpg",
      width: 4,
      height: 3
    },
    {
      src: "https://i.imgur.com/a44qpmY.jpg",
      width: 4,
      height: 5
    },
    {
      src: "https://i.imgur.com/YayU7vb.jpg",
      width: 3,
      height: 2
    },
    {
      src: "https://i.imgur.com/J7ilzGF.jpg",
      width: 3,
      height: 2
    },
    {
      src: "https://i.imgur.com/8lG52kq.jpg",
      width: 3,
      height: 2
    },
    {
      src: "https://i.imgur.com/hCkCYwB.jpg",
      width: 1,
      height: 1
    },
    {
      src: "https://i.imgur.com/YfWtIHs.jpg",
      width: 11,
      height: 2
    }
  ];

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
    return ( 
        <Fragment>
            <PageHeader title={'Gallery'} bgclass={'page_header_bg_rooms'} >
                
                </PageHeader>
        <section>
        <Gallerys photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
        </section>
        </Fragment>
     );
}
 
export default Gallery;