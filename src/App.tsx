import { VisualContainerProvider } from './context/VisualContext';
import { ROUTES } from './routes/router';
import { Link, Outlet } from 'react-router-dom';

function App() {
    return (
        <div className='relative w-[100vw] h-[100vh] flex  flex-col'>
            <nav
                className='sticky top-0 w-full flex flex-row justify-start items-center flex-none '
                style={{ background: '#332c10' }}
            >
                {ROUTES.map(r => (
                    <Link
                        key={r.path ?? '/'}
                        className='p-2'
                        to={r.path ?? '/'}
                    >
                        {r.label}
                    </Link>
                ))}
            </nav>
            <main className='flex justify-center items-center w-full'>
                <VisualContainerProvider>
                    <Outlet />
                </VisualContainerProvider>
            </main>
        </div>
    );
}

export default App;
