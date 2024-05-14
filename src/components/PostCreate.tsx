import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" disabled inputProps={{ disabled: "true" }} />
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
