import { FaRegHeart, FaHeart, FaDownload, FaRegEye } from "react-icons/fa";
import { UseGlobalContext } from "../hooks/UseGlobalContext";
import { NavLink } from "react-router-dom";

const ImageCard = ({ image, added }) => {
  const { likedImages, dispatch } = UseGlobalContext();
  const { links, urls, user, alt_description } = image;

  const addLikedImage = (image) => {
    console.log(image);

    const allReadyAdded = likedImages.some((img) => {
      return img.id == image.id;
    });

    if (!allReadyAdded) {
      dispatch({ type: "LIKE", payload: image });
    } else {
      dispatch({ type: "UNLIKE", payload: image.id });
    }
  };
  return (
    <div className="relative group">
      <img src={urls.full} alt={alt_description} className="rounded-lg" />
      <div className="absolute z-50 top-0 w-full h-full opacity-0 group-hover:opacity-100  transition-all duration-300 bg-[#00000081] rounded-lg"></div>
      <span className="absolute z-50 top-2 right-2 flex gap-2 ">
        {!added && (
          <button
            onClick={() => addLikedImage(image)}
            className="btn btn-ghost text-xl  invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300"
          >
            <FaRegHeart className="text-white" />
          </button>
        )}
        {added && (
          <button
            onClick={() => addLikedImage(image)}
            className="btn btn-ghost text-xl invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300"
          >
            <FaHeart className="text-white" />
          </button>
        )}
        <a
          target="_blank"
          rel="nofollow"
          download
          href={links.download + "&force=true"}
          className="btn btn-ghost  text-xl invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300"
        >
          <FaDownload className="text-white" />
        </a>
      </span>
      <span className="absolute z-50 top-2 left-2 flex gap-2 ">
        <NavLink to="/imageinfo">
          <button className="btn btn-ghost text-xl invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <FaRegEye className="text-white" />
          </button>
        </NavLink>
      </span>
      <span className="absolute z-50 bottom-2 left-3 flex gap-2 items-center opacity-0 group-hover:opacity-100  transition-all duration-300 ">
        <img
          src={user.profile_image.large}
          alt={user.bio}
          className="w-10 rounded-full"
        />
        <p className="text-white">{user.name}</p>
      </span>
    </div>
  );
};

export default ImageCard;
