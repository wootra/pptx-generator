import { useGeneratorUi } from '@/context/GeneratorUiContext';
import StringField from '../../ui/StringField';

const FileNameField = () => {
    const { fileName, setFileName } = useGeneratorUi();
    return (
        <>
            <StringField
                label='file name'
                value={`${fileName}`}
                onChange={txt => setFileName(txt)}
            />
            .pptx
        </>
    );
};

export default FileNameField;
