import Head from "next/head";
import { Stick } from "../assets/svgLib";
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
                <div className="mx-6">
                    <div className="flex flex-row">
                        <div className="flex rounded-full w-14 h-14 sm:w-16 sm:h-16 bg-dark-backgroundSecondary justify-center content-center">
                            <Stick className="mt-3" />
                        </div>
                        <h2 className="text-dark-textSecondary text-2xl self-center ml-4">Max vs Wild</h2>
                    </div>
                </div>
            </div>
        </Auth>
    )
};

export default index;