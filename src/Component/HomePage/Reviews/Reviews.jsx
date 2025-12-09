import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Amazing service! I got my microloan quickly.",
  },
  {
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Fast approval and excellent support!",
  },
  {
    name: "Michael Lee",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    text: "Very reliable microloan service.",
  },
  {
    name: "Sara White",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Smooth process, highly recommend!",
  },
  {
    name: "David Brown",
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "Quick and easy application.",
  },
];

const Reviews = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Customer Reviews
        </h2>
        <p className="text-gray-600 mb-12">
          Hear what our customers say about our microloan services.
        </p>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={30}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 ${
                    isActive ? "scale-105" : "scale-90 opacity-70"
                  }`}
                >
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-indigo-500"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {review.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{review.text}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
