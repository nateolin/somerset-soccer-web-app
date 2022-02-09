import footOnBall from "../assets/background-pic-foot-on-ball.jpg";

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold">About</h2>
      <div className="relative grid grid-cols-2">
        <div className="pt-4 pr-8">
          <p className="text-xl pb-4">
            Somerset Soccer Club has been serving members in Western Wisconsin
            since 2001. It was founded to help promote sportsmanship and
            community in the Somerset area. We are an independent, volunteer,
            non-profit organization serving 4-18 year old boys and girls. The
            organization is run completely by volunteer support.
          </p>
          <p className="text-xl pt-4">
            Our mission is to provide continuous improvement of soccer
            knowledge, skills, and sportsmanship in an enjoyable environment,
            while promoting the growth of soccer and instilling a lifelong
            passion for the sport. We will challenge players to develop their
            abilities to a higher level in preparation of entering the high
            school program. You can reach us at{" "}
            <span>somersetsoccer@gmail.com</span>
          </p>
        </div>
        <div className="pl-8">
          <img
            className="rounded-lg w-96"
            src={footOnBall}
            alt="foot wearing cleat on soccer ball"
          ></img>
        </div>
      </div>
    </div>
  );
}
