import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import * as React from "react";
import data from "./data/data.json"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 22,
        marginRight: 22,
    },
    title: {
        width: "100%",
        fontWeight: "bold",
        textAlign: "left"
    },
    input: {
        height: 40,
        width: "100%",
        marginTop: 12,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
    },
});

export default function SettingsScreen() {
    let [name, onChangeName] = React.useState(data.name);
    let [company, onChangeCompany] = React.useState(data.company);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder={data.name}
                onChangeText={onChangeName}
                value={name}
            />
            <Text style={styles.title}>Company</Text>
            <TextInput
                style={styles.input}
                placeholder={data.company}
                onChangeText={onChangeCompany}
                value={company}
            />
            <Button
                title="Update"
                onPress={() => Alert.alert('QR-code updated with information')}
            />
            <Button
                title="Add Business Card to Apple Wallet"
                onPress={() => Alert.alert('Business Card added to Apple Wallet')}
            />
            <Button
                title="Reset"
                onPress={() => {
                    onChangeName(data.name)
                    onChangeCompany(data.company)
                    Alert.alert('QR-code reset with information')
                }}
            />
        </View>
    );
}
