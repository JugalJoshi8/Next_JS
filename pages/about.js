import withLayout from '../components/hoc/withLayout';

function About(props) {
  console.log(props);
  return (
    <p>This is the about page</p>
  );
}

export default withLayout(About);
