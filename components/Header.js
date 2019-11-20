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
        <a style = {linkStyle} title="About">About Page</a>
      </Link>
      <Link href="/blog">
        <a style = {linkStyle} title="Blog">Blog Page</a>
      </Link>
      <Link href="/tvshows">
        <a style = {linkStyle} title="TV shows">TV shows Page</a>
      </Link>
    </>
  );
}

export default Header;
