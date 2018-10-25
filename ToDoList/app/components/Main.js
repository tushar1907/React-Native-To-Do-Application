/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Note from "./Note";

type Props = {};
export default class Main extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            noteArray:[],
            noteText:''
        }
    }


    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={ ()=>{
                        this.deleteMethod(key) 
                    }} />
        });
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>- NOTER -</Text>
                </View>

                <ScrollView style={styles.scrollContainer}></ScrollView>

                <View style={styles.footer}>
                <TextInput 
                onChangeText={(noteText) => this.setState({noteText})}
                value={this.state.noteText}
                style={styles.textInput}
                placeholder='>note'
                placeholderTextColor='white'
                underlineColorAndroid='transparent'></TextInput></View>

                <TouchableOpacity 
                onPress={ this.addNote.bind(this)} 
                style={styles.addButton}>

                    <Text style={styles.addButtonText}>+</Text>

                </TouchableOpacity>
            </View>
        );
    }

    addNote() {
        alert("Note added successfully");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    },
});
