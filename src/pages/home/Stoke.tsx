import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  StokeWrapper,
  StokeContainer,
  StokeCard,
  StokeContent,
  StokeTitle,
  StokeDesc,
  // StokeView,
  Content,
  StokeChart,
} from "./style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Stoke = () => {
  return (
    <StokeWrapper>
      <StokeContainer>
        <StokeCard>
          <StokeContent>
            <Content>
              <StokeTitle>Bluewheel Mining - Hashrate</StokeTitle>
              <StokeDesc>
                This Bitcoin Mining pool displays latest block & total hashrate
                of Bluewheel Mining operations
              </StokeDesc>
            </Content>
            {/* <StokeView>View</StokeView> */}
          </StokeContent>
          <StokeChart>
            <Line options={options} data={data} />
          </StokeChart>
        </StokeCard>
        <StokeCard>
          <StokeContent>
            <Content>
              <StokeTitle>Bluewheel Mining NFT - Hashrate</StokeTitle>
              <StokeDesc>
                This Bitcoin Mining pool displays latest block & total hashrate
                of Bluewheel Mining NFT Holders
              </StokeDesc>
            </Content>
            {/* <StokeView>View</StokeView> */}
          </StokeContent>
          <StokeChart>
            <Line options={options} data={data} />
          </StokeChart>
        </StokeCard>
      </StokeContainer>
    </StokeWrapper>
  );
};

export default Stoke;
