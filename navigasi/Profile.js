import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Profile = ({navigation}) => {
    return(
        <View style={{ margin:10, flex:1 }}>
            <Text style={{ flex:1 }}>Nama : Engga Ananda Pratama</Text>
            <Text style={{ flex:1 }}>Prodi : S1 - Teknologi Informasi</Text>
            <Text style={{ flex:15 }}>Nim : 20.52.0011</Text>
            <View style={{ marginTop:10 }}>
                <Button title='back'
                onPress={()=>navigation.navigate('Home')}/>
            </View>
        </View>
    );
};

export default Profile;