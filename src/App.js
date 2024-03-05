import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import List from './components/List';
/**
 * react-router-dom
 * 리액트 내에서 페이지 이동이 가능하도록 해주는 라이브러리
 * (npm install react-router-dom 실행)
 * 
 * BrowserRouter
 * : history API를 이용해서 history객체를 생성
 *  페이지 이동을 진행할 컴포넌트 상위에 생성하여 감싸주어야 함
 * 
 * Routes
 * : 모든 Route의 상위 경로에 존재해야 하고, location(url)변경 시 하위에 있는 Route에 실행된
 *   컴포넌트를 표시해줌
 * 
 * Route
 * : 현재 부라우저에 있는 location을 기준으로 element(컴포넌트)를 렌더링함
 */

function App() {
  const [actNum, setActNum] = useState(0);
  
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/' className={actNum==0?'btn-active' : ''} onClick={()=>setActNum(0)}>목록보기</Link>
            </li>
            <li>
              <Link to='/add' className={actNum==1?'btn-active' : ''} onClick={()=>setActNum(1)}>추가</Link>
            </li>
          </ul>
        </nav>
        <hr/>
        <Routes>
          <Route path='/' element={<List/>}/>
          <Route path="/add" element={<Add/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
