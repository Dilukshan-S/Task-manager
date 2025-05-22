import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://localhost:8080/api');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="tasks" list={ListGuesser} />
    </Admin>
  );
}

export default App;