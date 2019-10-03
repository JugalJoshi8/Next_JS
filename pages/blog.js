import Link from 'next/link';
import withLayout from '../components/hoc/withLayout';

const PostLink = props => (
  <li>
    <Link href={`/post/[id]`} as = {`/post/${props.title}`}>
      <a>{props.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);
function Blog() {
  return (
    <>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="hello-nextjs" />
        <PostLink title="learn-nextjs" />
        <PostLink title="deploy-nextjs" />
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}

export default withLayout(Blog);