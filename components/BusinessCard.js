import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    qrCode: {
        width: "90%",
        height: "70%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
    }
});

const BusinessCard = () => {
    return (
        <View>
            <Image
                style={styles.qrCode}
                {/*indsæt billede af QR-kode*/}
                source={require('../assets/qr-code.png')}
            />
        </View>
    );
}

export default BusinessCard;
