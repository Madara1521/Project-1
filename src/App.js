import './App.css'
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import {withRouter} from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import React, {Component, lazy} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspense} from "./components/Hoc/withSuspense";

const DialogsContainer = withSuspense(React.lazy(() => import("./components/Dialogs/DialogsContainer")))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className={'app-wrapper'}>
        <HeaderContainer/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Routes>
            <Route path={'/dialogs/*'} element={
              <DialogsContainer/>
            }/>
            <Route path="/profile" element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <ProfileContainer/>
              </React.Suspense>}>
              <Route path=":userId" element={<ProfileContainer/>}/>
            </Route>
            <Route path={'/news/*'} element={<News/>}/>
            <Route path={'/music/*'} element={<Music/>}/>
            <Route path={'/settings/*'} element={<Settings/>}/>
            <Route path={'/users/*'} element={<UsersContainer/>}/>
            <Route path={'/login/*'} element={<Login/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

const KanohaJsApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </HashRouter>
}

export default KanohaJsApp