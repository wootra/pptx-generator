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
import { CommandList } from 'cmdk';

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
    selected: string;
    options: string[] | Readonly<string[]>;
    onChange: (val: string) => void;
}) => {
    const [open, setOpen] = useState(false);
    const setValue = useCallback(
        (val: string) => {
            const selectedOption = options?.find(
                opt => opt.toLowerCase() === val.toLowerCase()
            );
            if (selectedOption) {
                onChange(selectedOption);
            } else {
                console.error('not selected anything');
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
                        {selected ?? placeHolder}
                        <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                    <Command>
                        <CommandInput placeholder={emptySearchText} />
                        <CommandList>
                            <CommandEmpty>{emptySearchText}</CommandEmpty>
                            <CommandGroup>
                                {options.map(opt => (
                                    <CommandItem
                                        key={opt}
                                        value={opt}
                                        onSelect={selected => {
                                            setValue(selected);
                                            setOpen(false);
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                selected === opt
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                            )}
                                        />
                                        {opt}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default DropDownField;
