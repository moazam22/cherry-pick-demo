import { data } from "./utils/data";
import './App.css'

function App() {
  return (
    <div style={{
      height: '100vh',
      margin: '3em'
    }}>
      <table style={{
        fontFamily: 'arial, sans-serif',
        borderCollapse: 'collapse',
        width: '100%'
      }}>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {
          !!data?.length && data.map((item,key) => (
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default App;
