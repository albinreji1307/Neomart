const Newsletter = () => {
  return (
    <div className="px-2 md:px-2 py-12">

      <div className="bg-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">

  
        <div className="max-w-xxl">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-snug">
            Stay home & get your daily
            <br />
            needs from our shop
          </h2>

   
          <div className="flex flex-col sm:flex-row gap-2 mb-3">

            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-1 px-4 py-3 rounded-lg border outline-none"
            />

            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Subscribe now
            </button>

          </div>

          <p className="text-xs text-gray-500">
            I agree that my submitted data is being collected and stored.
          </p>

        </div>


        <div>

          <img
            src="https://pngimg.com/uploads/almond/almond_PNG51.png"
            alt="basket"
            className="w-[260px] md:w-[350px]"
          />

        </div>

      </div>

    </div>
  );
};

export default Newsletter;