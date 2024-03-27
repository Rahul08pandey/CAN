import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useEffect} from 'react';
import IMAGES from '../../assets/images';
import {Calendar} from 'react-native-calendars';
import Header from '../../components/Header/Header';
import {useFetchEventsQuery} from '../../redux/services/authServices';

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [selectDate, setSelectDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const {data, error} = useFetchEventsQuery();

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const eventResponse = await data;
        const res = eventResponse.result;
        setEvents(res);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    getSchedules();
  }, []);

  useEffect(() => {
    if (selectDate && events.length > 0) {
      const selectedEvents = events.filter(item => {
        const eventDate = item.date.split('T')[0];
        return eventDate === selectDate;
      });
      setSelectedEvents(selectedEvents);
    } else {
      setSelectedEvents([]);
    }
  }, [selectDate, events]);

  const handleMeetingLinkPress = url => {
    Linking.openURL(url);
  };

  const handleFileLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />

        <View style={styles.subContainer}>
          <Text style={styles.heading}>Calendar</Text>
          <Calendar
            onDayPress={day => {
              setSelectDate(day.dateString);
            }}
            markedDates={{
              [selectDate]: {
                selected: true,
                selectedColor: 'rgba(255, 189, 89, 1)',
                disableTouchEvent: true,
              },
            }}
            hideExtraDays={true}
          />
          <View style={styles.selectDateContainer}>
            <Text style={styles.selectDateText}>
              {selectDate ? selectDate : 'No date selected'}
            </Text>
          </View>

          {selectedEvents.map((item, index) => (
            <View key={index} style={styles.itemsContainer}>
              <Text style={styles.topicTxt}>{item.title}</Text>
              <View style={styles.items}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.typeTxt}>Type: </Text>
                  <Text style={{fontFamily: 'Nunito-Regular', fontSize: 16}}>
                    {item.event_type}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image source={IMAGES.clock} />
                  <Text style={styles.imgTxt}>{item.time}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={IMAGES.location} />
                  <Text style={styles.imgTxt}>{item.location}</Text>
                </View>
              </View>
              <Text style={styles.descriptionTxt}>{item.description}</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text style={styles.subContainerMeetingText}>Meeting URL:</Text>
                <TouchableOpacity
                  onPress={() => handleMeetingLinkPress(item.meeting_url)}>
                  <Text style={styles.url}>{item.meeting_url}</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: '#000000',
                  marginBottom: 10,
                  marginTop: 10,
                }}>
                Pitch Deck:
                <View>
                  <TouchableOpacity
                  // onPress={() => handleFileLinkPress(item.pdf_url)}
                  >
                    <Image source={IMAGES.doc} />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                  // onPress={() => handleFileLinkPress(item.pdf_url)}
                  >
                    <Image source={IMAGES.pdf} />
                  </TouchableOpacity>
                </View>
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Schedule;
