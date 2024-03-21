import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import styles from './styles';
import IMAGES from '../../assets/images';
import {useLazyFetchPortfolioQuery} from '../../redux/services/authServices';

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [data, error] = useLazyFetchPortfolioQuery();

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const portfolioResponse = await data;
        console.log(portfolioResponse, 'portfolioRESPONSE....../////');
        setPortfolioData(portfolioResponse);
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
          <Text style={styles.txt}>Amount:</Text> {item.amount}
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
          <Text style={styles.txt}>At Valuation:</Text> {item.valuation}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}>Round Size:</Text> {item.round_size}
        </Text>
      </View>
      <View style={{marginTop: 2}}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Date of Investment:</Text>
          {item.investment}
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
