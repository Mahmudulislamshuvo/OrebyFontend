import React, { useState } from "react";
import Frame1 from "../../../assets/ProductDetails/image.png";

const ImageGallery = ({ image }) => {
  const SingleImages = image ? image[0] : Frame1;
  const [Image, setImage] = useState(SingleImages);

  const makeitBig = (ItemImage) => {
    setImage(SingleImages);
  };

  return (
    <div>
      <div class="flex gap-4">
        <div class="flex flex-col gap-y-4 pr-[30px]">
          {image?.map((singleImage) => (
            <div className="rounded bg-whitesmoke_F5F5F5 px-6 py-3">
              <img
                src={singleImage}
                alt={singleImage}
                className="h-[114px] w-[121px] cursor-pointer object-contain"
                onClick={() => makeitBig(singleImage)}
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
        {/* big image */}
        <div class="flex h-auto w-[600px] items-center justify-center rounded bg-whitesmoke_F5F5F5">
          <img
            src={Image}
            alt="Main Product Image"
            className="h-[315px] w-[446px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
