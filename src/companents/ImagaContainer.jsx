import React from "react";
import ImageCard from "./ImageCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { UseGlobalContext } from "../hooks/UseGlobalContext";

const ImagaContainer = ({ images }) => {
  const { likedImages } = UseGlobalContext();
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="20px">
          {images.map((image) => {
            return (
              <ImageCard
                image={image}
                key={image.id}
                added={likedImages.some((img) => {
                  return img.id === image.id;
                })}
              ></ImageCard>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImagaContainer;
