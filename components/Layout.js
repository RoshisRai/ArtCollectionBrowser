import MainNav from './MainNav';
import Container from 'react-bootstrap/Container';

export default function Layout(props) {
  return (
    <>
      <MainNav />
      <br />
      <br />
      <Container>
        {props.children}
      </Container>
      <br />
    </>
  );
}