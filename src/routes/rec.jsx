export default function Rec() {
  return (
    <div className="relative mx-10vw">
      <div className="border-b">
        <h2 className="leading-tight text-4xl font-medium text-black pb-8">
          Rec Program
        </h2>
      </div>
      <div className="relative gap-x-4 md:grid-cols-8 lg:grid-cols-10 lg:gap-x-4 mx-auto max-w-7xl lg: mb-12 h-auto pt-24 lg:min-h-[40rem]">
        <div className="col-span-full lg:-mt-12 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
          <div className="flex flex-auto flex-col" style={{ opacity: 1 }}>
            <div style={{ opacity: 1, transform: "none" }}>
              <p className="leading-tight text-4xl text-medium text-black pb-6">
                Available for junior kindergarten through 5th grade boys and
                girls.
              </p>
              <p className="leading-tight text-2xl text-black pb-6">
                Somerset Soccer Club has been serving members in Western
                Wisconsin since 2001. It was founded to help promote
                sportsmanship and community in the Somerset area. We are an
                independent, volunteer, non-profit organization serving 4-18
                year old boys and girls. The organization is run completely by
                volunteer support.
              </p>
              <p className="leading-tight text-2xl text-black">
                Our mission is to provide continuous improvement of soccer
                knowledge, skills, and sportsmanship in an enjoyable
                environment, while promoting the growth of soccer and instilling
                a lifelong passion for the sport. We will challenge players to
                develop their abilities to a higher level in preparation of
                entering the high school program. You can reach us at{" "}
                <a
                  className="text-sky-600 underline"
                  href="mailto:somersetsoccer@gmail.com"
                >
                  somersetsoccer@gmail.com
                </a>
              </p>
            </div>
            <div
              className="mt-14 flex flex-col space-y-4"
              style={{ opacity: 1, transform: "none" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
