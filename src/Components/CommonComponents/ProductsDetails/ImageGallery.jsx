import React, { useState } from "react";
import Frame1 from "../../../assets/ProductDetails/image.png";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

const ImageGallery = ({ image }) => {
  const SingleImages =
    image && image.length > 0
      ? image[0]
      : "https://images.pexels.com/photos/29487999/pexels-photo-29487999/free-photo-of-seagulls-flying-over-istanbul-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [InitialImage, setInitialImage] = useState(SingleImages);
  console.log(InitialImage);

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
              src="https://images.pexels.com/photos/29487999/pexels-photo-29487999/free-photo-of-seagulls-flying-over-istanbul-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="https://images.pexels.com/photos/29487999/pexels-photo-29487999/free-photo-of-seagulls-flying-over-istanbul-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-[114px] w-[121px] cursor-pointer object-contain"
              onClick={() =>
                makeitBig(
                  "https://images.pexels.com/photos/29487999/pexels-photo-29487999/free-photo-of-seagulls-flying-over-istanbul-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
