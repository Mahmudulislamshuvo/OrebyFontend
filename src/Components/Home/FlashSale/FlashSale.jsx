import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCart from "../../CommonComponents/ProductCart";

const FlashSale = () => {
  return (
    <div>
      <ProductCommonLayout
        // ProductCart={ProductCart}
        timeofOffer={2}
        timeStamp={true}
        tittle={"Today’s"}
        description={"Flash Sales"}
        Isarrow={true}
        discount={"35%"}
        ProductName={"AK-900 Wired Keyboard"}
        price={"$960"}
        BeforePrice={"$1160"}
        reviews={10}
      />
    </div>
  );
};

export default FlashSale;
