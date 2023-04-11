const { User } = require("../models");

module.exports = async () => {
  const users = [
    {
      firstname: "Lucía",
      lastname: "García",
      email: "lucia.garcia@gmail.com",
      password: "1234",
      address: "Calle del Sol 28",
      phone: "611385728",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "Santiago",
      lastname: "Fernández",
      email: "santiago.fernandez@gmail.com",
      password: "1234",
      address: "Calle de la Paz 15",
      phone: "673842675",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "María",
      lastname: "Martínez",
      email: "maria.martinez@gmail.com",
      password: "1234",
      address: "Avenida de la Libertad 5",
      phone: "612345678",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "Adrián",
      lastname: "Gómez",
      email: "adrian.gomez@gmail.com",
      password: "1234",
      address: "Plaza Mayor 10",
      phone: "677483920",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Andrea",
      lastname: "Hernández",
      email: "andrea.hernandez@gmail.com",
      password: "1234",
      address: "Calle del Cid 3",
      phone: "611324568",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "David",
      lastname: "Pérez",
      email: "david.perez@gmail.com",
      password: "1234",
      address: "Calle de la Estrella 12",
      phone: "689345678",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Alicia",
      lastname: "González",
      email: "alicia.gonzalez@gmail.com",
      password: "1234",
      address: "Avenida de la Constitución 8",
      phone: "678567894",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "Jorge",
      lastname: "Rodríguez",
      email: "jorge.rodriguez@gmail.com",
      password: "1234",
      address: "Calle Mayor 20",
      phone: "634859273",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Ana",
      lastname: "Sánchez",
      email: "ana.sanchez@gmail.com",
      password: "1234",
      address: "Calle de la Luna 14",
      phone: "654890124",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "Carlos",
      lastname: "López",
      email: "carlos.lopez@gmail.com",
      password: "1234",
      address: "Calle del Sol 16",
      phone: "689078356",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Elena",
      lastname: "Giménez",
      email: "elena.gimenez@gmail.com",
      password: "1234",
      address: "Calle de la Playa 9",
      phone: "612345689",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "José",
      lastname: "Muñoz",
      email: "jose.munoz@gmail.com",
      password: "1234",
      address: "Avenida del Mar 23",
      phone: "677483923",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Laura",
      lastname: "Romero",
      email: "laura.romero@gmail.com",
      password: "1234",
      address: "Calle de la Estación 6",
      phone: "611324579",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "Juan",
      lastname: "Santos",
      email: "juan.santos@gmail.com",
      password: "1234",
      address: "Calle del Pilar 2",
      phone: "689345678",
      avatar: "Profile_defaultMale.png",
    },
    {
      firstname: "Marta",
      lastname: "Jiménez",
      email: "marta.jimenez@gmail.com",
      password: "1234",
      address: "Calle del Río 18",
      phone: "678567893",
      avatar: "Profile_defaultFemale.png",
    },
    {
      firstname: "Pedro",
      lastname: "Ruiz",
      email: "pedro.ruiz@gmail.com",
      password: "1234",
      address: "Plaza de la Constitución 7",
      phone: "634859272",
      avatar: "Profile_defaultMale.png",
    },
  ];

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
