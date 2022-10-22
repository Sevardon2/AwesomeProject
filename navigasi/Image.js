import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import foto1 from '../programmer.jpg';
import foto2 from '../dataanalis.jpg';

const Imagee = ({navigation}) => {
    return(
        <View style={{ margin:10, flex:1 }}>
            <View style={{ flex:1, flexDirection:'row' }}>
                <Image source={ foto1 } style={{ width:150, height:150, marginRight:15 }}></Image>
                <Image source={ foto2 } style={{ width:150, height:150, marginLeft:15 }}></Image>
            </View>
            <View style={{ marginTop:1 }}>
                <Button title='back'
                onPress={()=>navigation.navigate('Home')}/>
            </View>
        </View>
    );
};

export default Imagee;