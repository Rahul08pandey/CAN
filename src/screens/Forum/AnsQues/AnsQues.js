import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../../components/Header/Header';
import CustomButton from '../../../components/common/CustomButton';

const AnsQues = ({navigation}) => {
  const [dbButton, setdbButton] = useState(true);
  const [response, setResponse] = useState([]);

  const handleCancel = () => {
    navigation.navigate('Details');
  };

  const handlePost = () => {
    navigation.navigate('Details', {answer: response});
  };

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} back={true} drawer={false} />

      <View style={styles.subContainer}>
        <Text style={styles.quesTxt}>Category: Valuations & MRR</Text>

        <Text style={styles.helpBtn}>What exactly is MRR?</Text>

        <View style={styles.inputContainer}>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Response</Text>
            <TextInput
              placeholder="Enter your response"
              placeholderTextColor="#00000045"
              multiline={true}
              style={styles.txtInput}
              value={response}
              onChangeText={text => setResponse(text)}
            />
          </View>

          <Text style={styles.helpTxt}>
            Please be polite while answering the question. Refer to community
            guidelines for more info.
          </Text>

          <CustomButton
            title="Post"
            twoButton={dbButton}
            onPress={handlePost}
            cancelPress={handleCancel}
          />
        </View>
      </View>
    </View>
  );
};

export default AnsQues;
