import Head from "next/head";
import { Stick } from "../assets/svgLib";
import Auth from "../components/Auth";
import ThumbNail from "../components/home/ThumbNail";
import NavBar from "../components/NavBar";


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
                        <ThumbNail title="Max Vs. Wild Part 1: Thirst For Adventure" imgURL="placeholder" />
                    </div>
                </div>
            </div>
        </Auth>
    )
};

export default index;