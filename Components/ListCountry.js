import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class CountryList extends React.Component {

    state = {
        arrList: this.props.arrList,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps.arrList);
        return {
            arrList: nextProps.arrList
        }
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 60,
            },
        });

        const articleElements = this.state.arrList.map(Country =>
            <Text onPress={this.handleClick} key={Country.code}>{Country.name}</Text>
        );

        this.myRef = React.createRef();

        return (
            <ScrollView ref={(ref)=>{this.myRef = ref}}>
                <View style={styles.container}>
                    {articleElements}
                </View>
            </ScrollView>
        );
    }

    handleClick = () => {
        this.myRef.scrollToEnd({animated: true})
    };
}