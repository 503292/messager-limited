import user1 from "./assets/img/users/user1.png";
import user2 from "./assets/img/users/user2.png";
import user3 from "./assets/img/users/user3.png";
import user4 from "./assets/img/users/user4.png";
import user5 from "./assets/img/users/user5.png";
import user6 from "./assets/img/users/user6.png";
import user7 from "./assets/img/users/user7.png";

export default [
  {
    id: "1",
    imgUrl: user1,
    userName: "Sarah Freeman",
    userInfo: "Excepteur sint occae...",
    dateTime: "9:32",
    online: true,
    voice: true,

    messages: [],
  },
  {
    id: "2",
    imgUrl: user2,
    userName: "Miranda Hops",
    userInfo: "Excepteur sint occae...",
    dateTime: "9:32",
    online: true,
    voice: false,
    messages: [],
  },
  {
    id: "3",
    imgUrl: user3,
    userName: "Barry Callebaut",
    userInfo: "Nemo enim ipsam volupta…",
    dateTime: "22:01",
    online: false,
    voice: true,
    messages: [],
  },
  {
    id: "4",
    imgUrl: user4,
    userName: "Stacey Dosh",
    userInfo: "Ut enim ad minima veniam…",
    dateTime: "9:15",
    online: true,
    voice: true,
    messages: [
      {
        message: "On the other hand, we denounce with righteous indignation! ",
        imgUserMessage: user4,
        time: "01:14",
      },
      {
        message: "Which is the same as saying?",
        imgUserMessage: "",
        time: "01:38",
      },
      {
        message:
          "But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures ",
        imgUserMessage: user4,
        time: "01:14",
      },
      {
        message: "To take a trivial example? which of us ever undertakes)",
        imgUserMessage: "",
        time: "01:38",
      },
    ],
  },
  {
    id: "5",
    imgUrl: user5,
    userName: "Michael Kors",
    userInfo: "To take a trivial example…",
    dateTime: "10:25",
    online: false,
    voice: true,
    messages: [],
  },
  {
    id: "6",
    imgUrl: user6,
    userName: "Johny Cash",
    userInfo: "Great explorer of the truth…",
    dateTime: "10:25",
    online: true,
    voice: true,
    messages: [],
  },
  {
    id: "7",
    imgUrl: user7,
    userName: "Stacey Dosh",
    userInfo: "Ut enim ad minima veniam…",
    dateTime: "08:53",
    online: false,
    voice: true,
    messages: [],
  },
];
