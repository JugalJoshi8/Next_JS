import Header from '../Header';
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
const withLayout = Page => {
  return props =>  {
    return (
    <div style = {layoutStyle}>
      <Header></Header>
      <Page {...props}></Page>
    </div>
    )
  }
    
};

export default withLayout;
