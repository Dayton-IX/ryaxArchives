import { useState } from "react";
import { OpenLock } from "../assets/svgLib"
import MainButton from "../components/micro/MainButton";
import { supabase } from "../utils/initSupabase";


const NavBar = () => {
    const [loading, setLoading] = useState(false);

    const onSignOut = async () => {
        setLoading(true);
        await supabase.auth.signOut();
        window.location.reload();
        setLoading(false);
    }

    return (
        <nav className="w-full border-light-backgroundSecondary dark:border-dark-backgroundSecondary border-b-2 mb-5">
            <div className="flex flex-row items-center justify-between w-11/12 mx-auto py-4">
                <div className="flex felx-row items-end">
                    <OpenLock className="mr-4 sm:mr-2" />
                    <h1 className="hidden sm:flex text-light-textMain dark:text-dark-textMain text-3xl">Ryax Archives</h1>
                </div>
                <MainButton className="flex flex-row" loading={loading} onClick={() => onSignOut()}>Sign Out</MainButton>
            </div>
        </nav>    
    )
}

export default NavBar;