import Link from "next/link";
import { IoHandLeft, IoCodeSlash, IoBriefcase, IoBook } from "react-icons/io5";
export const Menu = () => {

    // const toggleMenuMobile = () => {

    // }

    return (
        <header className="p-4 border-zinc-900 flex items-center justify-between gap-3 sticky top-0 z-10">
            <nav className="flex justify-center md:justify-center flex-1">
                <ul className="flex gap-4 py-2 px-4 text-sm  rounded-full bg-background-secondary bg-opacity-50 backdrop-blur-sm ">
                    <li className="list-none hover:text-revolver-300 flex gap-1 items-center">
                        <IoHandLeft size={12}/>
                        <Link href="#">Sobre mí</Link>
                    </li>
                    <li className="list-none hover:text-revolver-300 flex gap-1 items-center">
                        <IoCodeSlash size={13}/>
                        <Link href="#">Experiencias</Link>
                    </li>
                    <li className="list-none hover:text-revolver-300 flex gap-1 items-center">
                        <IoBriefcase size={12} />
                        <Link href="#">Proyectos</Link>
                    </li>
                    <li className="list-none hover:text-revolver-300 flex gap-1 items-center">
                        <IoBook size={12} />
                        <Link href="#">Cursos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}