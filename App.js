import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import Welcome from "./components/Welcome"
import EnterBirthday from "./components/EnterBirthday";
import Home from "./components/Home";

export default class App extends React.Component {
  state = {
    page: 1,
  };

  pickPageToRender = () => {
    if (this.state.page === 1){
      return (<Welcome pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
    if (this.state.page === 2) {
      return (<EnterBirthday pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
    if (this.state.page === 3) {
      return (<Home pageChange={(pageNum) => this.setState({page: pageNum})} />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.pickPageToRender()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
