let Authentication_Key = '';
const BASE_URL = 'http://54.190.192.105:9185/angel';

// export const registerUser = async userData => {
//   try {
//     const response = await fetch('http://54.190.192.105:9185/angel/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });
//     const data = await response.json();
//     if (data.status) {
//       await loginUser(userData.email, userData.password);
//     }
//     return data;
//   } catch (error) {
//     console.error('Error registering user:', error);
//     throw error;
//   }
// };

// export const loginUser = async (email, password) => {
//   try {
//     const response = await fetch(`${BASE_URL}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(email, password),
//     });
//     if (!response.ok) {
//       console.log('Failed to login');
//       throw new Error('Login failed');
//     }
//     const data = await response.json();
//     Authentication_Key = data.Token;
//     // console.log('DATA.....', data.Token);
//     return data;
//   } catch (error) {
//     console.log('Error:', error.message);
//     throw error;
//   }
// };

// export const fetchStates = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/get_all_state`);
//     const states = await response.json();
//     // console.log('States:', states);
//     return states.result;
//   } catch (err) {
//     console.log('Error fetching states:', err);
//     throw err;
//   }
// };

// export const forumCategory = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/get_all_forum_Category`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application.json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch forum data');
//     }

//     const forumData = await response.json();
//     return forumData;
//   } catch (error) {
//     throw error;
//   }
// };

// export const forumAnswer = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/update_question_data`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: Authentication_Key,
//       },
//     });

//     console.log(response, 'response');
//     console.log(response.ok, 'responseOK');
//     if (!response.ok) {
//       const forumAnswer = await response.json();
//       console.log(forumAnswer, 'forumAnswer');
//     }
//   } catch (error) {
//     throw new Error('Failed to fetch forumAnswer');
//   }
// };

// export const schedule = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/get_Events`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // console.log(response, 'nwnbuwugw');
//     if (!response.ok) {
//       throw new Error('Failed to fetch event data');
//     }
//     const eventsData = await response.json();
//     console.log(eventsData, '>>>>>>>>>>EData');
//     return eventsData;
//   } catch (error) {
//     console.log('error:', error);
//     throw error;
//   }
// };

// export const portfolio = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/get_all_portfolio`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: Authentication_Key,
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch portfolio data');
//     }

//     const portfolioData = await response.json();
//     return portfolioData;
//   } catch (error) {
//     throw error;
//   }
// };

// export const referral = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/referral/list`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: Authentication_Key,
//       },
//     });

//     console.log(response, '..//,./,,response');
//     if (!response.ok) {
//       throw new Error('Failed to fetch referral data');
//     }
//     const referralData = await response.json();
//     // console.log(referralData);
//     return referralData;
//   } catch (error) {
//     throw error;
//   }
// };
