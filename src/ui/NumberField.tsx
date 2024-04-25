import React, {
    InputHTMLAttributes,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
} from 'react';

const NumberField = ({
    label,
    value,
    onChange,
    unit,
}: {
    label?: string;
    value: number;
    onChange?: (val: number) => void;
    unit?: ReactNode;
}) => {
    const ref = useRef<HTMLInputElement>(null);
    const valRef = useRef<number>(value);
    useEffect(() => {
        if (ref.current) {
            ref.current.value = `${value}`;
        }
    }, [value]);
    const onChangeCb: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        e => {
            valRef.current = e.target.value.length
                ? parseFloat(e.target.value)
                : 0;
            if (e.target.value.length > 0) {
                onChange?.(valRef.current);
            }
        },
        [onChange]
    );

    const onBlurCb: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        e => {
            if (e.target.value.length == 0) {
                onChange?.(0);
                valRef.current = 0;
            }
            onChange?.(valRef.current);
            if (ref.current) {
                ref.current.value = `${valRef.current}`;
            }
        },
        [onChange]
    );
    const disabledProps: InputHTMLAttributes<HTMLInputElement> = onChange
        ? { onChange: onChangeCb, onBlur: onBlurCb }
        : { disabled: true };
    return (
        <div className='flex flex-row gap-2 px-2'>
            {label && <label>{label}</label>}
            <input
                className='flex-grow'
                ref={ref}
                defaultValue={value}
                type='number'
                minLength={0.01}
                {...disabledProps}
            />
            {unit}
        </div>
    );
};

export default NumberField;
