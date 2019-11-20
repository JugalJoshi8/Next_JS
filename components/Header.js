import Link from 'next/link';
import styled from 'styled-components';
//import styled
const StyledAnchor = styled.a`
  margin-right: 15px;
  cursor: pointer;
`;

const Wrapper = styled.header`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 15px;
`;

function Header(props) {
  console.log(props);
  return (
    <Wrapper>
      <Link href="/">
        <StyledAnchor title="home">Home Page</StyledAnchor>
      </Link>
      <Link href="/about">
        <StyledAnchor title="About">About Page</StyledAnchor>
      </Link>
      <Link href="/blog">
        <StyledAnchor title="Blog">Blog Page</StyledAnchor>
      </Link>
      <Link href="/tvshows">
        <StyledAnchor title="TV shows">TV Shows</StyledAnchor>
      </Link>
    </Wrapper>
  );
}

export default Header;
