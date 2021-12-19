import React from 'react';
import { useMoralis } from "react-moralis";
import Image from "next/image";


function Avatar({ username, logoutOnPress }) {

const { user, logout } = useMoralis();
                                        //backticks used - string interpolation- appending text in the end of url
    return (
    <Image 
    className="rounded-full bg-black cursor-pointer hover:placeholder-opacity-75"
    src={`https://avatars.dicebear.com/api/pixel-art/${ username || user.get("username")}.svg`}
    layout="fill"
    onClick={() => logoutOnPress && logout()}    //if logoutonpress is true then logout
    />   
    );
}

export default Avatar;
