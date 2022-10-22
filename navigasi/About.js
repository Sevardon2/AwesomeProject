import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({navigation}) => {
    return(
        <View style={{ margin:10, flex:1 }}>
            <Text style={{ textAlign:'center', flex:1 }}>AwesomeProject V 1.0.0</Text>
            <Text style={{ textAlign:'center', flex:18 }}>Copyright by Engga</Text>
            <View style={{ marginTop:10 }}>
                <Button title='back'
                onPress={()=>navigation.navigate('Home')}/>
            </View>
        </View>
    );
};

export default About;