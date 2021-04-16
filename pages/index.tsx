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
                    <div className="w-5/6 mx-auto border-l-4 border-light-backgroundSecondary dark:border-dark-backgroundSecondary">
                        <div className="flex flex-col group">
                            <div className="w-11/12 mx-auto my-3 bg-dark-backgroundSecondary h-32 rounded-xl"></div>
                            <h3 className="text-light-textMain dark:text-dark-textMain text-xl w-11/12 mx-5">Max Vs. Wild Part 1: Thirst For Adventure</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Auth>
    )
};

export default index;