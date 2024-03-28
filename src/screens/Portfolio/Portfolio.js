import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import styles from './styles';
import IMAGES from '../../assets/images';
import {useSelector} from 'react-redux';
import {useLazyFetchPortfolioQuery} from '../../redux/services/authServices';

export default function Portfolio() {
  const userId = useSelector(state => state.auth.user.result._id);
  console.log(userId);
  const [portfolioData, setPortfolioData] = useState([]);
  const [data, error] = useLazyFetchPortfolioQuery();

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const portfolioResponse = await data(userId);
        setPortfolioData(portfolioResponse.data.result);
      } catch (error) {
        throw new error();
      }
    };
    getPortfolio();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemData}>
      <View style={{flexDirection: 'row'}}>
        <Image source={IMAGES.jerry} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>{item.company_name}</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Amount:</Text> {item.amount.total_amount}
          {item.amount.total_amount_in}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}># of shares:</Text> {item.number_of_share}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 2,
        }}>
        <Text style={styles.details}>
          <Text style={styles.txt}>At Valuation:</Text>
          {item.valuation.valuation_amount} {item.valuation.valuation_amount_in}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}>Round Size:</Text>
          {item.round_size.round_size_amount}
          {item.round_size.round_size_amount_in}
        </Text>
      </View>
      <View style={{marginTop: 2}}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Date of Investment:</Text>
          {item.date}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>My Portfolio</Text>

        <FlatList
          data={portfolioData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 24, color: '#000000A8'}}>
                No data available
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
}
