import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../../components/Header/Header';
import {useDispatch} from 'react-redux';
import {useLazyFetchForumCategoryQuery} from '../../../redux/services/authServices';
import {forumDetails} from '../../../redux/actions/actions';

const Category = ({navigation}) => {
  const dispatch = useDispatch();
  const [forumData, setForumData] = useState([]);
  const [data] = useLazyFetchForumCategoryQuery();

  useEffect(() => {
    const fetchForum = async () => {
      try {
        const forumResponse = await data();
        const res = forumResponse.data.result;
        setForumData(res);
      } catch (error) {
        console.error('Error fetching forum category:', error);
      }
    };
    fetchForum();
  }, []);

  const infoData = item => {
    navigation.navigate('Details');
    dispatch(forumDetails(item));
  };

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={() => infoData(item)}>
        <Text style={styles.category_name}>{item.category_name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header renderImage={true} />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Forum Category</Text>
        <View style={styles.forumDataList}>
          <FlatList
            data={forumData}
            renderItem={renderForumData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Category;
