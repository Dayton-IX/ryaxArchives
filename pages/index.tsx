import Layout from "../components/Layout";
import MainButton from "../components/micro/MainButton";
import { supabase } from "../utils/initSupabase";


const index = () => {
    return (
        <Layout>
            <h1>Ryax Archives</h1>
            <MainButton onClick={() => supabase.auth.signOut()}>Sign Out</MainButton>
        </Layout>
    )
};

export default index;