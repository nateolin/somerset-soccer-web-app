import soccerBallWithSunBehind from "../assets/soccer-ball-sun-behind.jpg";

const MainContent = () => {
  return (
    <div className="relative mx-10vw">
      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-10 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem]">
        <div className="col-span-full pt-6 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
          <div className="flex flex-auto flex-col" style={{ opacity: 1 }}>
            <div style={{ opacity: 1, transform: "none" }}>
              <h2 className="leading-tight text-7xl text-black pb-4 font-serif">
                Somerset Soccer Club
              </h2>
              <p className="leading-tight text-2xl text-black">
                Our mission is to provide continuous improvement of soccer
                knowledge, skills, and sportsmanship in an enjoyable
                environment, while promoting the growth of soccer and instilling
                a lifelong passion for the sport. We will challenge players to
                develop their abilities to a higher level in preparation of
                entering the high school program.
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
                  className="bg-red-700 hover:bg-red-800 text-white py-4 px-6 font-medium text-center rounded-xl"
                  href="/rec"
                >
                  Rec Program
                </a>
                <a
                  className="bg-transparent hover:bg-red-800 text-red-700 font-medium hover:text-white py-4 px-6 border border-red-800 hover:border-transparent rounded-xl"
                  href="/competitive"
                >
                  Competitive Program
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full mb-12 lg:mb-0 flex items-center justify-center lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0">
          <img
            className="h-auto w-full object-contain rounded-3xl max-h-75vh"
            src={soccerBallWithSunBehind}
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
