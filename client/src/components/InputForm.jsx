import React, { memo } from "react";

function InputForm({ label }) {
  return (
    <div>
      <label htmlFor="phone" className="text-xs">
        {label}
      </label>
      <input
        type="text"
        name="phone"
        id="phone"
        className="outline-none bg-[#eBf0fe] p-2 rounded-md w-full"
      />
    </div>
  );
}

export default memo(InputForm);
