import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ResponsiveContainer } from "recharts";
import Shimmer from "./shimmer";

const CommonGrid = ({ renderChart, heading, loading }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">{heading}</h3>
      <div className="h-64">
        {loading ? (
          <Shimmer />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

CommonGrid.propTypes = {
  renderChart: PropTypes.func,
  heading: PropTypes.string,
  loading: PropTypes.bool
};

export default CommonGrid;
