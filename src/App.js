import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactList from "./components/contact-list";
import AddContact from "./components/add-contact";
import EditContact from "./components/edit-contact";
import Header from "./components/header";
import GlobalProvider from "./components/global-state";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Switch>
        <Route path="/" component={ContactList} exact />
        <Route path="/add" component={AddContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
