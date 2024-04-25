'use client';

import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

export function ComboboxDemo({
    label,
    value,
    options,
    onChange,
}: {
    label: string;
    value: string;
    options: string[];
    onChange: (val: string) => void;
}) {
    const [open, setOpen] = React.useState(false);
    const setValue = React.useCallback(
        (val: string) => {
            onChange(val);
        },
        [onChange]
    );
    return (
        <div className='flex flex-row gap-2 px-2'>
            <label>{label}</label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className='w-[200px] justify-between'
                    >
                        {value
                            ? options.find(opt => opt === value)
                            : 'Select framework...'}
                        <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0'>
                    <Command>
                        <CommandInput
                            placeholder='Search framework...'
                            className='h-9'
                        />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {options.map(opt => (
                                <CommandItem
                                    key={opt}
                                    value={opt}
                                    onSelect={currentValue => {
                                        setValue(
                                            currentValue === value
                                                ? ''
                                                : currentValue
                                        );
                                        setOpen(false);
                                    }}
                                >
                                    {opt}
                                    <CheckIcon
                                        className={cn(
                                            'ml-auto h-4 w-4',
                                            value === opt
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
}
