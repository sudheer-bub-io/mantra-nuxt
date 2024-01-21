import { defineStore } from "pinia";

export const accessFormsData = defineStore('formsdata', () => {
    const collegeData = [
        {
            id: 1,
            type: "text",
            name: "reference Id",
            placeholder: "refernnce Id"
        },
        {
            id: 2,
            type: "text",
            name: "Name",
            placeholder: "user Name"
        },
        {
            id: 3,
            type: "text",
            name: "Email",
            placeholder: "Enter Your Email"
        },
        {
            id: 4,
            type: "text",
            name: "student Id",
            placeholder: "Student Id"
        },
    ]
    const studentData = [
        {
            id: 1,
            type: "text",
            name: "student Id",
            placeholder: "Student Id"
        },
        {
            id: 2,
            type: "text",
            name: "Name",
            placeholder: "user Name"
        },
        {
            id: 3,
            type: "text",
            name: "Email",
            placeholder: "Enter Your Email"
        },
        {
            id: 4,
            type: "textArea",
            name: "Enter Query",
            placeholder: "Enter Query"
        },
        {
            id: 5,
            type: "text",
            name: "Enter Something",
            placeholder: "Enter Something"
        },
    ]
    return { collegeData ,studentData,};
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

  