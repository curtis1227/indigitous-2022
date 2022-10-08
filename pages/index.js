// import { useCallback , useRef, useState } from 'react';
// import Link from 'next/link';

// function createBulletPoint(key, text) {
//   return <li key={key}>{text}</li>;
// }

// export default function HomePage() {

//   const searchRef = useRef(null);
//   const [query, setQuery] = useState('');
//   const [active, setActive] = useState(false);
//   const [results, setResults] = useState([]);

//   const searchEndpoint = (query) => '/api/search?q=${query}'

//   const onChange = useCallback((event) => {
//     const query = event.target.value;
//     setQuery(query);
//     if(query.length) {
//       fetch(searchEndpoint(query))
//         .then(res => res.json())
//         .then(res => {
//           setResults(res.results);
//         })
//     }
//     else {
//       setResults([]);
//     }
//   }, []);

//   const onFocus = useCallback(() => {
//     setActive(true);
//     window.addEventListener('click', onClick);
//   }, []);

//   const onClick = useCallback((event) => {
//     if(searchRef.current && !searchRef.current.contains(event.target)) {
//       setActive(false);
//       window.removeEventListener('click', onClick);
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Search churches</h1>

//       <input 
//       value={query}
//       /> 
//       { active && results.length > 0 && (

//         <ul>
//           {results.map(({ id, title }) => (
//             <li>
//               <Link href= '/posts/[id]' as={'/posts/${id}'}>
//                 <a>{title}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>

//         )
//       }

//     </div>
//   );
// }



// Importing modules
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits }
	from "react-instantsearch-dom";
import SearchBar from "./components/searchbar.js";
// require('dotenv-webpack');
// console.log(process.env);

const searchClient = algoliasearch(
	'APPLICATION_API_KEY',
  	'SEARCH_ONLY_API_KEY',
);

export default function CustomizedSearch() {
return (
	<>
  <h1>Search churches</h1>
	<InstantSearch
		searchClient={searchClient}
		indexName="gfg_dev">

		{/* Adding Search Box */}
		<SearchBar/>

		{/* Adding Data */}
		<Hits />
	</InstantSearch>
	</>
);
}
