import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer'
class Layout extends Component{
  state = {
    showSideDrawer: false
  }
  sideDrawerCloseHandler=()=>{
  this.setState({showSideDrawer:false})
  }
  // #region   Works but No the best method
  // sideDrawerToggleHandler = () => {
  //   this.setState({showSideDrawer:!this.state.showSideDrawer })
  // }
  // #endregion
  sideDrawerToggleHandler = () => {
    this.setState((prevState)=>{//When ever a state depends on the old one
     return {showSideDrawer: !this.state.showSideDrawer}
    })
  }
  render() {
    return (
  <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
    <main className={classes.Content}>
      {this.props.children}
    </main>    
  </Aux>
    )
  }
}
export default Layout;