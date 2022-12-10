import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    // const type = props.type;
    const {type, content, onPress} = props;
     const bgColor = type === 'primary' ? 'black' : 'white';
     const txtColor = type === 'primary' ? 'white' : 'black';
    // const content = props.content;
    // const onPress = props.onPress;

    // console.warn(type);
    return(
<View style={styles.container}>
<Pressable style={[styles.button,{backgroundColor: bgColor}]} onPress={() => onPress()}
>
    <Text style={[styles.text,{color: txtColor}]}>{content}</Text>

</Pressable>

</View>

    );
};

export default StyledButton;