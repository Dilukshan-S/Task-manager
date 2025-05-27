// File: src/App.js
import * as React from 'react';
import { Admin, Resource, defaultTheme, defaultDarkTheme } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { createTheme } from '@mui/material/styles';

import { TaskList, TaskEdit, TaskCreate } from './Tasks';

const dataProvider = simpleRestProvider('/api'); // Relative path, uses proxy

const customTheme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      theme={customTheme} // Light theme
      darkTheme={defaultDarkTheme} // Dark theme
      defaultTheme="light" // Sets initial mode
    >
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