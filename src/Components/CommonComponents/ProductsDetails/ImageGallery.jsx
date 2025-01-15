import React, { useEffect, useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";

const ImageGallery = ({ image }) => {
  //  todo: set innitial image state
  const [InitialImage, setInitialImage] = useState(image[0]);

  useEffect(() => {
    setInitialImage(image[0]);
  }, [image]);

  return (
    <div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-y-4 pr-[25px]" key={image}>
          {image?.map((ItemImage) => (
            <div className="rounded bg-whitesmoke_F5F5F5 px-6 py-3">
              <img
                src={ItemImage}
                alt={ItemImage}
                className="h-[114px] w-[121px] cursor-pointer object-contain"
                onClick={() => setInitialImage(ItemImage)}
              />
            </div>
          ))}
          {/* static img extra */}
          {/* <div className="rounded bg-whitesmoke_F5F5F5 px-6 py-3">
            <img
              src="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              alt="https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80"
              className="h-[114px] w-[121px] cursor-pointer object-contain"
              onClick={() =>
                setInitialImage(
                  "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80",
                )
              }
            />
          </div> */}
        </div>
        {/* Big Image with Zoom Effect */}
        <div className="flex h-[600px] w-[500px] items-center justify-center overflow-hidden rounded bg-whitesmoke_F5F5F5">
          <InnerImageZoom
            className="h-full w-full object-contain"
            src={InitialImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
