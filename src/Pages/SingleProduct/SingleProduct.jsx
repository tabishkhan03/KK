import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context";
import ViewProduct from "../../Components/ViewProduct/ViewProduct";

const SingleProduct = () => {
  const { id } = useParams();
  const { products } = useContext(AppContext);
  return (
    <>
      <div style={{ color: "white" }}>
        {
          products.map((p) => {
            if (p.id === id) {
              return (
                <ViewProduct smimg1={p.smimg1} smimg2={p.smimg2} smimg3={p.smimg3} imgUrl={p.imgUrl} title={p.title} desc={p.desc} price={p.price} id={p.id} />
              )
            } else {
              return "";
            }
          })
        }
      </div>
    </>
  );
};

export default SingleProduct;
