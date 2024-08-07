import {getImageUrl} from './utils.jsx';

export default function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            height={size}
        />
    );
}
