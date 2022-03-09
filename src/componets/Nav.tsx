import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav className='mb-8 w-full'>
            <Link className='mr-5 hover:underline' to="/">Home</Link>
            <Link className='mr-5 hover:underline' to="/react">React</Link>
            <Link className='mr-5 hover:underline' to="/vite">Vite</Link>
        </nav >
    )
}