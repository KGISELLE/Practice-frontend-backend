interface HeaderProps {
    username: string;
}



const Header = ({ username }: HeaderProps) => {
    return (
        <header>
            <h1>Welcome {username}</h1>
        </header>
    )
}

export default Header;