import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={this
                    ._goBack.bind(this)}></TouchableOpacity>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        )
    }

    _goBack() {
        // console.log(this.props.navigation)
        this.props.navigation.goBack();  
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#FFF',
        // flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.5,
        shadowRadius: 50,
        shadowColor: '#ccc',
        elevation: 4,
        borderColor: '#ccc',
        borderWidth: 1
    },
    backBtn: {
        width: 18,
        height: 18,
        borderColor: '#333',
        borderLeftWidth: 2,
        borderTopWidth: 2,
        transform: [
            {
                rotate: '-45deg'
            }
        ],
        position: 'absolute',
        left: 20,
        top: 18
    },
    title: {
        color: '#333',
        fontSize: 14
    }
})