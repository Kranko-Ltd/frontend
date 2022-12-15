import React from "react";
import ProductItem from "./ProductItem";
import { useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BiListUl } from "react-icons/bi";
const ProductsPage = () => {
  const [all, setAll] = useState(true);
  const [cart, setCart] = useState(false);
  const [purchased, setPurchased] = useState(false);
  return (
    <div className="bg-white rounded-md p-6">
      <p className="text-2xl text-primary font-bold">Products</p>
      <div className="flex justify-between mt-5">
        <div className="flex ">
          {all ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32 bg-white text-secondary  shadow-inner"
              onClick={() => {
                setCart(false);
                setPurchased(false);
                setAll(true);
              }}
            >
              All
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32 hover:bg-white hover:text-secondary hover shadow-lg"
              onClick={() => {
                setCart(false);
                setPurchased(false);
                setAll(true);
              }}
            >
              All
            </button>
          )}

          {cart ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32  bg-white text-secondary hover shadow-inner "
              onClick={() => {
                setCart(true);
                setPurchased(false);
                setAll(false);
              }}
            >
              Cart
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32  hover:bg-white hover:text-secondary hover shadow-lg "
              onClick={() => {
                setCart(true);
                setPurchased(false);
                setAll(false);
              }}
            >
              Cart
            </button>
          )}
          {purchased ? (
            <button
              className=" bg-opacity-25 text-center  py-1  rounded w-32  bg-white text-secondary hover shadow-lg"
              onClick={() => {
                setCart(false);
                setPurchased(true);
                setAll(false);
              }}
            >
              Purchased
            </button>
          ) : (
            <button
              className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded w-32  hover:bg-white hover:text-secondary hover shadow-lg"
              onClick={() => {
                setCart(false);
                setPurchased(true);
                setAll(false);
              }}
            >
              Purchased
            </button>
          )}
        </div>
        <div className="flex pr-5">
          <button className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded px-5  hover:bg-white hover:text-secondary hover shadow-lg">
            <BiListUl />
          </button>
          <button className="bg-secondary bg-opacity-25 text-center  py-1 text-grey-900 rounded px-5  hover:bg-white hover:text-secondary hover shadow-lg">
            <RiDashboardFill />
          </button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductsPage;
