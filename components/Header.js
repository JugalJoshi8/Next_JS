import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

function Header() {
  return (
    <>
      <Link href="/">
        <a style = {linkStyle} title="home">Home Page</a>
      </Link>
      <Link href="/about">
        <a title="About">About Page</a>
      </Link>
    </>
  );
}

export default Header;
