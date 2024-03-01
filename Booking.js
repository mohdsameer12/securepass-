import { useEffect, useState } from "react";
import { ethers } from "ethers";
import Navigation from "../components/Navigation";
import Sort from "../components/Sort";
import Card from "../components/Card";
import SeatChart from "../components/SeatChart";
import TokenMaster from "../abis/TokenMaster.json";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import config from "../config.json";
import image from "../assets/Akon.jpg";

function Booking() {
  const { selectedOccasion } = useParams();
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

    for (let i = 1; i <= totalOccasions; i++) {
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
  // const imagePath = `../assets/${selectedOccasion}.jpg`; // Assuming the image extension is .jpg

  // // Define the inline style object
  // const headerStyle = {
  //   backgroundImage: `url(${imagePath})`, // Dynamically set the background image
  // };
  // console.log(imagePath)

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const importImage = async () => {
      try {
        // Dynamically import the image based on selectedOccasion
        const imageModule = await import(`../assets/${selectedOccasion}.jpg`);
        setSelectedImage(imageModule.default);
        console.log(imageModule.default)
      } catch (error) {
        console.error("Error importing image:", error);
      }
    };

    importImage();
    

    // Cleanup function
    return () => {
      setSelectedImage(null); // Reset selected image when component unmounts
    };
  }, [selectedOccasion]);

  const headerStyle = {
    backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
  };

  return (
    <div>
      <header style={headerStyle} className=""> 
        <Navigation account={account} setAccount={setAccount} />
        <h2 className="header__title px-40">
          <strong>{selectedOccasion}</strong> 
        </h2>
      </header>

      {/* <Sort /> */}

      <div className="cards">
        {occasions
          .filter((occasion) => occasion.name === selectedOccasion)
          .map((occasion, index) => (
            <Card
              occasion={occasion}
              id={index + 1}
              tokenMaster={tokenMaster}
              provider={provider}
              account={account}
              toggle={toggle}
              setToggle={setToggle}
              setOccasion={setOccasion}
              key={index}
            />
          ))}
      </div>

      {toggle && (
        <SeatChart
          occasion={occasion}
          tokenMaster={tokenMaster}
          provider={provider}
          setToggle={setToggle}
        />
      )}
    </div>
  );
}

export default Booking;
