import React from "react";
import {
  HashWrapper,
  HashContainer,
  HashContent,
  HashBtn,
  HashBody,
  HashHead,
  HashTable,
  HeadItem,
  BodyItem,
  TableContent,
} from "./style";
// import axios from "axios";
// import crypto from 'crypto';


const hashHeadData = [
  "Model",
  "Release",
  "Hashrate",
  "Electricity Efficiency",
  "Efficiency",
  "Daily Revenue",
  "Daily Profit",
];
const bodyData = [
  "Antminer S19K Pro",
  "Apr 2023",
  "136 TH/s",
  "3264 W",
  "24.00 W/TH",
  " $11.30/day",
  " $6.60/day",
];

// const apiKey = process.env.API_KEY;
// const secretKey: string = process.env.SECRET_KEY || "";
// const timestamp = Date.now();

// interface MiningData {
//   id: number;
//   symbol: string;
//   amount: number;
//   createTime: number;
// }


const Hashrate = () => {

  //   const queryString =
  //     "userName=exampleUser&startDate=2022-01-01&endDate=2022-02-01";
  //   const signature = crypto
  //     .createHmac("sha256", secretKey)
  //     .update(queryString + timestamp)
  //     .digest("hex");

  //   // construct the request config object
  //   const requestConfig = {
  //     url: `https://api.binance.com/sapi/v1/mining/statistics/user/list?${queryString}&timestamp=${timestamp}&signature=${signature}`,
  //     headers: {
  //       "X-MBX-APIKEY": apiKey,
  //     },
  //   };

  // axios
  //   .get(requestConfig.url, { headers: requestConfig.headers })
  //   .then(res => {
  //     console.log(`Request returned status code ${res.status}`);
  //     console.log(`Response body:`, res.data);
  //   })
  //   .catch(err => {
  //     console.error(`Error making request: ${err.message}`);
  //   });

  // const [miningData, setMiningData] = useState<MiningData[]>([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get('https://api.binance.com/fapi/v1/mining/payment/list');
  //     setMiningData(response.data);
  //     console.log(response.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <HashWrapper>
      <HashContainer>
        <HashContent>
          <h1>NFT Hashrate Distribution</h1>
          <HashBtn>View All Pools</HashBtn>
        </HashContent>
        <TableContent className="topbar">
          <HashTable>
            <HashHead>
              {hashHeadData.map((item, key) => (
                <HeadItem key={key}>{item}</HeadItem>
              ))}
            </HashHead>
            <HashBody>
              {bodyData.map((item, key) => (
                <BodyItem key={key}>{item}</BodyItem>
              ))}
            </HashBody>
          </HashTable>
        </TableContent>
      </HashContainer>
    </HashWrapper>
  );
};

export default Hashrate;
