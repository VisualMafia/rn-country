import React from 'react';
import { StyleSheet, View, TextInput, StatusBar} from 'react-native';
import CountryList from './Components/ListCountry'
import ArrayCountry from './Array'

export default class App extends React.Component {

    state = {
        userCountry: "",
    };

    render() {
      const styles = StyleSheet.create({
          container: {
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#ccc"
          },
      });

      const searchCountry = ArrayCountry.filter((country) => {
          return (country.name.toLowerCase().indexOf(this.state.userCountry.toLowerCase()) > -1 || country.code.toLowerCase().indexOf(this.state.userCountry.toLowerCase()) > -1)}
      );

      return (
          <View>
              <View style={{height: 20, backgroundColor: "#fff"}}>
                  <StatusBar
                      barStyle="dark-content"
                  />
              </View>
              <TextInput
                  style={styles.container}
                  clearButtonMode = 'always'
                  onChangeText={(userCountry) => this.setState({userCountry})}
                  value={this.state.userCountry}
              />
          <CountryList arrList={searchCountry}/>
          </View>
      );
    }
}
