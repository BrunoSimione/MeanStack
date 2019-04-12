
const eletronicsData = [
    {
      brand: "Samsung",
      price: 1200.00,
      model: "TV 50 Turbo",
      tags: ["TV", "LG", "SMARTV"],
      description: {
          height: "80cm",
          weight: "120cm"
      }
    },
    {
      brand: "LG",
      price: 750.10,
      model: "Soundbar XY4561",
      tags: ["SOUNDBAR", "LG"],
      description: {
          height: "20cm",
          weight: "75cm",
          depth: "20cm",
          watts: "50"
      }
    },
    {
      brand: "Sony",
      price: 850.20,
      model: "Home Theater",
      tags: ["HOME THEATER", "SONY", "SOUND"],
      description: {
          height: "20cm",
          weight: "50cm",
          depth: "20cm",
          watts: "75"
      },
      warranty:"2 Years"
    }
  ];
  
  db.eletronics.insertMany(eletronicsData);