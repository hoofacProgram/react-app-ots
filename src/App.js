import logo from './logo.svg';
import './App.css';

const Header = (props) => {
  return <header>
    <h1><a href='/' onClick={(event) => {
      event.preventDefault()
      props.onEvent() // 이벤트 이름은 통일만 되면 사용 가능
    }}>{props.title}</a></h1>
  </header>
}

const Nav = (props) => {
  const lis = props.topics.map(t => 
    <li key={t.id}><a id={t.id} href={`/read/${t.id}`} onClick={(event) => {
      event.preventDefault()
      props.onEvent(event.target.id)  // 이벤트 발생 타겟, 현재는 a 태그의 id
    }}>{t.title}</a></li>
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
      <Header title='Web' onEvent={() => {
        alert('Herder Click')
      }}></Header>
      <Nav topics={topics} onEvent={(id) => {
        alert(id)
      }}></Nav>
      <Article title='Welcome' body='Hello, WEB'></Article>
    </div>

    );
}

export default App;
