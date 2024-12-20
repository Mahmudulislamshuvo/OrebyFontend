import React from "react";
import CategoryCommon from "../../CommonComponents/CategoryCommon";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";

const Category = () => {
  return (
    <>
      <div className="container">
        <div>
          <ProductCommonLayout
            ProductCart={CategoryCommon}
            timeofOffer={2}
            timeStamp={false}
            tittle={"Categories"}
            description={"Browse By Category"}
            Isarrow={true}
            discount={"35%"}
            ProductName={"AK-900 Wired Keyboard"}
            price={"$960"}
            BeforePrice={"$1160"}
            reviews={10}
            SlidshowNumber={6}
          />
        </div>
      </div>
    </>
  );
};

export default Category;
