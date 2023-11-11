const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Josh Blog</h1>
            <div className='links'>
                <a href="/">home</a>
                <a href="/create">NewBlog</a>
                <button>Login</button>
            </div>
           
        </nav>
    )
}

export default Navbar;