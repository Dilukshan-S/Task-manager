import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { TaskList, TaskEdit, TaskCreate } from './Tasks';

const dataProvider = simpleRestProvider('http://localhost:8080/api');

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource 
        name="tasks"
        list={TaskList}
        edit={TaskEdit}
        create={TaskCreate}
      />
    </Admin>
  );
}

export default App;
