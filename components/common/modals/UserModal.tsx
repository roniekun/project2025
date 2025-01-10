import UserAvatar from "../buttons/UserAvatar";
import MenuItems from "@/components/utils/MenuItems";
import LinkItems from "@/components/utils/LinkItems";

const UserModal = ({
  setIsHover,
}: {
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleMouseLeave = () => {
    setIsHover((prevState) => !prevState);
  };

  const itemsStyle = "font-medium"
  return (
    <div
      className="absolute right-0 top-[100%]"
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-black">
        <div className="shadow-md rounded-md p-4 justify-start items-start flex flex-col  mt-2 bg-white w-[300px] min-h-[200px] ">
          <div className="self-center flex-col flex py-4 items-center">
            <UserAvatar className="w-16 h-16 " />
            <p className=" capitalize font-bold ">Ronie Benitez</p>
            <p className="text-xs">roniebenitez01@gmail.com</p>
          </div>

          <div className="flex flex-col p-4 gap-2">
            <MenuItems className={itemsStyle} />
          </div>

          <div className="flex flex-col p-4 gap-2">
            <LinkItems className={itemsStyle} />
          </div>

          <button className="self-center p-4 text-sm">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
