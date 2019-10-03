import { useRouter } from 'next/router';
import withLayout from '../../components/hoc/withLayout';

const Page = () => {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.id}</h1>
      <p>This is the blog post content.</p>
    </>
  );
};

export default withLayout(Page);