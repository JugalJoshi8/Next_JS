import Header from '../Header';
import Head from 'next/head'
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
const withLayout = Page => {
  return props =>  {
    return (
    <div style = {layoutStyle}>
      <Head>
        <title>My page title</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Header></Header>
      <Page {...props}></Page>
    </div>
    )
  }
    
};

export default withLayout;
