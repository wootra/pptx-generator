import React, { InputHTMLAttributes, useCallback, useRef } from 'react';

const ColorField = ({
    label,
    value,
    onChange,
}: {
    label?: string;
    value: string;
    onChange?: (val: string) => void;
}) => {
    const ref = useRef<HTMLInputElement>(null);
    const onChangeCb: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        e => {
            if (e.target.value.length > 0) {
                onChange?.(e.target.value.replace('#', ''));
            }
        },
        [onChange]
    );

    const disabledProps: InputHTMLAttributes<HTMLInputElement> = onChange
        ? { onChange: onChangeCb }
        : { disabled: true };
    return (
        <div className='flex flex-row gap-2 px-2'>
            {label && <label>{label}</label>}
            <input
                className='flex-grow'
                ref={ref}
                defaultValue={`#${value}`}
                type='color'
                {...disabledProps}
            />
        </div>
    );
};

export default ColorField;
