import { defineStore } from "pinia";

export const AccessFormData = defineStore('accessFormData', () => {
  const loginData = [[
    { id: 1, type: 'text', name: 'username', placeholder: 'Username', value: '' },
    { id: 2, type: 'password', name: 'password', placeholder: 'Password', value: '' },
  ], "Login", "Login To Your Account ", ["Don't Have an Account", "/register", "signUp"]];
  const registerData = [[
    { id: 1, type: 'text', name: 'username', placeholder: 'Username', value: '' },
    { id: 2, type: 'email', name: 'email', placeholder: 'Email', value: '' },
    { id: 3, type: 'password', name: 'password', placeholder: 'Password', value: '' },
  ], "Register", "Register to Login", ["Already have an Account", "/", "logIn"]];

  const collegeData = [[
    { id: 1, type: "text", name: "referenceid", placeholder: "refernnce Id", value: '' },
    { id: 2, type: "text", name: "name", placeholder: "user Name", value: '' },
    { id: 3, type: "text", name: "email", placeholder: "Enter Your Email", value: '' },
    { id: 4, type: "text", name: "studentid", placeholder: "Student Id", value: '' },
  ], "collegeForm", ['reference', 'Name', 'Email', 'studentid'], "Submit"
  ];

  const studentData = [[
    { id: 1, type: "text", name: "studentid", placeholder: "Studentid", value: '' },
    { id: 2, type: "text", name: "name", placeholder: "userName", value: '' },
    { id: 3, type: "text", name: "email", placeholder: "EnterEmail", value: '' },
    { id: 4, type: "textArea", name: "enterquery", placeholder: "Enter Query", value: '' },
    { id: 5, type: "text", name: "entersomething", placeholder: "EnterSomething", value: '' },
  ], "studentForm", ['studentid', 'Name', 'Email', 'query', 'password'], "Submit"];

  const userData = {
    loggedInUser: null,
    data: {
      registeredUsers: [],
      StudentData: [
        {studentid: '433', name: 'sudheer', email: 'sudheerjanga9999@gmail.com', query: 'some query', password: 'within2years'},
        {studentid: '65', name: 'hemanth', email: 'hemanth@gmail.com', query: 'want to be cricketer', password: 'futuregoal'},
        {studentid: '32', name: 'susmanth', email: 'susmanth@gmail.com', query: 'want to be gamer', password: 'chill'},
        {studentid: '567', name: 'deekshi', email: 'deekshi@gmail.com', query: 'want to complete my phd', password: 'flyHigh'},
        {studentid: '11', name: 'likky', email: 'likky@gmail.com', query: 'want to study mba', password: 'skydiver'},
      ],
      CollegeData: [{reference: '33', name: 'sudheer', email: 'sudheerjanga9999@gmail.com', studentid: '987'},
      {reference: '32', name: 'lokesh', email: 'lokesh@gmail.com', studentid: '955'},
      {reference: '432', name: 'yakshi', email: 'yakhi@gmail.com', studentid: '255'},
      {reference: '232', name: 'gnani', email: 'gnani@gmail.com', studentid: '655'}
    ],
    },

    initialize: () => {
      if (typeof localStorage !== 'undefined') {
        for (const key in userData.data) {
          if(key !=='registeredUsers'){
            localStorage.setItem(key, JSON.stringify(userData.data[key]));
          }
          userData.data[key] = JSON.parse(localStorage.getItem(key)) || [];
        }
      }
    },
    storeUser: (user, formType) => {
      if (Object.keys(userData.data).includes(formType)) {
        userData.data[formType].push(user);

        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(formType, JSON.stringify(userData.data[formType]));
        }
      } else {
        console.error(`Invalid formType: ${formType}`);
      }
    },
    checkLogin: (username, password) => {
      return userData.data['registeredUsers'].find(user => user.username === username && user.password === password);
    },

  };

  userData.initialize();

  return { loginData, registerData, collegeData, studentData, userData };
});


export const NavData = defineStore('navData', () => {

  const defaultNav = [
    { id: 1, toAddress: '/register', navName: "Register" },
    { id: 2, toAddress: '/', navName: "Login" },

  ]

  const customNav = [
    { id: 1, toAddress: '/all-users', navName: "all-users" },
    { id: 2, toAddress: '/forms', navName: "forms" },
    { id: 3, toAddress: '/rock-paper-scissor', navName: "rps Game" },
    { id: 4, toAddress: '/crud-users', navName: "crud users" },
    { id: 3, toAddress: '/quote', navName: "Quote" },
    { id: 6, toAddress: '/pokemon-cards', navName: "Pokemon" },
    { id: 5, toAddress: '/', navName: "LogOut" },
  ]
  return { defaultNav, customNav }
})
