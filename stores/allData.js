import { defineStore } from "pinia";

export const accessFormsData = defineStore('alldata', () => {
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
    const loginData = [
        {
            id: 1,
            type: "text",
            name: "User Name",
            placeholder: "User Name"
        },
        {
            id: 2,
            type: "password",
            name: "password",
            placeholder: "••••••••"
        },
    ]
    const registerData = [
        {
            id: 1,
            type: "text",
            name: "User Name",
            placeholder: "User Name",
            value:"userName"
        },
        {
            id: 2,
            type: "Email",
            name: "Email",
            placeholder: "Email",
            value:"Email"
        },
        {
            id: 3,
            type: "password",
            name: "password",
            placeholder: "••••••••",
            value:"Password"
        }
    ]
    return { collegeData ,studentData,loginData,registerData};
  });