import Head from "next/head";
import Layout from "../components/Layout";
import MainButton from "../components/micro/MainButton";
import { supabase } from "../utils/initSupabase";


const index = () => {
    return (
        <Layout>
            <Head>
                <title>Ryax Archives</title>
            </Head>
            <h1>Ryax Archives</h1>
            <MainButton onClick={() => supabase.auth.signOut()}>Sign Out</MainButton>
        </Layout>
    )
};

export default index;