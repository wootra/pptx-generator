import { useCallback, useState } from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';

export type DropDownFieldOption<T = unknown> = { label: string; value: T };
const DropDownField = ({
    placeHolder = 'Nothing selected',
    emptySearchText = 'Nothing found',
    label,
    selected,
    options,
    onChange,
}: {
    emptySearchText?: string;
    placeHolder?: string;
    label?: string;
    selected: DropDownFieldOption;
    options: DropDownFieldOption[] | Readonly<DropDownFieldOption[]>;
    onChange: (val: DropDownFieldOption) => void;
}) => {
    const [open, setOpen] = useState(false);
    const setValue = useCallback(
        (val: string) => {
            console.log('selected:', val);
            const selectedOption = options?.find(opt => opt.label === val);
            if (selectedOption) {
                onChange(selectedOption);
            } else {
                console.log('not selected anything');
            }
        },
        [onChange, options]
    );

    return (
        <div className='flex flex-row gap-2 px-2'>
            {label && <label>{label}</label>}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className='w-[200px] justify-between'
                    >
                        {selected?.label ?? placeHolder}
                        <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                    <Command>
                        <CommandInput
                            placeholder={placeHolder}
                            className='h-9'
                        />
                        <CommandEmpty>{emptySearchText}</CommandEmpty>
                        <CommandGroup>
                            {options.map(opt => (
                                <CommandItem
                                    key={opt.label}
                                    // value={opt.label}
                                    onSelect={selected => {
                                        console.log('selected:', selected);
                                        // if (opt && selected !== opt.label)
                                        setValue(opt.label);
                                        setOpen(false);
                                    }}
                                >
                                    {opt.label}
                                    <CheckIcon
                                        className={cn(
                                            'ml-auto h-4 w-4',
                                            selected.label === opt.label
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DropDownField;
