import {people} from './data.js';
import {getImageUrl} from './utils.jsx';

export default function List() {
    const listItems = people.map(person =>
        <li key={person.id} style={{listStyleType:"none"}}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}
