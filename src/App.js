import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";
import Header from "./components/header/Header.component";
import SignInAndRegisterPage from "./pages/sign-in-and-register/sign-in-and-register.component";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // check to see if user is signing in with their google sign in auth credentials
      if (userAuth) {
        // if there is we will get back the userAuth object from our createUserProfileDocument Method and store in our userRef variable
        const userRef = await createUserProfileDocument(userAuth);

        // Then we will subscribe or listen to this userRef for any changes to that data
        // We will also get back the first/initial state of that data
        userRef.onSnapshot((snapShot) => {
          // set the local state of our app.js with the snapshot.id and snapshot user data
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        // if the user logs out, set the local current user state to null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
