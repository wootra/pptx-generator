import React, { ReactNode, useCallback } from 'react';

function readFile(
    evt: React.ChangeEvent<HTMLInputElement>,
    onBase64Converted: (data: string) => void
) {
    const f = evt.target.files?.[0];

    if (f) {
        if (/(jpe?g|png|gif)$/i.test(f.type)) {
            var r = new FileReader();
            r.onload = function (e) {
                var base64Img = e.target?.result as string;
                onBase64Converted(base64Img);
                // reference: https://gist.github.com/bachors/52fcf090d78ef0c7520d9d7c4df37789
            };
            r.readAsDataURL(f);
        } else {
            alert('Failed file type');
        }
    }
}
const ImageField = ({
    label,
    value,
    onChange,
}: {
    label?: ReactNode;
    value: string;
    onChange: (val: string) => void;
}) => {
    const onReadFile: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        e => {
            readFile(e, onChange);
        },
        [onChange]
    );
    if (typeof value === 'object') {
        console.error('it is not string:', label, value);
    }

    return (
        <div className='flex flex-row gap-2 px-2 relative'>
            {label && <label>{label}</label>}
            <input
                type='file'
                className='flex-grow flex-shrink'
                accept='.gif,.jpg,.jpeg,.png,.webp'
                onChange={onReadFile}
            />
            {value && <img src={value} className='w-8 h-8' />}
        </div>
    );
};

export default ImageField;
