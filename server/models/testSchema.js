const mongoose = require("mongoose");
const Review = require("./Review");
const Product = require("./Product");
const faker = require("faker");
const bcrypt = require("bcryptjs");

const cleanData = async () => {
  try {
    await mongoose.connection.dropDatabase();
  } catch (error) {
    console.log(error);
  }
};

const images = [
  {
    name: "Gỏi Cuốn",
    url:
      "https://www.marionskitchen.com/wp-content/uploads/2019/08/Vietnamese-style-Cold-Rolls1.jpg",
    price: 50,
    category: "VnCuisine",
  },
  {
    name: "Dalgona Cafe",
    url:
      "https://i.pinimg.com/564x/df/a2/8d/dfa28dbe16f98855de43fe72345ab569.jpg",
    price: 65,
    category: "Cafe",
  },
  {
    name: "Bò Kho",
    url:
      "https://pupswithchopsticks.com/wp-content/uploads/bo-kho-portrait-new.jpg",
    price: 120,
    category: "VnCuisine",
  },

  {
    name: "Cơm Tấm",
    url:
      "https://www.cooking-therapy.com/wp-content/uploads/2020/06/Com-Suon-5-scaled.webp",
    price: 50,
    category: "VnCuisine",
  },

  {
    name: "Bánh Mì",
    url:
      "https://i.pinimg.com/originals/b5/9a/c2/b59ac265cc9d8af62bc37b611748de63.jpg",
    price: 20,
    category: "Bread",
  },

  {
    name: "Cafe Sữa Đá",
    url:
      "https://i.pinimg.com/564x/58/77/42/58774250675856db4cec25fec974f018.jpg",
    price: 20,
    category: "Cafe",
  },

  {
    name: "Chè Dưỡng Nhan",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcpeFKgHsH7R-A5vL8TTrPHqh1mL8aHYGCw&usqp=CAU",
    price: 20,
    category: "dessert",
  },

  {
    name: "Trà đào cam xả",
    url:
      "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1546250129547-1N2EH9UHV68A27A7XFJL/ke17ZwdGBToddI8pDm48kPxsHqATejRA5moR2RGgs0AUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z24_hv09MkdbP-FVwyWw_5DHlgnoSQtDWLhpO1Tfk-8aY6liCGkj4dr9PBmyqqYlee/chup-anh-mon-an-com-ga-thuong-hai-3.jpg",
    price: 35,
    category: "tea",
  },

  {
    name: "Soda Dâu",
    url:
      "https://thismessisours.com/wp-content/uploads/2014/07/strawberry-soda-1-4-1.webp",
    price: 35,
    category: "drink",
  },
  {
    name: "Trà Dâu",
    url:
      "https://i.pinimg.com/originals/79/24/60/792460b574de9c5ce2dadccc0fe3076e.jpg",
    price: 40,
    category: "drink",
  },
  {
    name: "Trà Sữa Trân Châu",
    url:
      "https://image.tuoitreplus.com/upload/2021/01/11/660/5-loai-thuc-pham-1-inmqux.jpg",
    price: 30,
    category: "tea",
  },
  {
    name: "Café Phin",
    url:
      "https://lh3.googleusercontent.com/osa2IuRN0BRHKue9CUf-28JnczI0FO2TXNXPzL57RmJ1gmUtpxgPcM-4Ln7Vb4Zs7LorFGE=s85",
    price: 20,
    category: "Cafe",
  },
  {
    name: "Chè Khúc Bạch ",
    url:
      "https://media.cooky.vn/recipe/g2/13033/s/recipe13033-635685093483911595.jpg",
    price: 30,
    category: "dessert",
  },
  {
    name: "Chè Khoai Đài Loan",
    url:
      "https://afamilycdn.com/2019/6/25/che-khoai-deo-6-1561476865028287150704-crop-15614772986531986203180.jpg",
    price: 20,
    category: "dessert",
  },
  {
    name: "Tàu Hủ Nước Đường",
    url:
      "https://i.pinimg.com/originals/7d/b7/ba/7db7ba751f6505a6c5ed7daf5deb9e21.jpg",
    price: 20,
    category: "dessert",
  },
  {
    name: "Tiramisu",
    url: "https://cf.shopee.vn/file/1da213cb26e04ea5551e37a4d519b645",
    price: 35,
    category: "dessert",
  },
  {
    name: "Chè Trôi Nước",
    url:
      "https://giadinh.tv/wp-content/uploads/2020/09/cach-nau-che-troi-nuoc-5-1.jpg",
    price: 20,
    category: "dessert",
  },
  {
    name: "Cơm Hấp Lá Sen",
    url:
      "https://200monanchay.weebly.com/uploads/1/1/1/8/111814259/mon-com-chay-goi-la-sen_orig.jpg",
    price: 120,
    category: "VnCuisine",
  },
  {
    name: "Bánh Khọt",
    url:
      "https://cdn.daylambanh.edu.vn/wp-content/uploads/2019/12/banh-khot-mien-nam-hap-dan-600x400.jpg",
    price: 55,
    category: "VnCuisine",
  },
];

const createRandomProduct = async (productNum) => {
  try {
    console.log(`CREATING ${productNum} products`);
    console.log("--------------------------");
    products = [];
    for (let i = 0; i < productNum; i++) {
      const product = await Product.create({
        name: images[i].name,
        price: images[i].price,
        images: images[i].url,
        category: images[i].category,
      });
      products.push(product);
    }
    console.log("PRODUCTS CREATED---------------");
    return products;
  } catch (error) {
    console.log(error);
  }
};

const main = async (genData = false) => {
  if (genData) {
    await cleanData();

    const products = await createRandomProduct(images.length);
    // const reviews = await createRandomReviews(blogs, users);
  }
};

main();
