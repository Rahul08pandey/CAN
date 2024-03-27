import {View, Text, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../components/Header/Header';
import IMAGES from '../../assets/images';
import {useFetchActiveMandateMutation} from '../../redux/services/authServices';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [getData] = useFetchActiveMandateMutation();

  useEffect(() => {
    const allData = async () => {
      try {
        const response = await getData();
        const res = response.data.result;
        setData(res);
      } catch (error) {
        console.error('Error fetching active mandate:', error);
      }
    };
    allData();
  }, []);

  const agendaData = [
    {
      date: '02',
      month: 'NOV',
      events: [
        {
          title: 'Startup World Cup 2022',
          agenda: 'Lorem Ipsum is simply dummy',
          time: '4 pm',
          location: 'Virtual',
        },
      ],
    },
    {
      date: '02',
      month: 'NOV',
      events: [
        {
          title: 'Web Summit PITCH 2022',
          agenda: 'Lorem Ipsum is simply dummy',
          time: '4 pm',
          location: 'Virtual',
        },
      ],
    },
    {
      date: '18',
      month: 'NOV',
      events: [
        {
          title: 'Next Founders Event',
          agenda: 'Lorem Ipsum is simply dummy',
          time: '4 pm',
          location: 'The Lalit, Chd',
        },
      ],
    },
  ];

  const renderItem = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.itemData}>
        <View style={{flexDirection: 'row'}}>
          <Image source={IMAGES.jerry} />
          <View style={{flexDirection: 'column', flex: 1}}>
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
            <Text style={styles.txt}>MRR:</Text>
            {item.mrr.mrr_amount}
            {item.mrr.mrr_amount_in}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.txt}>Round Size:</Text>
            {item.round_size.round_size_amount}
            {item.round_size.round_size_amount_in}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 2,
          }}>
          <Text style={styles.details}>
            <Text style={styles.txt}>Valuation:</Text>

            {item.valuation.valuation_amount}
            {item.valuation.valuation_amount_in}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.txt}>Commitment:</Text>

            {item.commitment.commitment_amount}
            {item.commitment.commitment_amount_in}
          </Text>
        </View>
      </View>
    ));
  };

  const renderAgendaData = () => {
    return agendaData.map((item, index) => (
      <View key={index} style={styles.agendaData}>
        <View style={styles.dateMonthContainer}>
          <Text style={styles.dM}>{item.date}</Text>
          <Text style={styles.dM}>{item.month}</Text>
        </View>

        {item.events.map((event, index) => (
          <View key={index} style={styles.eventContainer}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventAgenda}>{event.agenda}</Text>

            <View style={styles.eventImgContainer}>
              <View
                style={{
                  marginBottom: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={IMAGES.clock} style={{marginTop: 2}} />
                <Text style={styles.imgTxt}>{event.time}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  left: 30,
                  marginBottom: 2,
                }}>
                <Image source={IMAGES.location} style={{marginTop: 2}} />
                <Text style={styles.imgTxt}>{event.location}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    ));
  };

  const openDrawer = () => {
    navigation.navigate('DrawerNavigator');
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header onPress={openDrawer} renderImage={true} />

        <View style={styles.subContainer}>
          <Text style={styles.heading}>Active Mandate</Text>
          {/* <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          /> */}
          <View style={{flex: 1}}>{renderItem()}</View>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.heading}>Calendar</Text>
          {/* <FlatList
            data={agendaData}
            renderItem={renderAgendaData}
            keyExtractor={(item, index) => index.toString()}
          /> */}
          {renderAgendaData()}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
