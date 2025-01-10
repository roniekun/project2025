import React from "react";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface UserAvatarProps{
  className? : string,
}

const UserAvatar: React.FC<UserAvatarProps> = ({className}) => {
    
  const tempsrc =
    "https://drive.google.com/uc?id=1FRIMQ8JYalF2J5xmZVznSB_3-8VDeD0V";
  return (
    <Link
      href="/user"
      className={twMerge(className, "md:flex relative flex overflow-hidden items-center justify-center  rounded-full cursor-pointer")
      }>
      <Image objectFit="cover" layout="fill" alt="userprofile" src={tempsrc} />
    </Link>
  );
};

export default UserAvatar;
