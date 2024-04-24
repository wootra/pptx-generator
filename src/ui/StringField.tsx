import React, { useCallback, useRef } from "react";

const StringField = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const onChangeCb: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  if (typeof value === "object") {
    console.log("it is not string:", label, value);
  }
  return (
    <div className="flex flex-row gap-2 px-2">
      <label>{label}</label>
      <input
        className="flex-grow"
        ref={ref}
        defaultValue={value}
        onChange={onChangeCb}
      />
    </div>
  );
};

export default StringField;
