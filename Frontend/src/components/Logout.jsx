import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleOnClick = () => {
    try {
      if (user) {
        setUser(null);
        localStorage.removeItem("User");
        toast.success("Logout Successful");
        navigate("/");
      }
    } catch (error) {
      toast.error("Error logging out");
    }
  };
  return (
    <button
      onClick={handleOnClick}
      className="
          text-white 
          bg-[#F09C20] 
          hover:bg-[#d88a1a] 
          font-bold 
          py-1.5
          px-4
          rounded-2xl 
          cursor-pointer
        "
    >
      Logout
    </button>
  );
};

export default Logout;
