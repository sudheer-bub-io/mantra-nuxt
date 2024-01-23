import { defineStore } from "pinia";

export const accessFormsData = defineStore('formsdata', () => {
  const collegeData = [
    {
      id: 1,
      type: "text",
      name: "referenceid",
      placeholder: "refernnce Id",
      value: ''
    },
    {
      id: 2,
      type: "text",
      name: "name",
      placeholder: "user Name",
      value: ''
    },
    {
      id: 3,
      type: "text",
      name: "email",
      placeholder: "Enter Your Email",
      value: ''
    },
    {
      id: 4,
      type: "text",
      name: "studentid",
      placeholder: "Student Id",
      value: ''
    },
  ]
  const studentData = [
    {
      id: 1,
      type: "text",
      name: "studentid",
      placeholder: "Studentid",
      value: ''
    },
    {
      id: 2,
      type: "text",
      name: "name",
      placeholder: "userName",
      value: ''
    },
    {
      id: 3,
      type: "text",
      name: "email",
      placeholder: "EnterEmail",
      value: ''
    },
    {
      id: 4,
      type: "textArea",
      name: "enterquery",
      placeholder: "Enter Query",
      value: ''
    },
    {
      id: 5,
      type: "text",
      name: "entersomething",
      placeholder: "EnterSomething",
      value: ''
    },
  ]
  const usersInfo = {
    storedUsersInfo: [],
    initialize: () => {
      if (typeof localStorage !== 'undefined') {
        usersInfo.storedUsersInfo = JSON.parse(localStorage.getItem('CollegeData')) || [];
      }
    },
    storeUser: (user, setItem) => {
      usersInfo.storedUsersInfo.push(user);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(setItem, JSON.stringify(usersInfo.storedUsersInfo));
      }
    },
  };

  usersInfo.initialize();

  return { collegeData, studentData, usersInfo};
}); 

export const AccessFormData = defineStore('accessFormData', () => {
  const loginData = [
    {
      id: 1,
      type: 'text',
      name: 'username',
      placeholder: 'Username',
      value: ''
    },
    {
      id: 2,
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      value: ''
    },
  ];

  const registerData = [
    {
      id: 1,
      type: 'text',
      name: 'username',
      placeholder: 'Username',
      value: ''
    },
    {
      id: 2,
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      value: ''
    },
    {
      id: 3,
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      value: ''
    },
  ];

  const userData = {
    loggedInUser: null,
    registeredUsers: [],

    initialize: () => {
      if (typeof localStorage !== 'undefined') {
        userData.registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      }
    },

    storeUser: (user) => {
      userData.registeredUsers.push(user);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('registeredUsers', JSON.stringify(userData.registeredUsers));
      }
    },

    checkLogin: (username, password) => {
      return userData.registeredUsers.find(user => user.username === username && user.password === password);
    },
  };

  userData.initialize();

  return { loginData, registerData, userData };
});

export const NavData = defineStore('navData', () => {

  const defaultNav = [
    {
      id: 1,
      toAddress: '/userAuthentication/register',
      navName: "Register"
    },
    {
      id: 2,
      toAddress: '/userAuthentication/login',
      navName: "Login"
    },
  
  ]

  const customNav = [
    {
      id: 1,
      toAddress: '/all-users',
      navName: "all-users"
    },
    {
      id: 2,
      toAddress: '/forms',
      navName: "forms"
    },
    {
      id: 3,
      toAddress: '/rock-paper-scissor',
      navName: "rps Game"
    },
    {
      id: 4,
      toAddress: '/crud-users',
      navName: "crud users"
    },
    {
      id: 3,
      toAddress: '/quote',
      navName: "Quote"
    },
    {
      id: 5,
      toAddress: '/userAuthentication/login',
      navName: "LogOut"
    },
  ]
  return {defaultNav,customNav}
})

