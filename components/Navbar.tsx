import Link from "next/link";
import { ThemeToggle } from "./Theme/Theme";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserAvatar } from "./Avatar/UserAvatar";
import { buttonVariants } from "./ui/button";
import { Grip, Settings } from "lucide-react";


function NavBar() {

  return (
    <div className=" h-16   w-full  border-b bg-slate-100 dark:bg-slate-950">
      <div className="mx-16 my-1 flex items-center h-full w-['75%']">
        <div className="flex items-center justify-between w-full h-full">
          <div className="flex items-center justify-start w-full h-full">
            {/* <img className="w-auto h-14" src="/RFID-72-Res-Logo-190x83.png"/> */}
            <Link href={"/"} className=" scroll-m-20 text-2xl font-semibold tracking-tight" >App</Link>
          </div>

          <div className="flex gap-3">
            {/* <Link href={''} className={` ${buttonVariants({ variant: "link" })}`}> <h1>Dashboard</h1></Link> */}
            <Link href={''} className={` ${buttonVariants({ variant: "secondary", size: 'icon' })}`}> <Grip size={20} />{" "}</Link>
            <Link href={''} className={` ${buttonVariants({ variant: "secondary", size: 'icon' })}`}> <Settings size={20} />{" "}</Link>
            <ThemeToggle />
            <UserAvatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;