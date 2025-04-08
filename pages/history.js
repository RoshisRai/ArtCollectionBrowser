import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { searchHistoryAtom } from '../store';
import styles from '@/styles/History.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function History() {
  const router = useRouter();
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom);
  
  // Parse search history into readable objects
  let parsedHistory = [];
  searchHistory.forEach(h => {
    let params = new URLSearchParams(h);
    let entries = params.entries();
    parsedHistory.push(Object.fromEntries(entries));
  });

  // Navigate to artwork page with search query when history item is clicked
  function historyClicked(e, index) {
    router.push(`/artwork?${searchHistory[index]}`);
  }

  // Remove history item when delete button is clicked
  function removeHistoryClicked(e, index) {
    e.stopPropagation(); // stop the event from trigging other events
    setSearchHistory(current => {
      let x = [...current];
      x.splice(index, 1);
      return x;
    });
  }

  if (!parsedHistory || parsedHistory.length === 0) {
    return (
      <Card>
        <Card.Body>
          <h4>Nothing Here</h4>
          Try searching for some artwork.
        </Card.Body>
      </Card>
    );
  }

  return (
    <ListGroup>
      {parsedHistory.map((historyItem, index) => (
        <ListGroup.Item 
          key={index} 
          className={styles.historyListItem}
          onClick={e => historyClicked(e, index)}
        >
          {Object.keys(historyItem).map(key => (
            <span key={key}>
              {key}: <strong>{historyItem[key]}</strong>&nbsp;
            </span>
          ))}
          <Button 
            className="float-end" 
            variant="danger" 
            size="sm" 
            onClick={e => removeHistoryClicked(e, index)}
          >
            &times;
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}