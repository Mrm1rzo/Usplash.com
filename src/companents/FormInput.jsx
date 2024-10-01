// import React-icons
import { FaSearch } from "react-icons/fa";

const FormInput = ({ type, name, placeholder }) => {
  return (
    <label className="input input-bordered flex items-center gap-2 w-full  input-sm md:input-md">
      <input
        type={type}
        className="grow "
        placeholder={placeholder}
        name={name}
      />
      <FaSearch />
    </label>
  );
};

export default FormInput;
