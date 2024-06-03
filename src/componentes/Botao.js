import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Texto from "./Texto";

export default function Botao({ textoBotao, acaoBotao }) {
    return <TouchableOpacity style={[styles.botao]} onPress={acaoBotao}>
        <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 12,
        backgroundColor: "gray",
        paddingVertical: 16,
        borderRadius: 6,
        width: 320,
        margin: 20,
    },
    botaoTexto: {
        textAlign: "center",
        color: "white",
        fontSize: 22,
        lineHeight: 26,
        fontWeight: "bold",
    }
});
