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
        <div className='flex flex-row items-center w-full'>
            <ImageField
                label={
                    !selectedImage ? (
                        <div>
                            <RiImage2Fill className='w-8 h-8 flex-none' />
                        </div>
                    ) : (
                        <div className='flex-1'>change image</div>
                    )
                }
                value={selectedImage}
                showSelected={!!selectedImage}
                onChange={text => {
                    setSelectedImage(text);
                }}
            />
            <Button
                onClick={() => addImage(selectedImage)}
                className='flex-none'
            >
                <FaRegPlusSquare />
            </Button>
        </div>
    );
};

export default AddImageButton;
