import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
const Create = (props) => {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder="title"/></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function App() {
  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null)
  const [nextId, setNextId] = useState(4)
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ])
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title='Welcome' body='Hello, WEB'></Article>
  } else if (mode === 'READ') {
    const topic = topics.filter(e => e.id === Number(id))
    content = <Article title={topic[0].title} body={topic[0].body}></Article>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {id:nextId, title: _title, body: _body}
      const newTopics = [...topics]
      newTopics.push(newTopic)
      setTopics(newTopics)
      setMode('READ')
      setId(nextId)
      setNextId(nextId + 1)
    }}></Create>
  }
  return (
    <div>
      <Header title='Web' onEvent={() => {
        setMode('WELCOME')
      }}></Header>
      <Nav topics={topics} onEvent={(id) => {
        setMode('READ')
        setId(id)
      }}></Nav>
      {content}
      <a href='/create' onClick={(event) => {
        event.preventDefault()
        setMode('CREATE')
      }}>Create</a>


    </div>
    );
}

export default App;
