import * as React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import project1 from '../project1.jpg';
import project2 from '../project2.jpg';

const Project = ({navigation}) => {
    return(
        <View style={{ margin:10, flex:1 }}>
            <View style={{ flex:1, flexDirection:'row' }}>
                <View>
                    <Image source={ project1 } style={{ width:150, height:150, marginRight:15 }}></Image>
                    <Text style={{ marginTop:10 }}>Aplikasi Data Pegawai</Text>
                </View>
                <View>
                    <Image source={ project2 } style={{ width:150, height:150, marginLeft:15 }}></Image>
                    <Text style={{ marginTop:10 }}>Aplikasi Peminjaman Barang</Text>
                </View>
            </View>
            <View style={{ marginTop:10 }}>
                <Button title='back'
                onPress={()=>navigation.navigate('Home')}/>
            </View>
        </View>
    );
};

export default Project;