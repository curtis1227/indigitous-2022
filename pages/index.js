import { useState } from 'react';
import { searchForListOfChurches } from '../lib/fetchers';

export default function HomePage() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h1>Search churches</h1>
      <ul>
        {searchForListOfChurches('').map(church_name => createBulletPoint(church_name))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

function createBulletPoint(text) {
  return <li>{text}</li>;
}
