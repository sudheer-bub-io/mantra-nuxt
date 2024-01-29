import { defineStore } from "pinia";

export const AccessFormData = defineStore('accessFormData', () => {
  const loginData = [[
    { id: 1, type: 'text', name: 'username', placeholder: 'Username', value: '' },
    { id: 2, type: 'password', name: 'password', placeholder: 'Password', value: '' },
  ],"Login","Login To Your Account "];
  const registerData = [  [
    { id: 1, type: 'text', name: 'username', placeholder: 'Username', value: '' },
    { id: 2, type: 'email', name: 'email', placeholder: 'Email', value: '' },
    { id: 3, type: 'password', name: 'password', placeholder: 'Password', value: '' },
  ],"Register","Register to Login"];

  const collegeData = [[
    { id: 1, type: "text", name: "referenceid", placeholder: "refernnce Id", value: '' },
    { id: 2, type: "text", name: "name", placeholder: "user Name", value: '' },
    { id: 3, type: "text", name: "email", placeholder: "Enter Your Email", value: '' },
    { id: 4, type: "text", name: "studentid", placeholder: "Student Id", value: '' },
  ], "collegeForm", ['reference', 'Name', 'Email', 'Student'],"Submit"
  ];

  const studentData = [[
    { id: 1, type: "text", name: "studentid", placeholder: "Studentid", value: '' },
    { id: 2, type: "text", name: "name", placeholder: "userName", value: '' },
    { id: 3, type: "text", name: "email", placeholder: "EnterEmail", value: '' },
    { id: 4, type: "textArea", name: "enterquery", placeholder: "Enter Query", value: '' },
    { id: 5, type: "text", name: "entersomething", placeholder: "EnterSomething", value: '' },
  ], "studentForm", ['studentid', 'Name', 'Email', 'query', 'password'],"Submit"];

  const userData = {
    loggedInUser: null,
    data: {
      registeredUsers: [],
      StudentData: [],
      CollegeData: [],
    },

    initialize: () => {
      if (typeof localStorage !== 'undefined') {
        for (const key in userData.data) {
          userData.data[key] = JSON.parse(localStorage.getItem(key)) || [];
        }
      }
    },
    storeUser: (user, formType) => {
      if (Object.keys(userData.data).includes(formType)) {
        console.log(formType)
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

  return { loginData, registerData, collegeData, studentData, userData};
});


export const NavData = defineStore('navData', () => {

  const defaultNav = [
    { id: 1, toAddress: '/userAuthentication/register', navName: "Register" },
    { id: 2, toAddress: '/userAuthentication/login', navName: "Login" },

  ]

  const customNav = [
    { id: 1, toAddress: '/all-users', navName: "all-users" },
    { id: 2, toAddress: '/forms', navName: "forms" },
    { id: 3, toAddress: '/rock-paper-scissor', navName: "rps Game" },
    { id: 4, toAddress: '/crud-users', navName: "crud users" },
    { id: 3, toAddress: '/quote', navName: "Quote" },
    { id: 6, toAddress: '/pokemon-cards', navName: "Pokemon" },
    { id: 5, toAddress: '/userAuthentication/login', navName: "LogOut" },

  ]
  return { defaultNav, customNav }
})
