import React, { Component } from 'react';

//Components
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated
 } from 'react-native';


export default class AnimatedSwitch extends Component {

    state = {
        active: false
    }

    //Creando valor animado.  puede ser propiedad de la clase o parte del estado. 
    animatedSwithValue = new Animated.Value(0);


    handlePressToggle = () => {
        this.setState({ 
            active : !this.state.active,
        });

        Animated.timing(
            this.animatedSwithValue,{
                toValue:this.state.active ? 0 : 1,
                duration:500,
                useNativeDriver: true
            }
        ).start();
    }

    render() {
        const {
            height = 50,
            width= 250,
            activeColor = "#27ae60",
            color = "#95a5a6",
            borderRadius= false
        } = this.props; 

        const styles = StyleSheet.create({
            container:{
                backgroundColor:'#BDBDBD',
                width,
                flexDirection:'row',
                // justifyContent: !this.state.active ? 'flex-start' : 'flex-end',
                // borderRadius:20,
                
            },
            toggle:{
                backgroundColor: this.state.active ? activeColor : color,
                height,
                width: width / 2,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: borderRadius ? 20 : 0,
                transform: [{
                    translateX: this.animatedSwithValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [ - (width / 8) , (width / 2) + width / 8]
                    }),
                },]
            },
            label:{
                color: 'white',
                fontSize:20
            }
        });
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.toggle} onPress={this.handlePressToggle}>
                    <Text style={styles.label}>
                        {this.state.active ? 'Si' : 'No'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}