import React, {useState, useEffect, useCallback} from 'react';
import styles from './styles';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../../components/Header/Header';
import IMAGES from '../../assets/images';

const Chat = () => {
  //   const [newMessage, setNewMessage] = useState('');
  //   const [messages, setMessages] = useState([
  //     {id: 1, sender: 'John', message: 'Hi Nitika!', timestamp: '10:00 PM'},
  //     {id: 2, sender: 'Me', message: 'Hi John!', timestamp: '10:00 PM'},
  //   ]);

  //   const handleSendMessage = () => {
  //     if (newMessage.trim() === '') return; // Don't send empty messages
  //     const newId = messages.length + 1;
  //     const timestamp = new Date().toLocaleTimeString([], {
  //       hour: '2-digit',
  //       minute: '2-digit',
  //     });
  //     const newMessageObj = {
  //       id: newId,
  //       sender: 'Me',
  //       message: newMessage,
  //       timestamp,
  //     };
  //     setMessages([...messages, newMessageObj]);
  //     setNewMessage('');
  //   };

  //   const renderMessages = ({item}) => {
  //     const myMsg = item.sender === 'Me';
  //     return (
  //       <View style={[myMsg ? styles.myMsgContainer : styles.otherMsgContainer]}>
  //         <View
  //           style={[myMsg ? styles.myTxtContainer : styles.otherTxtContainer]}>
  //           <Text style={styles.message}>{item.message}</Text>
  //         </View>
  //         <Text style={styles.timestamp}>{item.timestamp}</Text>
  //       </View>
  //     );
  //   };

  //   return (
  //     <View style={styles.mainContainer}>
  //       <Header renderText="Nitika (CAN Admin)" renderImage={false} />

  //       <View style={styles.subContainer}>
  //         <FlatList
  //           data={messages}
  //           renderItem={renderMessages}
  //           keyExtractor={item => item.id.toString()}
  //           contentContainerStyle={styles.chatContainer}
  //         />

  //         <View style={styles.inputContainer}>
  //           <TextInput
  //             multiline
  //             value={newMessage}
  //             style={styles.txtInput}
  //             onChangeText={setNewMessage}
  //             placeholder="Type your message"
  //           />

  //           <TouchableOpacity style={styles.sendBtn} onPress={handleSendMessage}>
  //             <Image source={IMAGES.send} />
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello User',
        createdAt: new Date(),
        // quickReplies: {
        //   type: 'radio', // or 'checkbox',
        //   keepIt: true,
        //   values: [
        //     {
        //       title: '😋 Yes',
        //       value: 'yes',
        //     },
        //     {
        //       title: '📷 Yes, let me show you with a picture!',
        //       value: 'yes_picture',
        //     },
        //     {
        //       title: '😞 Nope. What?',
        //       value: 'no',
        //     },
        //   ],
        // },

        user: {
          _id: 2,
          name: 'Rahul Pandey',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            fontSize: 18,
            color: '#000000',
            fontFamily: 'Nunito-Regular',
          },
          left: {
            fontSize: 18,
            color: '#000000',
            fontFamily: 'Nunito-Regular',
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#0A49751A',
          },
          left: {
            backgroundColor: '#DADADA61',
          },
        }}
      />
    );
  };

  const renderTime = props => {
    return (
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#00000073',
          }}>
          {props.currentMessage.createdAt.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header renderText="Nitika (CAN Admin)" renderImage={false} />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
          name: 'N G',
        }}
        renderBubble={renderBubble}
        showAvatarForEveryMessage={true}
        showUserAvatar={true} // receiver avatar show
        renderAvatarOnTop={true} // avatar position
        isTyping={true}
        renderTime={renderTime}
        placeholder="Type your message"
        // alwaysShowSend={true} // send button always show
        // renderInputToolbar={CustomTextInput}
        // multiline={false}
        //   inverted={false}
        //   renderMessage={renderMessage}
        //   renderTicks={renderTicks}
        //   messageIdGenerator={() => messageIdGenerator(messages)}
        //   renderUsernameOnMessage={true}
        //   onLayout=

        //   imageProps={{
        //     resizeMode: 'cover',
        //     style: {width: 200, height: 200},
        //   }}
      />
    </View>
  );
};

export default Chat;
