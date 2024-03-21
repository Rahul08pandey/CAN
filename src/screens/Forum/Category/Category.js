import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../../components/Header/Header';
import {useFetchForumCategoryQuery} from '../../../redux/services/authServices';

const Category = ({navigation}) => {
  const [forumData, setForumData] = useState([]);
  const {data, error} = useFetchForumCategoryQuery();

  useEffect(() => {
    const fetchForum = async () => {
      try {
        const forumResponse = await data.result;
        setForumData(forumResponse);
      } catch (error) {
        console.error('Error fetching forum category:', error);
      }
    };
    fetchForum();
  }, []);

  const infoData = () => {
    navigation.navigate('Details');
  };

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={infoData}>
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
