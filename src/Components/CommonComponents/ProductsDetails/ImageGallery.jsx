import React, { useState } from "react";
import Frame1 from "../../../assets/ProductDetails/image.png";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

const ImageGallery = ({ image }) => {
  const SingleImages =
    image && image.length > 0
      ? image[0]
      : "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80";
  const [InitialImage, setInitialImage] = useState(SingleImages);

  const makeitBig = (ItemImage) => {
    setInitialImage(ItemImage);
  };

  return (
    <div>
      <div class="flex gap-4">
        <div class="flex flex-col gap-y-4 pr-[25px]">
          {image?.map((ItemImage) => (
            <div className="rounded bg-whitesmoke_F5F5F5 px-6 py-3">
              <img
                src={ItemImage}
                alt={ItemImage}
                className="h-[114px] w-[121px] cursor-pointer object-contain"
                onClick={() => makeitBig(ItemImage)}
              />
            </div>
          ))}
          <div className="rounded bg-whitesmoke_F5F5F5 px-6 py-3">
            <img
              src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              alt="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              className="h-[114px] w-[121px] cursor-pointer object-contain"
              onClick={() =>
                makeitBig(
                  "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
                )
              }
            />
          </div>
        </div>
        {/* Big Image with Zoom Effect */}
        <div className="flex h-[600px] w-[500px] items-center justify-center overflow-hidden rounded bg-whitesmoke_F5F5F5">
          <InnerImageZoom
            className="h-[315px] w-[446px]"
            src={InitialImage === undefined ? SingleImages : InitialImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
