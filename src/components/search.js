import React from "react";
import { getWeather } from "./Api";
import { useState } from 'react';

function Search() {  
    const [weather, setWeather] = useState("cari")
    const getInput = async (input) => {
        if(input.length > 3){
        // const data = await getWeather(input) 
        // console.log(data);
        // setWeather(data)
        setWeather ("berhasil")  
        }
        else
        setWeather ("Tidak ditemukan")
    }
    return (
        <div className="search-container m-auto text flex w-80 h-11">
        <input 
        className="w-full m-1 rounded-md pl-2 font-sans bg-slate-900 outline-8 text-white focus:outline-teal-300" 
        type="text" 
        placeholder="Cari Lokasi ..."
        // onChange={({target})=>getInput(target.value)} />
        
        onChange={(e)=>getInput(e.target.value)} />
        </div>

    );
}
export default Search;