import pic from "../assets/background-pic-coaching.jpg";

const MainContent = () => {
  return (
    <div className="relative grid grid-cols-4 gap-x-4">
      <img className="rounded-lg w-96" src={pic} alt="pic" />
    </div>
  );
};

export default MainContent;
