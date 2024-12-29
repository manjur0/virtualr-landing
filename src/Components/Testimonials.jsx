import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 ">
        What people are saying.
      </h1>
      <div className="flex flex-wrap justify-center ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin ">
              <p> {testimonial.text}</p>
              <div className="flex mt-8 items-start ">
                <img
                  src={testimonial.image}
                  className="w-12 h-12 rounded-full border border-r-neutral-300 "
                  alt={testimonial.user}
                />
                <div className="ml-4">
                  <h2 className="">{testimonial.user}</h2>
                  <p className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;