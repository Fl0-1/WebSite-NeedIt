import Router from "./Router.jsx";
import { useEffect, useState } from "react";
import Loader from "./components/Helper/Loader.jsx";
import Layout from "./components/Helper/Layout.jsx";
import "./assets/css/needit-custom.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });



    return (
        <>
            {loading && (
                <div className={`needit-loader ${loading ? 'active' : ''}`}>
                    <Loader />
                </div>
            )}
            <div className={`needit-visible ${loading === false ? 'active' : ''}`}>

                <Router />

            </div>

        </>
    );
}

export default App;
