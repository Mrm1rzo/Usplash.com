import { NavLink } from "react-router-dom";
import ImagaContainer from "../companents/ImagaContainer";
import ImageCard from "../companents/ImageCard";
import { UseGlobalContext } from "../hooks/UseGlobalContext";

const Like = () => {
  const { likedImages } = UseGlobalContext();

  if (likedImages.length == 0) {
    return (
      <div className="flex items-center justify-center flex-col gap-10 h-full py-10">
        <h1 className="">Sizning hali yoqtirgan rasmingiz yo'q</h1>

        <NavLink to="/">
          <button className="btn ">Go Home</button>
        </NavLink>
      </div>
    );
  }
  return (
    <div className="align-elements">
      {likedImages.length > 0 && (
        <ImagaContainer images={likedImages}></ImagaContainer>
      )}
    </div>
  );
};

export default Like;
