import fetch from "isomorphic-unfetch";
import withLayout from "../../components/hoc/withLayout";

const Post = ({ show }) => {
  return show ? (
    <>
      <h1>{show.name}</h1>
      <p>{show.summary.replace(/<[/]?p>/g, "")}</p>
      <img src={show.image.medium} />
    </>
  ) : null;
};

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default withLayout(Post);
