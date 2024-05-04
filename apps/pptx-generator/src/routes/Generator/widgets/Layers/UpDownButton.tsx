import React from 'react';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import { useGeneratorUi } from '@/context/GeneratorUiContext';

const UpDownButton = ({
    id,
    className,
}: {
    id: number | null;
    className: string;
}) => {
    const { moveUp, moveDown } = useGeneratorUi();
    return (
        id && (
            <>
                <button
                    className='flex-grow-0'
                    onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                        moveUp(id);
                    }}
                >
                    <FaArrowCircleUp className={className} />
                </button>

                <button
                    className='flex-grow-0'
                    onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                        moveDown(id);
                    }}
                >
                    <FaArrowCircleDown className={className} />
                </button>
            </>
        )
    );
};

export default React.memo(UpDownButton);
