export default function Rec() {
  return (
    <div className="relative mx-10vw">
      <div className="relative mx-auto max-w-7xl">
        <div className="border-b">
          <h2 className="leading-tight text-4xl font-medium text-black pb-8">
            Rec Program
          </h2>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl lg: mb-12 h-auto pt-24 lg:min-h-[40rem]">
        <div className="col-span-full lg:-mt-12 lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
          <div className="flex flex-auto flex-col" style={{ opacity: 1 }}>
            <div style={{ opacity: 1, transform: "none" }}>
              <h3 className="leading-tight text-3xl font-medium text-black pb-6">
                General Information
              </h3>
              <p className="leading-tight text-xl text-black pb-6">
                Available to Junior Kindergarten through 5th grade - boys and
                girls
              </p>
              <p className="leading-tight text-xl text-black pb-6">
                Our rec program is geared toward players who are interested in
                learning and developing their soccer skills. Our Rec program has
                two seasons - spring &amp; fall. Our format is broken into
                age-specific groups which will include skill development
                training sessions followed by scrimmages. Rec training sessions
                are held on Saturday mornings on Field #2 (HS Middle Field)
                located directly behind the District Learning Center.
              </p>
              <p className="leading-tight text-xl text-black pb-6">
                Our Rec Program is an in-house program with the primary purpose
                to encourage participation, skill development, and provide an
                introduction to the beautiful game of futbol.
              </p>
              <p className="leading-tight text-xl text-black pb-6">
                Recreation Seasons offered:
              </p>
              <ul className="list-disc px-12 leading-tight text-xl text-black pb-6">
                <li>Five - six weeks in the Spring on Saturday mornings</li>
                <li>Five - six weeks in the Fall on Saturday mornings</li>
              </ul>
              <h3 className="leading-tight text-3xl font-medium text-black pt-12 pb-6">
                Detailed Information
              </h3>
              <h4 className="leading-tight text-2xl pb-4">
                Junior Kindergarten/Kindergarten (U6)
              </h4>
              <ul className="list-disc px-12 leading-tight text-xl text-black pb-12">
                <li>Session runs from 10:00 a.m. to 11:00 a.m. on Saturday</li>
                <li>
                  This age group uses a size 3 soccer ball (provided with
                  registration) and plays 4 versus 4 (No Goalkeepers)
                </li>
                <li>
                  Players should wear their new t-shirt and also bring their new
                  ball with them each Saturday. Scrimmage vests will be provided
                  when scrimmaging
                </li>
                {/* <li>Goals will be six-foot “Pugg” goal</li> */}
              </ul>
              <h4 className="leading-tight text-2xl pb-4">
                1st Grade/2nd Grade (U8)
              </h4>
              <ul className="list-disc px-12 leading-tight text-xl text-black pb-12">
                <li> Session runs from 9:15 a.m. to 10:15 a.m. on Saturday</li>
                <li>
                  This age group uses a size 4 soccer ball (provided with
                  registration) and plays with 6-8 players per team (No
                  Goalkeepers)
                </li>
                <li>
                  Players should wear their new t-shirt and also bring their new
                  ball with them each Saturday. Scrimmage vests will be provided
                  when scrimmaging
                </li>
                {/* <li>Goal size is 4 feet high x 6 feet wide x 2 feet deep</li> */}
              </ul>
              <h4 className="leading-tight text-2xl pb-4">
                3rd Grade/4th Grade/5th Grade (U11)
              </h4>
              <ul className="list-disc px-12 leading-tight text-xl text-black">
                <li>Session runs from 8:30 a.m. to 9:30 a.m. on Saturday</li>
                <li>
                  This age group uses a size 4 soccer ball (provided with
                  registration) and plays with 6-8 players per team
                </li>
                <li>
                  Players should wear their new t-shirt and also bring their new
                  ball with them each Saturday. Scrimmage vests will be provided
                  when scrimmaging
                </li>
                {/* <li> Goal size is 7 feet high by 21 feet wide</li> */}
              </ul>
            </div>
            {/* <div
              className="mt-14 flex flex-col space-y-4"
              style={{ opacity: 1, transform: "none" }}
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
