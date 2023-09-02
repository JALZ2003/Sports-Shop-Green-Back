import 'dotenv/config.js';
import '../../config/database.js';
import Creator from '../Creator.js';

const creators = [{
    name: "Jannus",
    lastname: "Largo",
    company: "Nike",
    city: "Tulua",
    country: "Colombia",
    user_id: "64f3a791fadd491be7fb1167",
}, {
    name: "Santiago",
    lastname: "Vanegas",
    company: "Adidas",
    city: "Medellin",
    country: "Colombia",
    user_id: "64f3a791fadd491be7fb1168",
}, {
    name: "Andrea",
    lastname: "Prada",
    company: "Sneakers",
    city: "Villavicencio",
    country: "Colombia",
    user_id: "64f3a791fadd491be7fb1169",
},]

Creator.insertMany(creators);