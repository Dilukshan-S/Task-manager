import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import { TaskList, TaskEdit, TaskCreate } from './tasks';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tasks" list={TaskList} edit={TaskEdit} create={TaskCreate} />
  </Admin>
);

export default App;