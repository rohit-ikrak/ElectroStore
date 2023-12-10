import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import Base from "../components/Base";
import axios from "axios";
import Store from "../components/users/Store";
import {
  infoWithImageInRightSection,
  trendingProducts,
  infoWithImageInLeftSection,
  contactForm,
} from "./HomePageComponents";
import { useState } from "react";
function Index() {
  const [products, setProducts] = useState([
    {
      addedDate: "2023-03-06T12:27:58.578Z",
      category: {
        categoryId: "string",
        coverImage: "string",
        description: "string",
        title: "Best Deals",
      },
      description: "string",
      discountedPrice: 5000,
      live: true,
      price: 6000,
      productId: "string",
      productImageName: "string",
      quantity: 0,
      stock: true,
      title: "Surprise Me",
    },
    {
      addedDate: "2023-03-06T12:27:58.578Z",
      category: {
        categoryId: "string",
        coverImage: "string",
        description: "string",
        title: "Recommended",
      },
      description: "string",
      discountedPrice: 4099,
      live: true,
      price: 9000,
      productId: "string",
      productImageName: "string",
      quantity: 0,
      stock: true,
      title: "Gift",
    },
    {
      addedDate: "2023-03-06T12:27:58.578Z",
      category: {
        categoryId: "string",
        coverImage: "string",
        description: "string",
        title: "Recommended",
      },
      description: "string",
      discountedPrice: 3900,
      live: true,
      price: 7990,
      productId: "string",
      productImageName: "string",
      quantity: 0,
      stock: true,
      title: "New",
    },
  ]);

  return (
    <Base
      title="All You Need Is Here"
      description={
        "Welcome to ElectroStore, We provide high quality electronic items."
      }
      buttonEnabled={true}
      buttonText="Start Shopping "
      buttonType="primary"
      buttonLink="/store"
    >
      <div className="my-4">{trendingProducts(products)}</div>
      <div style={{ margin: "100px 0px" }}>
        {infoWithImageInRightSection(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RDoNi9m1CpUB94wAIQbWukDOh_80VTATj-dkmddCoRYeAxOnLJniGU6Xhj_GG_HkhBM&usqp=CAU",
          "We have this must have product",
          "See the latest products that we have from the link above and if you like it you can buy from our store, We promise to not disappoint you in our products quality and delivery."
        )}
      </div>
      <div style={{ margin: "100px 0px" }}>
        {infoWithImageInLeftSection(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPDADPPjDkrRtmh79M8SIQyqBXdnY_wQ8jg&usqp=CAU",
          "You are still here and reading this?",
          "Go hurry and see our product ranges. You can buy them from our store. Click on store on the top."
        )}
      </div>

      

      <div style={{ margin: "100px 0px" }}>
        {infoWithImageInRightSection(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRWsjE9lfCTka-_2Gvxqk2p5Nt3DRv4Hfkw&usqp=CAU",
          "Still Here...",
          "Don't know what to do? You can still try our products. You can find them in our store. Click on store on the top."
        )}

        <br /><br /><br />
        <div className="my-4">{contactForm()}</div>
      </div>
    </Base>
  );
}
export default Index;
