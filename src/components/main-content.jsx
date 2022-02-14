import pic from "../assets/background-pic-coaching.jpg";

const MainContent = () => {
  return (
    <div className="relative grid grid-cols-4 gap-x-4 max-w-7xl mx-auto">
      <div className="col-span-full pt-6">
        <div className="flex flex-auto flex-col" style={{ opacity: 1 }}>
          <div style={{ opacity: 1, transform: "none" }}>
            <h2 className="leading-tight text-5xl text-black">
              Somerset Soccer Club
            </h2>
            <p className="leading-tight text-2xl text-black">
              Our mission is to provide continuous improvement of soccer
              knowledge, skills, and sportsmanship in an enjoyable environment,
              while promoting the growth of soccer and instilling a lifelong
              passion for the sport. We will challenge players to develop their
              abilities to a higher level in preparation of entering the high
              school program.
            </p>
          </div>
          <div
            className="mt-14 flex flex-col space-y-4"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="mr-auto flex flex-col gap-4">
              {/* <a
                className="group relative inline-flex text-lg font-medium focus:outline-none opacity-100 disabled:opacity-50 transition"
                href="/rec"
              >
                <div className="absolute inset-0 transform rounded-full opacity-100 transition disabled:opacity-50 bg-inverse"></div>
                <div className="relative flex h-full w-full items-center justify-center whitespace-nowrap text-inverse space-x-5 px-11 py-6">
                  Rec Program
                </div>
              </a>
              <a
                className="group relative inline-flex text-lg font-medium focus:outline-none opacity-100 disabled:opacity-50 transition"
                href="/competitive"
              >
                <div className="absolute inset-0 transform rounded-full opacity-100 transition disabled:opacity-50 border-secondary bg-primary border-2 group-hover:border-transparent group-focus:border-transparent"></div>
                <div className="relative flex h-full w-full items-center justify-center whitespace-nowrap text-primary space-x-5 px-11 py-6">
                  Competitive Program
                </div>
              </a> */}
              <a
                className="bg-red-700 hover:bg-red-800 text-white py-4 px-6 font-bold text-center rounded-xl"
                href="/rec"
              >
                Rec Program
              </a>
              <a
                className="bg-transparent hover:bg-red-800 text-red-700 font-semibold hover:text-white py-4 px-6 border border-red-800 hover:border-transparent rounded-xl"
                href="/competitive"
              >
                Competitive Program
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full mb-12 flex items-center justify-center">
        <img className="rounded-lg w-96" src={pic} alt="pic" />
      </div>
    </div>
  );
};

export default MainContent;
