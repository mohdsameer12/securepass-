import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

// Components

import Sort from "../components/Sort";
import Card from "../components/Card";
import SeatChart from "../components/SeatChart";

// ABIs
import TokenMaster from "../abis/TokenMaster.json";

// Config
import config from "../config.json";

const Hero = () => {
  const [selectedOccasion, setSelectedOccasion] = useState(""); // Initialize selectedOccasion

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
    console.log(selectedOccasion);
  };

  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);

  const [tokenMaster, setTokenMaster] = useState(null);
  const [occasions, setOccasions] = useState([]);

  const [occasion, setOccasion] = useState({});
  const [toggle, setToggle] = useState(false);

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const network = await provider.getNetwork();
    const tokenMaster = new ethers.Contract(
      config[network.chainId].TokenMaster.address,
      TokenMaster,
      provider
    );
    setTokenMaster(tokenMaster);

    const totalOccasions = await tokenMaster.totalOccasions();
    const occasions = [];

    for (var i = 1; i <= totalOccasions; i++) {
      const occasion = await tokenMaster.getOccasion(i);
      occasions.push(occasion);
    }

    setOccasions(occasions);

    window.ethereum.on("accountsChanged", async () => {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = ethers.utils.getAddress(accounts[0]);
      setAccount(account);
    });
  };

  useEffect(() => {
    loadBlockchainData();
  }, []);

  

 

return (
  <section className="flex flex-col items-center justify-center h-screen text-gray-100">
  <div className="text-center">
    {/* Hero title */}
    <h1 className="text-3xl md:text-4xl lg:text-5xl  mb-8">
      <span className="font-regular">Dive into the Future of</span><span className="font-extrabold"> Event Booking</span>
    </h1>
    {/* Animated gradient text */}
    <p className="relative text-xl md:text-lg lg:text-lg mb-8">
      <span className="bg-clip-text font-light">
        Decentralized, Transparent, Empowering
      </span>
    </p>

    {/* Dropdown menu */}
    <div className="mb-4 w-[50vh] mx-auto">
      <select
        className="block w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
        id="occasion"
        onChange={handleOccasionChange}
      >
        <option value="">Select Artist</option>
        {[...new Set(occasions.map((occasion) => occasion.name))].map(
          (occasionName, index) => (
            <option key={index} value={occasionName}>
              {occasionName}
            </option>
          )
        )}
      </select>
    </div>

    {/* Search button */}
    <div>
      <Link
        to={`/Booking/${selectedOccasion}`}
        className="inline-block px-8 py-4 bg-blue-800 text-white rounded-md shadow-sm hover:bg-blue-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      >
        Search
      </Link>
    </div>
  </div>
</section>


);

};

export default Hero;
