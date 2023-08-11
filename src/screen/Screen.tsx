import {SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native'

import {FontAwesome5} from '@expo/vector-icons'
import React from 'react'

export default function Screen(this: any)  {
    return (
        <View>
            <SafeAreaView style={{flex: 1}}>
                <TouchableOpacity 
                    style={{alignItems: 'flex-end', margin: 16}}
                    onPress={this.props.navigation.openDrawer}
                >
                    <FontAwesome5 name="bars" size={24} color="#161924" />
                </TouchableOpacity>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.text}>{this.props.name}Screen</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500',
    }
})