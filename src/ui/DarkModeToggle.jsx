import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <MdOutlineWbSunny /> : <IoMoonOutline />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
