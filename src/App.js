import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return <header>
    <h1><a href='/'>{props.title}</a></h1>
  </header>
}

const Nav = (props) => {
  const lis = props.topics.map(t => 
    <li key={t.id}><a href={`/read/${t.id}`}>{t.title}</a></li>
  )
  return <ol>
    {lis}
  </ol>
}

const Article = (props) => {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ]
  return (
    <div>
      <Header title='Web'></Header>
      <Nav topics={topics}></Nav>
      <Article title='Welcome' body='Hello, WEB'></Article>
    </div>

    );
}

export default App;
