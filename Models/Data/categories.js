import 'dotenv/config.js';
import '../../config/database.js';
import Category from '../Category.js';

const categories = [{
    name: "Accessories",
    color: "#E67F0D",
    admin_id: "64f3a791fadd491be7fb116a",
}, {
    name: "Sportswear",
    color: "#FFAE03",
    admin_id: "64f3a791fadd491be7fb116a",
}, {
    name: "Sports shoes",
    color: "#655A7C",
    admin_id: "64f3a791fadd491be7fb116a",
}, {
    name: "Sports backpacks",
    color: "#AB92BF",
    admin_id: "64f3a791fadd491be7fb116a",
}, {
    name: "Sports Equipment",
    color: "#AFC1D6",
    admin_id: "64f3a791fadd491be7fb116a",
},]

Category.insertMany(categories);
