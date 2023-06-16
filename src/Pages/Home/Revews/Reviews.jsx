import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://educam-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  console.log(reviews);
  return (
    <div className="text-center my-20 md:mx-44">
      <p className="mx-auto text-blue-400 text-2xl mb-16">Students's Review</p>
      <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide className="text-center" key={review._id}>
              <div className="space-y-5">
                <p className="md:mx-44">{review.review}</p>
                <p className="text-orange-400">Name: {review.name}</p>
                <p className="text-orange-400">Email: {review.email}</p>
                <Rating
                className="mx-auto mb-2 flex"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Reviews;
