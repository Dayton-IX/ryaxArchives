import { OpenLock } from "../assets/svgLib"


const NavBar = () => {
    return (
        <nav className="flex flex-row items-end w-full mx-auto py-4 border-light-backgroundSecondary dark:border-dark-backgroundSecondary border-b-2 mb-5">
            <OpenLock className="mx-4 sm:ml-8 sm:mr-2" />
            <h1 className="hidden sm:flex text-light-textMain dark:text-dark-textMain text-3xl">Ryax Archives</h1>
        </nav>    
    )
}

export default NavBar;