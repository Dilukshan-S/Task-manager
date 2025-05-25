import simpleRestProvider from 'ra-data-simple-rest';

const dataProvider = simpleRestProvider('http://localhost:8080/api', {
  updateMethod: 'PUT',
});

export default dataProvider;