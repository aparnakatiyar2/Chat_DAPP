import Head from 'next/head';
import Login from "../components/Login";
import { useMoralis } from "react-moralis";   {/*moralis hook*/}
import Header from "../components/Header";

export default function Home() {

  const { isAuthenticated, logout } = useMoralis();          {/*moralis handles the authentication portion*/}


  if (!isAuthenticated) return <Login />;
  
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head >
        <title>metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
         
         <Header />
         {/*messages*/}
      </div>
         
      
      <button onClick={logout}>Logout</button>

      </div>
  );
}