import React from 'react';
import {
  View, 
  Text, 
  Image
} from 'react-native';

import { ButtonIcon } from '../../components/buttonIcon';
import IllustrationImg from '../../assets/illustration.png'
import { styles } from  './styles';

export  function SignIn(){
  return(
    <View style={styles.container}>
     
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
        />
      
        <View style={styles.content}>
          <Text style={styles.title}>
         Organize {`\n`}
         suas jogatinas {`\n`}
         aqui !!!
      </Text>
      
      <Text style={styles.subtitle}>
        Crie grupos {'\n'}
         para jogar com {'\n'}
         seus amigos
         </Text>
         <ButtonIcon 
         title= "Entrar com Discord" 
         activeOpacity={0.6}
         />

      </View>
  </View>
  );
}