import React, { useCallback, useRef } from "react";

const StringArea = ({
  label,
  value,
  rows = 3,
  onChange,
}: {
  label: string;
  value: string;
  rows?: number;
  onChange: (val: string) => void;
}) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const onChangeCb: React.ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );
  if (typeof value === "object") {
    console.error("it is not string:", label, value);
    return <div className="text-red-600">{label}:error</div>;
  }
  return (
    <div className="flex flex-row gap-2 px-2">
      <label>{label}</label>
      <textarea
        className="flex-grow"
        ref={ref}
        value={value}
        onChange={onChangeCb}
        rows={rows}
      />
    </div>
  );
};

export default StringArea;
