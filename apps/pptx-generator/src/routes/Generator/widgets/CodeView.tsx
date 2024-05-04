import { useGeneratorUi } from '@/context/GeneratorUiContext';
import { useVisualContainer } from '@/context/VisualContext';
import Button from '@/ui/Button';
import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import Prism from 'prismjs';

const CodeView = () => {
    const { code } = useVisualContainer();
    const { isCopied, setCopied } = useGeneratorUi();
    const codeRef = React.useRef<HTMLElement>(null);
    useEffect(() => {
        if (codeRef.current) {
            const html = Prism.highlight(
                code,
                Prism.languages['javascript'],
                'javascript'
            );
            codeRef.current.innerHTML = html;
        }
    }, [code]);
    console.log('code:', code);

    return (
        <div className='border border-gray-100 h-full w-full overflow-y-auto relative'>
            <pre className='h-auto language-javascript'>
                <code ref={codeRef}></code>
            </pre>
            <Button
                className='absolute right-2 top-2 w-24 flex flex-row justify-center items-center gap-2'
                onClick={setCopied}
            >
                Copy{isCopied && <FaCheck className='text-green-300' />}{' '}
            </Button>
        </div>
    );
};

export default CodeView;
