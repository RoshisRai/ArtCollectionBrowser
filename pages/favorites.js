import { useAtom } from 'jotai';
import { favouritesAtom } from '../store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ArtworkCard from '../components/ArtworkCard';

export default function Favorites() {
  const [favouritesList] = useAtom(favouritesAtom);

  if (!favouritesList || favouritesList.length === 0) {
    return (
      <Card>
        <Card.Body>
          <h4>Nothing Here</h4>
          Try adding some new artwork to the list.
        </Card.Body>
      </Card>
    );
  }

  return (
    <>
      <Row className="gy-4">
        {favouritesList.map(objectID => (
          <Col lg={3} key={objectID}>
            <ArtworkCard objectID={objectID} />
          </Col>
        ))}
      </Row>
    </>
  );
}