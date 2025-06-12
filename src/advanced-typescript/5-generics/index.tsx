import React from "react";

// Define the generic props
type SelectProps<T> = {
  value: T;
  options: T[];
  onChange: (val: T) => void;
};

// Create the generic Select component
function Select<T>({ value, options, onChange }: SelectProps<T>) {
  return (
    <select
      value={value as string}
      onChange={(e) => {
        const selected = options.find((opt) => String(opt) === e.target.value);
        if (selected !== undefined) onChange(selected);
      }}
    >
      {options.map((option, idx) => (
        <option key={idx} value={String(option)}>
          {String(option)}
        </option>
      ))}
    </select>
  );
}

export default Select;
