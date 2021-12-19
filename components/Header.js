import React from 'react';
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import Image from "next/image";


function Header() {

    const { user } = useMoralis();

    return (
        <div>
            <div className="">
                {/* <div className="realtive h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-full" src="https://links.papareact.com/3pi" />
                </div> */}

                <div>
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                    <Avatar logoutOnPress />                          {/* logoutonpress is going to be boolean so we dont have to push anything */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;
