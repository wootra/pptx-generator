import { VisualContainerProvider } from './context/VisualContext';
import Generator from './routes/Generator';

function VisualApp() {
    return (
        <div className='relative w-[100vw] h-[100vh] flex  flex-col'>
            <nav
                className='sticky top-0 w-full flex flex-row justify-start items-center flex-none '
                style={{ background: '#332c10' }}
            ></nav>
            <main className='flex justify-center items-center w-full'>
                <VisualContainerProvider>
                    <Generator />
                </VisualContainerProvider>
            </main>
        </div>
    );
}

export default VisualApp;
