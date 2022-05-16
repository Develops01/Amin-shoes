import React from "react";
import PropTypes from 'prop-types';

function Counter({ onIncrement, onDecrement, onChange, value = 1 }) {
  return (
    <div className="flex my-4">
      <button
        className="px-3 py-1 rounded-full border-2 text-[#9B6F47] border-[#9B6F47]"
        onClick={() => onIncrement()}
      >
        +
      </button>
      <input type="number" className="w-14 text-center text-2xl" value={value} onChange={e=>onChange(e.target.value)} />
      <button
        className="px-3 py-1 rounded-full border-2 text-[#9B6F47] border-[#9B6F47]"
        onClick={() => onDecrement()}
      >
        -
      </button>
    </div>
  );
}

Counter.propTypes  = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Counter;
