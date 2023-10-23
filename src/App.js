import logo from './logo.svg';
import './App.css';
import Mail from './components/Mail'

let arr2=["mail@1","mail@2","mail@3","mail@4","mail@5"]


function App() {
  return (
    <div>

<div className='Mails'>
{
  arr2.map(function(mail){
    return <Mail mail={mail} />;
  })
}
</div>
    </div>
  );
}

export default App;
