import Head from "next/head";
import Auth from "../components/Auth";
import MainButton from "../components/micro/MainButton";
import NavBar from "../components/NavBar";
import { supabase } from "../utils/initSupabase";


const index = () => {
    return (
        <Auth>
            <Head>
                <title>Ryax Archives</title>
            </Head>

            <NavBar />
            <div className="max-w-7xl mx-auto">
                <MainButton onClick={() => supabase.auth.signOut()}>Sign Out</MainButton>
            </div>
        </Auth>
    )
};

export default index;