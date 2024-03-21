//  The <html> and <body> tags.
//     The <div> element with the id of app.
//     The react and react-dom scripts since you've installed them with NPM.
//     The Babel script because Next.js has a compiler that transforms JSX into valid JavaScript browsers can understand.
//     The <script type="text/jsx"> tag.
//     The document.getElementById() and ReactDom.createRoot() methods.
//     The React. part of the React.useState(0) function 

//file name to .js or .jsx....The only code left in the HTML file is JSX, so you can change the file type from .html to .js or .jsx.

    import { useState } from 'react';
 
    function Header({ title }) {
      return <h1>{title ? title : 'Default title'}</h1>;
    }
    export default function HomePage() {
    function HomePage() {
      const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
     
      const [likes, setLikes] = useState(0);
     
      function handleClick() {
        setLikes(likes + 1);
      }
     
      return (
        <div>
          <Header title="Develop. Preview. Ship." />
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
     
          <button onClick={handleClick}>Like ({likes})</button>
        </div>
      );
    }
  }