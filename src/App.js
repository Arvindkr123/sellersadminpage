import './App.css';
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='container border border-primary rounded mt-5'
      style={{
        background: `url(https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
        backgroundSize: 'cover'
      }}
    >
      <Todo />
    </div>
  );
}

export default App;