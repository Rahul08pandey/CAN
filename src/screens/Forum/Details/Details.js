import styles from './styles';
import {useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import Header from '../../../components/Header/Header';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useLazyGetDetailsQuery} from '../../../redux/services/authServices';

const Details = ({navigation, route}) => {
  // const {params} = route;
  // const ans = params && params.ans ? params.ans : '';
  // const ques = params && params.ques ? params.ques : '';
  const [detailData, setDetailData] = useState([]);
  const [data, error] = useLazyGetDetailsQuery();
  const id = useSelector(state => state.auth);
  console.log(id, 'IDDD');

  useEffect(() => {
    const getDetailData = async () => {
      try {
        const forumDetails = await data();
        console.log(forumDetails.data.result, 'dhggfgjh');
        setDetailData(forumDetails);
      } catch (error) {
        console.error('Error during questions', error);
      }
    };
    getDetailData();
  }, []);

  // const detailData = [
  //   {
  //     ques: 'Who is evaluating the initial valuations?',
  //     ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  //   {
  //     ques: 'What is MRR?',
  //     ans: ans ? ans : '',
  //   },
  //   {
  //     ques: 'What is round size?',
  //     ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  //   {
  //     ques: 'What is commitment?',
  //     ans: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  //   },
  // ];

  const handleQuestions = () => {
    navigation.navigate('HaveQuestions');
  };

  const infoData = () => {
    navigation.navigate('AnsQues');
  };

  const renderdetailData = ({item}) =>
    item.ans ? (
      <View style={styles.dataContainer}>
        <Text style={styles.ques}>{item.quetion}</Text>
        <Text style={styles.ans}>{item.answer}</Text>
      </View>
    ) : (
      <View style={styles.dataContainer}>
        <TouchableOpacity onPress={infoData}>
          <Text style={styles.ques}>{item.quetion}</Text>
          <Text style={styles.ans}>Add an Answer</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} back={true} drawer={false} />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Valuations & MRR</Text>
        <View style={styles.forumDataList}>
          <FlatList
            data={detailData}
            renderItem={renderdetailData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.queryContainer}>
          <TouchableOpacity onPress={handleQuestions}>
            <Text style={styles.query}>Have any Questions?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;
