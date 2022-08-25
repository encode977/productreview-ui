import React from "react";
import star from "../img/star.png";
import star2 from "../img/star2.png";

function ProductReview() {
  return (
    <section className="my-6">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white rounded-md shadow-md h-fit w-2/5 p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-black">Overall rating</h2>
            <div className="space-x-2">
              <div className="border-2 border-gray rounded-sm inline-block p-1">
                <img className="h-6" src={star} alt="star" />
              </div>
              <div className="border-2 border-gray rounded-sm inline-block p-1">
                <img className="h-6" src={star} alt="star" />
              </div>
              <div className="border-2 border-gray rounded-sm inline-block p-1">
                <img className="h-6" src={star} alt="star" />
              </div>
              <div className="border-2 border-gray rounded-sm inline-block p-1">
                <img className="h-6" src={star} alt="star" />
              </div>
              <div className="border-2 border-gray rounded-sm inline-block p-1">
                <img className="h-6" src={star2} alt="star" />
              </div>
            </div>
            <p className="text-base">Click to rate</p>
          </div>
          <div>
            <h3 className="text-base font-medium">Review title</h3>
            <div className="border-2 border-gray rounded-md mt-1">
              <input
                className="w-full text-sm p-3 outline-none"
                type="text"
                placeholder="Example:Easy to use"
              />
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium">
              Would you recommend this product to a friend?
            </h3>
            <div className="mt-1 flex space-x-12">
              <div className="space-x-2 flex items-center">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label className="text-base" for="html">
                  Yes
                </label>
              </div>
              <div className="space-x-2 flex items-center">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label className="text-base" for="html">
                  No
                </label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium">Product review</h3>
            <div className="border-2 mt-1 border-gray rounded-md">
              <textarea
                className="w-full text-sm p-2 outline-none"
                type="text"
                placeholder="Example:Easy to use"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <h3 className="text-base font-medium">Nickname</h3>
              <div className="border-2  border-gray rounded-md mt-1">
                <input
                  className="text-sm p-3 outline-none"
                  type="text"
                  placeholder="lokey6475"
                />
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-base font-medium">Email address</h3>
              <div className="border-2  border-gray rounded-md mt-1">
                <input
                  className=" text-sm p-3 outline-none"
                  type="text"
                  placeholder="lokidangio@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className="space-x-2 flex items-center">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label className="text-base" for="html">
              I accept the terms and conditions
            </label>
          </div>

          <div>
            <p className="text-base">
              You will be able to receive emails in connection with this review
              (eg if others comment on your review). All emails contain the
              option to unsubscribe. We can use the text and star rating from
              your review in other marketing.
            </p>
          </div>
          <div>
            <button className="bg-blue p-4 rounded-md text-sm text-white">
              Submit product review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductReview;
