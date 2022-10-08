import { useState } from 'react';

function createBulletPoint(key, text) {
  return <li key={key}>{text}</li>;
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h1>Search churches</h1>
      <ul>
        {names.map(name => createBulletPoint(name, name))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
