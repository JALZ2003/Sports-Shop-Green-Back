import 'dotenv/config.js';
import '../../config/database.js';
import bcryptjs from 'bcryptjs';
import User from '../User.js';

const users = [{
    username: "Gerardo",
    email: "gerardo@tg.com",
    password: bcryptjs.hashSync("prueba1234", 10),
    role: 0,
    photo: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    active: false,
}, {
    username: "Jannus",
    email: "jannus@tg.com",
    password: bcryptjs.hashSync("prueba1234", 10),
    role: 1,
    photo: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    active: false,
},
{
    username: "Santiago",
    email: "santiago@tg.com",
    password: bcryptjs.hashSync("prueba1234", 10),
    role: 1,
    photo: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    active: false,
},
{
    username: "Andrea",
    email: "andrea@tg.com",
    password: bcryptjs.hashSync("prueba1234", 10),
    role: 1,
    photo: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
    active: false,
},
{
    username: "NataliaG",
    email: "nataliag@tg.com",
    password: bcryptjs.hashSync("prueba1234", 10),
    role: 2,
    photo: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
    active: false,
},
{
    username: "NataliaB",
    email: "nataliab@tg.com",
    password: bcryptjs.hashSync("prueba1234", 10),
    role: 2,
    photo: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
    active: false,
},
]

User.insertMany(users);