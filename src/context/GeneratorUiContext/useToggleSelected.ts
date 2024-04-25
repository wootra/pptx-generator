import { useCallback, useState } from 'react';

export const useToggleSelected = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const unselect = useCallback(() => {
        setSelected(null);
    }, [setSelected]);
    const toggleSelected = useCallback(
        (id: number) => {
            if (selected !== id) {
                setSelected(id);
            } else {
                setSelected(null);
            }
        },
        [selected]
    );
    return { selected, toggleSelected, unselect };
};
