const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "TokenMaster"
  const SYMBOL = "TM"

  // Deploy contract
  const TokenMaster = await ethers.getContractFactory("TokenMaster")
  const tokenMaster = await TokenMaster.deploy(NAME, SYMBOL)
  await tokenMaster.deployed()

  console.log(`Deployed TokenMaster Contract at: ${tokenMaster.address}\n`)

  // List 6 events
  const occasions = [
    {
      name: "Khabib",
      cost: tokens(3),
      tickets: 0,
      date: "April 2",
      time: "2:00PM EST",
      location: "Miami-Dade Arena - Miami, FL"
    },
    {
      name: "Khabib",
      cost: tokens(0),
      tickets: 0,
      date: "April 20",
      time: "1:00PM EST",
      location: "Santorini, Greece"
    },
    {
      name: "Khabib",
      cost: tokens(50),
      tickets: 0,
      date: "May 5",
      time: "6:00PM EST",
      location: "Milan, Italy"
    },
    {
      name: "Khabib",
      cost: tokens(100),
      tickets: 0,
      date: "May 25",
      time: "8:00PM EST",
      location: "Berlin, Germany"
    },
    {
      name: "Pewdiepie",
      cost: tokens(1),
      tickets: 125,
      date: "Jun 2",
      time: "1:00PM JST",
      location: "Tokyo, Japan"
    },
    {
      name: "Akon",
      cost: tokens(0.25),
      tickets: 200,
      date: "Jun 9",
      time: "10:00AM TRT",
      location: "Istanbul, Turkey"
    },
    {
      name: "Akon",
      cost: tokens(0.25),
      tickets: 200,
      date: "Jun 20",
      time: "5:00PM TRT",
      location: "Ankara, Istanbul"
    },
    {
      name: "Justin",
      cost: tokens(5),
      tickets: 0,
      date: "Jun 11",
      time: "2:30PM CST",
      location: "American Airlines Center - Dallas, TX"
    },
    {
      name: "Justin",
      cost: tokens(2),
      tickets: 40,
      date: "Jun 11",
      time: "2:30PM CST",
      location: "Sydney, Australia"
    },
    {
      name: "Justin",
      cost: tokens(5),
      tickets: 100,
      date: "Jun 11",
      time: "2:30PM CST",
      location: "Delhi, India"
    },
    {
      name: "Jimmy",
      cost: tokens(1.5),
      tickets: 125,
      date: "Jun 23",
      time: "11:00AM EST",
      location: "Toronto, Canada"
    }
  ]

  for (var i = 0; i < 12; i++) {
    const transaction = await tokenMaster.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});