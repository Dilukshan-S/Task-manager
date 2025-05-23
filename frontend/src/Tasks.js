// frontend/src/tasks.js
import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  EditButton,
  DeleteButton,
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  Create,
} from 'react-admin';

export const TaskList = props => (
  <List {...props} title="Tasks">
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <BooleanField source="done" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const TaskEdit = props => (
  <Edit {...props} title="Edit Task">
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" multiline />
      <BooleanInput source="done" />
    </SimpleForm>
  </Edit>
);

export const TaskCreate = props => (
  <Create {...props} title="New Task">
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="description" multiline />
    </SimpleForm>
  </Create>
);
