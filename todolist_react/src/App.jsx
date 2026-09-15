import './App.css'
import MyComponent from './component/MyComponent';
import MyComponentFunc from './component/MyComponentFunc';

function App() {

  return (
    <>
      <MyComponent name="클래스형" age={20} />
      <hr/>
      <MyComponentFunc  name="함수형" age={30}>
        <p>함수형의 하위 엘리먼트 P</p>
      </MyComponentFunc>  
    </>
  )
}

export default App