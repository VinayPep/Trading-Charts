import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";

import useTradeData from "../../hooks/useTradeData"; // Import the custom hook
import CommonGrid from "./commonGrid";

const colors = [
  "#3B82F6",
  "#60A5FA",
  "#93C5FD",
  "#BFDBFE",
  "#2563EB",
  "#1D4ED8",
  "#1E40AF",
  "#1E3A8A"
];
const TradeValues = () => {
  const { data: tradeData, loading } = useTradeData();

  // Memoize sorted data to avoid unnecessary sorting on each render
  const sortedByTradeValue = useMemo(() => {
    return tradeData.sort((a, b) => b.AnnualTradeValue - a.AnnualTradeValue);
  }, [tradeData]);

  const sortedByYear = useMemo(() => {
    return tradeData.sort((a, b) => a.Year - b.Year);
  }, [tradeData]);

  const renderBarChart = () => (
    <BarChart data={sortedByTradeValue} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="ReporterISO3" />
      <YAxis tickFormatter={(value) => `$${(value / 1e9).toFixed(1)}B`} />
      <Tooltip formatter={(value) => `$${(value / 1e6).toFixed(2)}M`} />
      <Bar dataKey="AnnualTradeValue" fill="#3B82F6">
        {sortedByTradeValue.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );

  const renderPieChart = () => (
    <PieChart>
      <Pie
        data={sortedByTradeValue}
        dataKey="AnnualTradeValue"
        nameKey="ReporterName"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        label={({ ReporterISO3 }) => ReporterISO3}>
        {sortedByTradeValue.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => `$${(value / 1e6).toFixed(2)}M`} />
      <Legend />
    </PieChart>
  );

  const renderLineChart = () => (
    <LineChart data={sortedByYear} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Year" />
      <YAxis tickFormatter={(value) => `$${(value / 1e9).toFixed(1)}B`} />
      <Tooltip formatter={(value) => `$${(value / 1e6).toFixed(2)}M`} />
      <Legend />
      <Line
        type="monotone"
        dataKey="AnnualTradeValue"
        stroke="#3B82F6"
        strokeWidth={2}
        dot={{ fill: "#3B82F6" }}
      />
    </LineChart>
  );
  const gridData = useMemo(
    () => [
      { heading: "Top Trading Countries", renderChart: renderBarChart },
      { heading: "Trade Share Distribution", renderChart: renderPieChart },
      { heading: "Trade Value Trends", renderChart: renderLineChart },
      { heading: "Trade Value Trends", renderChart: renderLineChart },
      { heading: "Top Trading Countries", renderChart: renderBarChart },
      { heading: "Trade Share Distribution", renderChart: renderPieChart }
    ],
    [renderBarChart, renderPieChart, renderLineChart]
  );

  return (
    <div className="p-6 mt-14 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gridData.map((grid, index) => (
          <CommonGrid
            key={index}
            heading={grid.heading}
            renderChart={grid.renderChart}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default TradeValues;
