import { useVisualContainer } from '@/context/VisualContext';
import Button from '@/ui/Button';

const CodeView = () => {
    const { code } = useVisualContainer();
    return (
        <div className='border border-gray-100 h-full w-full overflow-y-auto relative'>
            <pre className='h-auto'>{code}</pre>
            <Button className='absolute right-2 top-2'>Copy</Button>
        </div>
    );
};

export default CodeView;
