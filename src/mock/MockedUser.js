

// login.api.js

const mockedUser = {
    id: '123',
    name: 'Wizeline',
    avatarUrl: 'https://images.app.goo.gl/JBVJnQbqAbZQdRMP6',
  };
  
  export default async function LoginApi(username, password) {   

    return new Promise((resolve, reject) => {
        
      setTimeout(() => {
        if (username === 'videouser' && password === '123') {
            console.log(mockedUser);
                     
          return resolve(mockedUser);
        }
        return reject(new Error('Username or password invalid'));
      }, 0);
    }) 
  }
