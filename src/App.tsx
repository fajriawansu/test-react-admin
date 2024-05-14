import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/UsersList";
import { PostList } from "./components/PostsList";
import { PostEdit } from "./components/PostEdit";
import { PostCreate } from "./components/PostCreate";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    <Resource
      name="users"
      list={UserList}
      recordRepresentation="name"
      show={ShowGuesser}
    />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
  </Admin>
);
