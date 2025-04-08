import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { searchHistoryAtom } from '../store';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MainNav() {
  const router = useRouter();
  const [searchField, setSearchField] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryString = `title=true&q=${searchField}`;
    
    // Add search to history
    setSearchHistory(current => [...current, queryString]);
    
    router.push(`/artwork?${queryString}`);
    setSearchField('');
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Navbar expand="lg" className="fixed-top navbar-dark bg-primary navbar navbar-expand-lg navbar-light" expanded={isExpanded}>
        <Container>
          <Navbar.Brand>Roshis Rai</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleExpanded} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link onClick={() => setIsExpanded(false)} active={router.pathname === "/"}>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link onClick={() => setIsExpanded(false)} active={router.pathname === "/search"}>Advanced Search</Nav.Link>
              </Link>
            </Nav>
            &nbsp;
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
              />
              <Button variant="success" type="submit">Search</Button>
            </Form>
            &nbsp;
            <Nav>
              <NavDropdown title="User Name" id="basic-nav-dropdown">
                <Link href="/favorites" passHref legacyBehavior>
                  <NavDropdown.Item onClick={() => setIsExpanded(false)} active={router.pathname === "/favorites"}>Favorites</NavDropdown.Item>
                </Link>
                <Link href="/history" passHref legacyBehavior>
                  <NavDropdown.Item onClick={() => setIsExpanded(false)} active={router.pathname === "/history"}>Search History</NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}