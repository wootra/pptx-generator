import React, { ReactNode, useCallback } from 'react';

const StringField = ({
    label,
    value,
    onChange,
}: {
    label?: ReactNode;
    value: string;
    onChange: (val: string) => void;
}) => {
    const onChangeCb: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        e => {
            onChange(e.target.value);
        },
        [onChange]
    );
    if (typeof value === 'object') {
        console.error('it is not string:', label, value);
    }
    return (
        <div className='flex flex-row gap-2 px-2'>
            {label && <label>{label}</label>}
            <input
                className='flex-grow'
                defaultValue={value}
                onChange={onChangeCb}
            />
        </div>
    );
};

export default StringField;
