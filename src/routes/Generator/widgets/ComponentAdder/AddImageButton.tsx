import { useGeneratorUi } from '@/context/GeneratorUiContext';
import Button from '@/ui/Button';
import ImageField from '@/ui/ImageField';
import { useState } from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';
import { RiImage2Fill } from 'react-icons/ri';
const AddImageButton = () => {
    const { addImage } = useGeneratorUi();
    const [selectedImage, setSelectedImage] = useState('');
    return (
        <div className='flex flex-row items-center flex-shrink flex-grow-0'>
            <RiImage2Fill className='w-8 h-8' />
            <ImageField
                value={selectedImage}
                onChange={text => {
                    setSelectedImage(text);
                }}
            />
            <Button onClick={() => addImage(selectedImage)}>
                <FaRegPlusSquare />
            </Button>
        </div>
    );
};

export default AddImageButton;
