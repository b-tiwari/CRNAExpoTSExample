import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface CompProps {
    title: string
}

const Header = (props: CompProps) => {
    return (
        <View style= { styles.container }>
            <Text style= { styles.titleText }> {props.title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#669999'
    },
    titleText:{
        color: '#fff',
        fontSize: 30
    }
});

export default Header;
