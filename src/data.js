const data = [
  {
    name: {
      common: "Saint Vincent and the Grenadines",
      official: "Saint Vincent and the Grenadines",
      nativeName: {
        eng: {
          official: "Saint Vincent and the Grenadines",
          common: "Saint Vincent and the Grenadines",
        },
      },
    },
    tld: [".vc"],
    cca2: "VC",
    ccn3: "670",
    cca3: "VCT",
    cioc: "VIN",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      XCD: {
        name: "Eastern Caribbean dollar",
        symbol: "$",
      },
    },
    idd: {
      root: "+1",
      suffixes: ["784"],
    },
    capital: ["Kingstown"],
    altSpellings: ["VC"],
    region: "Americas",
    subregion: "Caribbean",
    languages: {
      eng: "English",
    },
    translations: {
      ara: {
        official: "سانت فينسنت والغرينادين",
        common: "سانت فينسنت والغرينادين",
      },
      bre: {
        official: "Sant-Visant hag ar Grenadinez",
        common: "Sant-Visant hag ar Grenadinez",
      },
      ces: {
        official: "Svatý Vincenc a Grenadiny",
        common: "Svatý Vincenc a Grenadiny",
      },
      cym: {
        official: "Saint Vincent and the Grenadines",
        common: "Saint Vincent and the Grenadines",
      },
      deu: {
        official: "St. Vincent und die Grenadinen",
        common: "St. Vincent und die Grenadinen",
      },
      est: {
        official: "Saint Vincent ja Grenadiinid",
        common: "Saint Vincent",
      },
      fin: {
        official: "Saint Vincent ja Grenadiinit",
        common: "Saint Vincent ja Grenadiinit",
      },
      fra: {
        official: "Saint-Vincent-et-les Grenadines",
        common: "Saint-Vincent-et-les-Grenadines",
      },
      hrv: {
        official: "Sveti Vincent i Grenadini",
        common: "Sveti Vincent i Grenadini",
      },
      hun: {
        official: "Saint Vincent és a Grenadine-szigetek",
        common: "Saint Vincent és a Grenadine-szigetek",
      },
      ita: {
        official: "Saint Vincent e Grenadine",
        common: "Saint Vincent e Grenadine",
      },
      jpn: {
        official: "セントビンセントおよびグレナディーン諸島",
        common: "セントビンセントおよびグレナディーン諸島",
      },
      kor: {
        official: "세인트빈센트 그레나딘",
        common: "세인트빈센트 그레나딘",
      },
      nld: {
        official: "Saint Vincent en de Grenadines",
        common: "Saint Vincent en de Grenadines",
      },
      per: {
        official: "سنت وینسنت و گرنادین‌ها",
        common: "سنت وینسنت و گرنادین‌ها",
      },
      pol: {
        official: "Saint Vincent i Grenadyny",
        common: "Saint Vincent i Grenadyny",
      },
      por: {
        official: "São Vicente e Granadinas",
        common: "São Vincente e Granadinas",
      },
      rus: {
        official: "Сент-Винсент и Гренадины",
        common: "Сент-Винсент и Гренадины",
      },
      slk: {
        official: "Svätý Vincent a Grenadíny",
        common: "Svätý Vincent a Grenadíny",
      },
      spa: {
        official: "San Vicente y las Granadinas",
        common: "San Vicente y Granadinas",
      },
      swe: {
        official: "Saint Vincent och Grenadinerna",
        common: "Saint Vincent och Grenadinerna",
      },
      tur: {
        official: "Saint Vincent ve Grenadinler",
        common: "Saint Vincent ve Grenadinler",
      },
      urd: {
        official: "سینٹ وینسینٹ و گریناڈائنز",
        common: "سینٹ وینسینٹ و گریناڈائنز",
      },
      zho: {
        official: "圣文森特和格林纳丁斯",
        common: "圣文森特和格林纳丁斯",
      },
    },
    latlng: [13.25, -61.2],
    landlocked: false,
    area: 389,
    demonyms: {
      eng: {
        f: "Saint Vincentian",
        m: "Saint Vincentian",
      },
      fra: {
        f: "Vincentaise",
        m: "Vincentais",
      },
    },
    flag: "🇻🇨",
    maps: {
      googleMaps: "https://goo.gl/maps/wMbnMqjG37FMnrwf7",
      openStreetMaps: "https://www.openstreetmap.org/relation/550725",
    },
    population: 110947,
    fifa: "VIN",
    car: {
      signs: ["WV"],
      side: "left",
    },
    timezones: ["UTC-04:00"],
    continents: ["North America"],
    flags: {
      png: "https://flagcdn.com/w320/vc.png",
      svg: "https://flagcdn.com/vc.svg",
    },
    coatOfArms: {
      png: "https://mainfacts.com/media/images/coats_of_arms/vc.png",
      svg: "https://mainfacts.com/media/images/coats_of_arms/vc.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [13.13, -61.22],
    },
  },
];

console.log("Lat: ", data[0].latlng[0], "Long:", data[0].latlng[1]);
console.log(data[0].status);
console.log("hello");

const { currencies: currency } = data[0];
console.log(currency);

const property = "name";
const currencyName = currency.XCD;
const { [property]: name } = currencyName;
name;
// console.log(currencyName);

// const property = 'name';
// const hero = {
//   name: 'Batman'
// };
// // Object destructuring:
// const { [property]: name } = hero;
// name; // => 'Batman'
