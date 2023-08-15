//WORKING BACKUP
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import './AuthStatus.css';

export const AuthStatus = () => {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tokenParameterValue = urlParams.get('access_token');
    const syncTokenValue = urlParams.get('sync_token');
    const userTokenValue = urlParams.get('user_token');

    console.log(`token - ` + tokenParameterValue);
    console.log(`syncIdParameterValue - ` + syncTokenValue);

    if (tokenParameterValue && syncTokenValue && userTokenValue) {
      Cookies.set('access_token', tokenParameterValue);
      Cookies.set('sync_token', syncTokenValue);
      Cookies.set('user_token', userTokenValue);
    }

    let tempNameParam = urlParams.get("name");
    if(tempNameParam === undefined || tempNameParam === null)
    tempNameParam = "Аллахверди";

    fetch('https://online.domznaniy.school/accounts/get-name/', {
      method: 'GET',
      headers: {
        'Authorization': `Token ${syncTokenValue}`
      }
    }).then(r => {console.log("Response to get-name:"); console.log(r.text())});

    fetch(`https://online.domznaniy.school/accounts/get-name-by-part/?part_fio=${tempNameParam}`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${syncTokenValue}`
      }
    }).then(r => {console.log("Response to get-name-by-part"); console.log(r.text())});

    
    

  }, [location.search]);

  //TODO: Показывать ошибку, если что-то пошло не так
  return (
    <div className="container">
      <div className="content">
        <h1>Вы успешно авторизованы и можете вернуться в игру!</h1>
      </div>
    </div>
  );
};


//Пока оставил, жду ответа Николая
// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import './AuthStatus.css';

// export const AuthStatus = () => {
//   const location = useLocation();

//   useEffect(() => {

//     const urlParams = new URLSearchParams(location.search);
//     const tokenParameterValue = urlParams.get('access_token');
//     const syncTokenValue = urlParams.get('sync_token');

//     if (tokenParameterValue && syncTokenValue) {
//       Cookies.set('access_token', tokenParameterValue);
//       Cookies.set('syncTokenValue', syncTokenValue);
//     }

//     console.log(`Sessionid cookie - ` + Cookies.get("sessionid"));


//     //или https://online.domznaniy.school/accounts/login/?next=/
//     fetch('https://online.domznaniy.school/accounts/sso-firebase-authorize/?sso-next=https://games.domznaniy.school/accounts/login/', {
//       method: 'GET',
//       mode: 'no-cors',
//       credentials: 'include', // This includes cookies in the request
//       headers: {
//         "Authorization": `Token ${syncTokenValue}`
//       }
//     })
//       .then(response => {
//         console.log("Response: " + response);
//         console.log("response.text() - " + response.text());
//         console.log("response json - " + JSON.stringify(response));
//         console.log("response.text json - " + JSON.stringify(response.text()));

//         const cookies = document.cookie.split(';');
//         let csrfToken = null;
//         cookies.forEach((cookie) => {
//           console.log("Next cookit: " + cookie);
//           const parts = cookie.trim().split('=');
//           if (parts[0] === 'csrftoken') {
//             csrfToken = parts[1];
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch CSRF token');
//         } else {
//           console.log("response is ok. resonse: " + response.text());



//         }
//         return response.text();
//       })
//       .then(responseText => {
//         console.log("response text: " + responseText);
//       })
//       .catch(error => {
//         console.error('Error during login GET request:', error);
//       });

//   }, [location.search]);

//   //TODO: Показывать ошибку, если что-то пошло не так
//   return (
//     <div className="container">
//       <div className="content">
//         <h1>Вы успешно авторизованы и можете вернуться в игру!</h1>
//       </div>
//     </div>
//   );
// };











//WORKING BACKUP
// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import './AuthStatus.css';

// export const AuthStatus = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tokenParameterValue = urlParams.get('access_token');
//     const syncIdParameterValue = urlParams.get('encrypted_sync_id');

//     if (tokenParameterValue && syncIdParameterValue) {
//       Cookies.set('access_token', tokenParameterValue);
//       Cookies.set('encrypted_sync_id', syncIdParameterValue);
//     }

//     console.log(`Sessionid cookie - ` + Cookies.get("sessionid"));
//   }, [location.search]);

//   //TODO: Показывать ошибку, если что-то пошло не так
//   return (
//     <div className="container">
//       <div className="content">
//         <h1>Вы успешно авторизованы и можете вернуться в игру!</h1>
//       </div>
//     </div>
//   );
// };











// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import './AuthStatus.css';

// export const AuthStatus = () => {
//   const location = useLocation();

//   useEffect(() => {

//     const urlParams = new URLSearchParams(location.search);
//     const tokenParameterValue = urlParams.get('access_token');
//     const syncIdParameterValue = urlParams.get('encrypted_sync_id');

//     if (tokenParameterValue && syncIdParameterValue) {
//       Cookies.set('access_token', tokenParameterValue);
//       Cookies.set('encrypted_sync_id', syncIdParameterValue);
//     }

//     console.log(`Sessionid cookie - ` + Cookies.get("sessionid"));


//     //или https://online.domznaniy.school/accounts/login/?next=/
//     fetch('https://online.domznaniy.school/accounts/sso-firebase-authorize/?sso-next=https://games.domznaniy.school/accounts/login/', {
//       method: 'GET',
//       mode: 'no-cors',
//       credentials: 'include', // This includes cookies in the request
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch CSRF token');
//         }else{
//           console.log("response is ok. resonse: " + response.text());
//         }
//         return response.text();
//       })
//       .then(responseText => {
//         console.log("response text: " + responseText);
//         // Parse CSRF token from the response text or cookies
//         const csrfToken = parseCsrfToken(responseText);
//         // Perform the login using the CSRF token
//         performLogin(csrfToken);
//       })
//       .catch(error => {
//         console.error('Error during login GET request:', error);
//       });

//     // Helper function to parse CSRF token from the response text or cookies
//     const parseCsrfToken = (responseText: string) => {
//       console.log("Response text: " + responseText);
//       // Implement your logic to extract the CSRF token from the response text or cookies
//       // For example, you might use a regular expression or some other parsing method
//       // and return the CSRF token as a string
//       return 'bEuQiuXsuXpZXE38QlAMezTdFrSUY7kSDUpaftJr6ehq0f71W04qWCG9VXLmdDMW';
//     };

//     // Helper function to perform login using POST request with CSRF token
//     const performLogin = (csrfToken: string) => {
//       const userData = {
//         username: 'your_username',
//         password: 'your_password',
//         csrf_token: csrfToken,
//       };

//       // Perform the login POST request with the user data and CSRF token
//       fetch('https://online.domznaniy.school/accounts/sso-firebase-authorize/?sso-next=https://games.domznaniy.school/accounts/login/', {
//         method: 'POST',
//         credentials: 'include', // This includes cookies in the request
//         headers: {
//           'Content-Type': 'application/json',
//           'Cookie': userData.csrf_token
//         },
//         body: JSON.stringify(userData),
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to perform login');
//           }
//           console.log(`74. response - ` + response);
//           // Handle the login response as needed (e.g., redirect to the second domain)
//         })
//         .catch(error => {
//           console.error('Error during login POST request:', error);
//         });
//     };
//   }, [location.search]);

//   //TODO: Показывать ошибку, если что-то пошло не так
//   return (
//     <div className="container">
//       <div className="content">
//         <h1>Вы успешно авторизованы и можете вернуться в игру!</h1>
//       </div>
//     </div>
//   );
// };











//WORKING BACKUP
// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import './AuthStatus.css';

// export const AuthStatus = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tokenParameterValue = urlParams.get('access_token');
//     const syncTokenValue = urlParams.get('sync_token');

//     console.log(`token - ` + tokenParameterValue);
//     console.log(`syncIdParameterValue - ` + syncTokenValue);

//     if (tokenParameterValue && syncTokenValue) {
//       Cookies.set('access_token', tokenParameterValue);
//       Cookies.set('encrypted_sync_id', syncTokenValue);
//     }

//     console.log(`Sessionid cookie - ` + Cookies.get("sessionid"));
//   }, [location.search]);

//   //TODO: Показывать ошибку, если что-то пошло не так
//   return (
//     <div className="container">
//       <div className="content">
//         <h1>Вы успешно авторизованы и можете вернуться в игру!</h1>
//       </div>
//     </div>
//   );
// };
