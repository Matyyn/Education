import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class Example extends PureComponent {
  render() {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <div>
          <div style={{ justifyContent: "space-between" }} className="flex">
            <p className="font-bold text-gray-500 pt-4 pl-4">Countries</p>
            <FormControl
              sx={{ m: 1, minWidth: 70, position: "absolute", right: 40 }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">Weekly</InputLabel>
              <Select
                sx={{ height: 20 }}
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={"weekly"}
                label="Weekly"
              >
                <MenuItem value={"Weekly"}>Weekly</MenuItem>
                <MenuItem value={"Day"}>Day</MenuItem>
                <MenuItem value={"Montly"}>Monthly</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
            </PieChart>
          </div>
        </div>
      </div>
    );
  }
}
