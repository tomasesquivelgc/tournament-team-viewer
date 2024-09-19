const teams = [
  {
    id: 1,
    name: 'Jonia',
    logo: "https://static.wikia.nocookie.net/leagueoflegends/images/a/ae/Ionia_Crest.png/revision/latest/scale-to-width/360?cb=20161117020756",
    players: {
      top: {
        playerName: "GauchitoMc#LAS",
        character: "Sett/Yone",
        rank: "Esmeralda 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/GauchitoMc-LAS#championsData-all-queues",
      },
      jungle: {
        playerName: "Lillia Topuria#123",
        character: "Lillia",
        rank: "Esmeralda 1",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/lillia+topuria+-123#championsData-all-queues",
      },
      mid: {
        playerName: "Hinchadelrojo7#LAS",
        character: "Ahri",
        rank: "Oro 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Hinchadelrojo7-LAS#championsData-all-queues",
      },
      adc: {
        playerName: "ReikShadow#LAS",
        character: "Xayah",
        rank: "Esmeralda 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/ReikShadow-LAS",
      },
      support: {
        playerName: "KiKi#Xayah",
        character: "Rakan",
        rank: "Plata 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/KiKi-Xayah",
      },
    }
  },
  {
    id: 2,
    name: 'Demacia',
    logo: "https://static.wikia.nocookie.net/leagueoflegends/images/e/e3/Demacia_Crest_icon.png/revision/latest/scale-to-width/360?cb=20190720005456",
    players: {
      top: {
        playerName: "Un Pan#LAS",
        character: "???",
        rank: "???",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/unpan-Las#championsData-all-queues",
      },
      jungle: {
        playerName: "GIO#guapo",
        character: "???",
        rank: "???",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Gio-guapo#championsData-all-queues",
      },
      mid: {
        playerName: "7pfranquito#222",
        character: "Sylas",
        rank: "Maestro",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/7pfranquito-222#championsData-all-queues",
      },
      adc: {
        playerName: "LaChicaCute#EGirl",
        character: "Lucian/Vayne",
        rank: "Maestro",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/LaChicaCute-EGIRL#championsData-all-queues",
      },
      support: {
        playerName: "Lukiix#LAS",
        character: "Galio/Senna?",
        rank: "Diamante 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/lukiix-las#championsData-all-queues",
      },
    }
  },
  {
    id: 3,
    name: 'Piltover/Zaun',
    logo: "https://static.wikia.nocookie.net/leagueoflegends/images/3/36/Piltover_and_Zaun_Crest.png/revision/latest?cb=20200429072942",
    players: {
      top: {
        playerName: "ElMoli047#LAS",
        character: "Urgot",
        rank: "Bronce 3",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/ElMoli047-LAS#championsData-all-queues",
      },
      jungle: {
        playerName: "Nieviz#LAS",
        character: "Warwick",
        rank: "Bronce 1",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Nieviz-LAS",
      },
      mid: {
        playerName: "Nixi#3950",
        character: "Ekko",
        rank: "Bronce 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Nixi-3950",
      },
      adc: {
        playerName: "Jimmy McGill#1205",
        character: "Jinx/Any",
        rank: "Hierro 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Jimmy+McGill-1205",
      },
      support: {
        playerName: "Zhecared#LAS",
        character: "Blitz/Seraphine",
        rank: "Bronce 3",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Zhecared-LAS",
      },
    }
  },
  {
    id: 4,
    name: 'Isla de las sombras',
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKy6Or0cBi6GII51CAPCAnMH6efulV6hGTIA&s",
    players: {
      top: {
        playerName: "zmazuku#LAS",
        character: "Gwen",
        rank: "Oro 1",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/zmazuku-LAS#championsData-all-queues",
      },
      jungle: {
        playerName: "ViegoSabroso#2106",
        character: "Viego",
        rank: "Diamante 2",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/ViegoSabroso-2106#championsData-all-queues",
      },
      mid: {
        playerName: "xjanly66#LAS",
        character: "Vex",
        rank: "Esmeralda 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/xjanly66-LAS",
      },
      adc: {
        playerName: "ELGUETTO#007",
        character: "Kalista",
        rank: "N/A",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/ELGUETTO-007#championsData-all-queues",
      },
      support: {
        playerName: "BINPE2405#LAS",
        character: "Senna/Maoikay",
        rank: "Esmeralda 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/BINPE2405-LAS#championsData-all-queues",
      },
    }
  },
  {
    id: 5,
    name: 'Aguasturbias',
    logo: "https://static.wikia.nocookie.net/leagueoflegends/images/0/06/Bilgewater_Crest.png/revision/latest/scale-to-width/360?cb=20161117042614",
    players: {
      top: {
        playerName: "",
        character: "",
        rank: "",
        playerProfileLink: "",
      },
      jungle: {
        playerName: "",
        character: "",
        rank: "",
        playerProfileLink: "",
      },
      mid: {
        playerName: "",
        character: "",
        rank: "",
        playerProfileLink: "",
      },
      adc: {
        playerName: "",
        character: "",
        rank: "",
        playerProfileLink: "",
      },
      support: {
        playerName: "",
        character: "",
        rank: "",
        playerProfileLink: "",
      },
    }
  },
  {
    id: 6,
    name: 'Noxus',
    logo: "https://static.wikia.nocookie.net/leagueoflegends/images/e/e9/Noxus_Crest.png/revision/latest/scale-to-width/360?cb=20161117055949",
    players: {
      top: {
        playerName: "Santyrached #LAS",
        character: "Darius",
        rank: "Plata 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Santyrached+-LAS#championsData-all-queues",
      },
      jungle: {
        playerName: "Eldelossandwiche#LAS",
        character: "Briar",
        rank: "HIERRO 3",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Eldelossandwich3-555",
      },
      mid: {
        playerName: "BenjaUwUr#OwO",
        character: "Talon",
        rank: "Grand Master",
         playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/BenjaUwUr-OwO",
      },
      adc: {
        playerName: "Corvoxus#2401",
        character: "Samira",
        rank: "Esmeralda 3",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Corvoxus-2401#championsData-all-queues",
      },
      support: {
        playerName: "Tu crush#000",
        character: "Rell/Swain",
        rank: "Diamante 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Tu+crush-000#championsData-all-queues",
      },
    }
  },
  {
    id: 7,
    name: 'Shurima/Vacio',
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYYPNcrfeJGfFCjp0BRqKTZQeyGMBGbRT8Q&s",
    players: {
      top: {
        playerName: "Hanni#Stark",
        character: "Cho'gath",
        rank: "N/A",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Hanni+-Stark#championsData-all-queues",
      },
      jungle: {
        playerName: "PEANUTARGENTINO3#LAS",
        character: "Rek'sai/Kha'zix",
        rank: "Platino 1",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/PEANUTARGENTINO3-LAS#championsData-all-queues",
      },
      mid: {
        playerName: "PatssVT#uwu",
        character: "Malzahar",
        rank: "Daiamante 2",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/PatssVT+-%E2%81%A0uwu#championsData-all-queues",
      },
      adc: {
        playerName: "SrBelak#LAS",
        character: "Kai'sa",
        rank: "N/A",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/SrBelak-LAS",
      },
      support: {
        playerName: "COCACOLAESPUMA34#0000",
        character: "Xerath/Amumu",
        rank: "Bronce 3",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/COCACOLAESPUMA34-0000#championsData-all-queues",
      },
    },
  },
  {
    id: 8,
    name: 'Freljord',
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3QfBZsRGahqvaS6C__doc0jOGc8FpLQPsw&s",
    players: {
      top: {
        playerName: "KJNkevin#LAS",
        character: "Trundle/Volibear",
        rank: "Plata 3",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/KJNkevin+-LAS#championsData-all-queues",
      },
      jungle: {
        playerName: "kobushin78#1410",
        character: "Volibear/Sejuani",
        rank: "Esmeralda 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Kobushin78-1410#championsData-all-queues",
      },
      mid: {
        playerName: "TheGarchomp#0077",
        character: "Aurora",
        rank: "Diamante 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/TheGarchomp-0077#championsData-all-queues",
      },
      adc: {
        playerName: "Aphentanilo#PPP",
        character: "Ashe",
        rank: "Oro 3",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Aphentanilo-PPP",
      },
      support: {
        playerName: "SuguruGeto#4108",
        character: "Braum/Lissandra",
        rank: "Plata 4",
        playerProfileLink: "https://www.leagueofgraphs.com/es/summoner/las/Sugurugeto+-4108#championsData-all-queues",
      },
    }
  },
];

export default teams;