import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Studies", 7],
  ["Eat", 1],
  ["Work", 7],
  ["Sleep", 8],
  ["Relax", 1]
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

function App() {

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"600px"}
      />
    </div>
  );
}


export default App;
