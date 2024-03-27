import styles from './styles';
import {useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import Header from '../../../components/Header/Header';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useLazyGetDetailsQuery} from '../../../redux/services/authServices';

const Details = ({navigation, route}) => {
  const [detailData, setDetailData] = useState([]);
  const [data, error] = useLazyGetDetailsQuery();
  // const category_id = useSelector(state => state.auth.forumDetails.category_id);
  // console.log(category_id, 'IDD');

  useEffect(() => {
    const getDetailData = async () => {
      try {
        const forumDetails = await data();
        const res = forumDetails.data.result;
        setDetailData(res);
      } catch (error) {
        console.error('Error during questions', error);
      }
    };
    getDetailData();
  }, []);

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
        <TouchableOpacity onPress={() => infoData(item)}>
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
