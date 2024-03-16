interface CountryData {
  [country: string]: {
    [state: string]: string[];
  };
}

export const data:CountryData = {
    'India': {
        'Gujarat': ["Vadodara", "Ahmedabad", "Surat", "Rajkot", "Jamnagar", "Bhavnagar", "Anand", "Nadiad", "Bharuch", "Junagadh"],
        'Maharashtra': ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Thane", "Amravati", "Kolhapur", "Akola"],
        'Tamil Nadu': ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Kanchipuram", "Erode", "Vellore"],
        'Uttar Pradesh': ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Allahabad", "Bareilly", "Aligarh", "Moradabad", "Saharanpur"],
        'West Bengal': ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Bardhaman", "Malda", "Baharampur", "Habra", "Kharagpur", "Shantipur"],
        'Rajasthan': ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sri Ganganagar"],
        'Karnataka': ["Bangalore", "Hubli-Dharwad", "Mysore", "Belgaum", "Mangalore", "Gulbarga", "Davanagere", "Bellary", "Bijapur", "Shimoga"],
        'Madhya Pradesh': ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"],
        'Bihar': ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Arrah", "Begusarai", "Katihar", "Munger"],
        'Odisha': ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda"]
      },
      'United States': {
        'California': ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim"],
        'Texas': ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo"],
        'Florida': ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral"],
        'New York': ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica"],
        'Illinois': ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Peoria", "Elgin", "Waukegan", "Cicero"],
        'Pennsylvania': ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "Altoona"],
        'Ohio': ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain"],
        'Georgia': ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Sandy Springs", "Macon", "Roswell", "Albany", "Johns Creek"],
        'North Carolina': ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Concord"],
        'Michigan': ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Lansing", "Ann Arbor", "Flint", "Dearborn", "Livonia", "Westland"]
      },
      'China': {
        'Beijing': ["Beijing", "Shanghai", "Tianjin", "Chongqing", "Guangzhou", "Shenzhen", "Wuhan", "Dongguan", "Chengdu", "Nanjing"],
        'Shanghai': ["Shanghai", "Beijing", "Tianjin", "Chongqing", "Guangzhou", "Shenzhen", "Wuhan", "Dongguan", "Chengdu", "Nanjing"],
        'Guangdong': ["Guangzhou", "Shenzhen", "Dongguan", "Zhongshan", "Foshan", "Jiangmen", "Zhanjiang", "Shaoguan", "Heyuan", "Huizhou"],
        'Jiangsu': ["Nanjing", "Suzhou", "Wuxi", "Changzhou", "Nantong", "Yangzhou", "Zhenjiang", "Xuzhou", "Taizhou", "Yancheng"],
        'Shandong': ["Jinan", "Qingdao", "Zibo", "Zaozhuang", "Dongying", "Yantai", "Weifang", "Jining", "Tai'an", "Weihai"],
        'Henan': ["Zhengzhou", "Kaifeng", "Luoyang", "Pingdingshan", "Anyang", "Hebi", "Xinxiang", "Jiaozuo", "Puyang", "Xuchang"],
        'Sichuan': ["Chengdu", "Mianyang", "Luzhou", "Deyang", "Suining", "Neijiang", "Leshan", "Nanchong", "Meishan", "Yibin"],
        'Hubei': ["Wuhan", "Huangshi", "Shiyan", "Jingzhou", "Yichang", "Xiangyang", "Ezhou", "Suizhou", "Huanggang", "Xiaogan"],
        'Hebei': ["Shijiazhuang", "Tangshan", "Qinhuangdao", "Handan", "Xingtai", "Baoding", "Zhangjiakou", "Chengde", "Langfang", "Hengshui"],
        'Hunan': ["Changsha", "Zhuzhou", "Xiangtan", "Hengyang", "Shaoyang", "Yueyang", "Chenzhou", "Yongzhou", "Zhangjiajie", "Loudi"]
      },
      'Brazil': {
        'Sao Paulo': ["Sao Paulo", "Guarulhos", "Campinas", "Sao Bernardo do Campo", "Santo Andre", "Osasco", "Sorocaba", "Ribeirao Preto", "Santos", "Maua"],
        'Rio de Janeiro': ["Rio de Janeiro", "Sao Goncalo", "Duque de Caxias", "Nova Iguacu", "Niteroi", "Belford Roxo", "Campos dos Goytacazes", "Sao Joao de Meriti", "Petropolis", "Volta Redonda"],
        'Bahia': ["Salvador", "Feira de Santana", "Vitoria da Conquista", "Camaçari", "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", "Teixeira de Freitas"],
        'Minas Gerais': ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga"],
        'Parana': ["Curitiba", "Londrina", "Maringa", "Pont Grossa", "Cascavel", "Sao Jose dos Pinhais", "Foz do Iguacu", "Colombo", "Guarapuava", "Paranagua"],
        'Rio Grande do Sul': ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravatai", "Viamao", "Novo Hamburgo", "Sao Leopoldo", "Rio Grande"],
        'Pernambuco': ["Recife", "Jaboatao dos Guararapes", "Olinda", "Caruaru", "Paulista", "Petrolina", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitoria de Santo Antao"],
        'Ceara': ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanau", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixada"],
        'Pará': ["Belem", "Ananindeua", "Santarém", "Maraba", "Castanhal", "Abaetetuba", "Barcarena", "Parauapebas", "Cameta", "Itaituba"],
        'Santa Catarina': ["Florianopolis", "Joinville", "Blumenau", "Sao Jose", "Criciuma", "Itajai", "Chapeco", "Jaragua do Sul", "Palhoca", "Lages"]
      },
      'Russia': {
        'Moscow': ["Moscow", "Saint Petersburg", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Samara", "Omsk", "Kazan", "Chelyabinsk", "Rostov-on-Don"],
        'Saint Petersburg': ["Saint Petersburg", "Moscow", "Novosibirsk", "Yekaterinburg", "Nizhny Novgorod", "Samara", "Omsk", "Kazan", "Chelyabinsk", "Rostov-on-Don"],
        'Novosibirsk Oblast': ["Novosibirsk", "Berdsk", "Iskitim", "Kuybyshev", "Ob", "Tatarsk", "Cherepanovo", "Karasuk", "Barabinsk", "Kargat"],
        'Yekaterinburg': ["Yekaterinburg", "Artyomovsky", "Asbest", "Bogdanovich", "Verkhnyaya Pyshma", "Degtyarsk", "Irbit", "Kamyshlov", "Karpinsk", "Krasnoufimsk"],
        'Nizhny Novgorod': ["Nizhny Novgorod", "Arzamas", "Bor", "Dzerzhinsk", "Kstovo", "Kulebaki", "Lyskovo", "Pavlovo", "Sarov", "Sergach"],
        'Samara': ["Samara", "Tolyatti", "Syzran", "Novokuybyshevsk", "Chapaevsk", "Otradny", "Kinel", "Zhigulevsk", "Krasnoarmeysk", "Pokhvistnevo"],
        'Omsk': ["Omsk", "Tara", "Isilkul", "Kalachinsk", "Nazyvayevsk", "Tavricheskoye", "Tevriz", "Tyukalinsk", "Ust-Ishim", "Omsk"],
        'Kazan': ["Kazan", "Naberezhnye Chelny", "Nizhnekamsk", "Almetyevsk", "Zelenodolsk", "Bugulma", "Elabuga", "Leninogorsk", "Agryz", "Apastovo"],
        'Chelyabinsk': ["Chelyabinsk", "Magnitogorsk", "Zlatoust", "Miass", "Kopeysk", "Satka", "Kyshtym", "Kartaly", "Troitsk", "Verkhny Ufaley"],
        'Rostov-on-Don': ["Rostov-on-Don", "Taganrog", "Shakhty", "Novocherkassk", "Volgodonsk", "Bataysk", "Aksay", "Novoshakhtinsk", "Belaya Kalitva", "Kamensk-Shakhtinsky"]
      },
      'Japan': {
        'Tokyo': ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"],
        'Yokohama': ["Yokohama", "Tokyo", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"],
        'Osaka': ["Osaka", "Tokyo", "Yokohama", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"],
        'Nagoya': ["Nagoya", "Tokyo", "Yokohama", "Osaka", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"],
        'Sapporo': ["Sapporo", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Fukuoka", "Kobe", "Kyoto", "Kawasaki", "Saitama"],
        'Fukuoka': ["Fukuoka", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Kobe", "Kyoto", "Kawasaki", "Saitama"],
        'Kobe': ["Kobe", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kyoto", "Kawasaki", "Saitama"],
        'Kyoto': ["Kyoto", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kawasaki", "Saitama"],
        'Kawasaki': ["Kawasaki", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Saitama"],
        'Saitama': ["Saitama", "Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Fukuoka", "Kobe", "Kyoto", "Kawasaki"]
      },
      'United Kingdom': {
        'England': ["London", "Birmingham", "Manchester", "Leeds", "Sheffield", "Liverpool", "Bristol", "Newcastle upon Tyne", "Nottingham", "Leicester"],
        'Scotland': ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Inverness", "Stirling", "Perth", "St Andrews", "Paisley", "Kirkcaldy"],
        'Wales': ["Cardiff", "Swansea", "Newport", "Bangor", "Wrexham", "Bridgend", "Caerphilly", "Barry", "Neath", "Cwmbran"],
        'Northern Ireland': ["Belfast", "Londonderry", "Newry", "Armagh", "Derry", "Craigavon", "Ballymena", "Newtownabbey", "Bangor", "Lisburn"],
        'Isle of Man': ["Douglas", "Peel", "Ramsey", "Castletown", "Port Erin", "Port St Mary", "Onchan", "Laxey", "Kirk Michael", "Ballasalla"],
        'Jersey': ["Saint Helier", "Saint Clement", "Saint Lawrence", "Saint Mary", "Saint John", "Saint Brelade", "Saint Martin", "Saint Ouen", "Saint Peter", "Saint Saviour"],
        'Guernsey': ["Saint Peter Port", "Saint Sampson", "Castel", "Saint Andrew", "Saint Martin", "Saint Saviour", "Vale", "Torteval", "Forest", "Saint Pierre du Bois"],
        'Isle of Wight': ["Newport", "Ryde", "Shanklin", "Sandown", "Cowes", "Ventnor", "Freshwater", "Brading", "Yarmouth", "East Cowes"],
        'Scilly Isles': ["Hugh Town", "Tresco", "St. Martin's", "St. Agnes", "Bryher", "St. Mary's", "St. Martin's", "St. Mary's", "St. Agnes", "St. Martin's"],
        'Orkney Islands': ["Kirkwall", "Stromness", "Kirkwall", "Stromness", "Kirkwall", "Stromness", "Kirkwall", "Stromness", "Kirkwall", "Stromness"]
      },
      'Germany': {
        'Berlin': ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
        'Hamburg': ["Hamburg", "Berlin", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
        'Munich': ["Munich", "Berlin", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
        'Cologne': ["Cologne", "Berlin", "Hamburg", "Munich", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
        'Frankfurt': ["Frankfurt", "Berlin", "Hamburg", "Munich", "Cologne", "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
        'Stuttgart': ["Stuttgart", "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Düsseldorf", "Dortmund", "Essen", "Leipzig"],
        'Düsseldorf': ["Düsseldorf", "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dortmund", "Essen", "Leipzig"],
        'Dortmund': ["Dortmund", "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Essen", "Leipzig"],
        'Essen': ["Essen", "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Leipzig"],
        'Leipzig': ["Leipzig", "Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf", "Dortmund", "Essen"]
      },
      'France': {
        'Île-de-France': ["Paris", "Versailles", "Boulogne-Billancourt", "Argenteuil", "Montreuil", "Saint-Denis", "Nanterre", "Créteil", "Aulnay-sous-Bois", "Vitry-sur-Seine"],
        'Provence-Alpes-Côte d\'Azur': ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon", "Antibes", "Cannes", "La Seyne-sur-Mer", "Hyères", "Arles"],
        'Auvergne-Rhône-Alpes': ["Lyon", "Saint-Étienne", "Grenoble", "Villeurbanne", "Clermont-Ferrand", "Chambéry", "Annecy", "Caluire-et-Cuire", "Vénissieux", "Saint-Priest"],
        'Hauts-de-France': ["Lille", "Roubaix", "Tourcoing", "Dunkirk", "Calais", "Villeneuve-d'Ascq", "Saint-Quentin", "Beauvais", "Valenciennes", "Arras"],
        'Grand Est': ["Strasbourg", "Reims", "Metz", "Mulhouse", "Nancy", "Colmar", "Troyes", "Charleville-Mézières", "Thionville", "Saint-Dizier"],
        'Nouvelle-Aquitaine': ["Bordeaux", "Limoges", "Pau", "Bayonne", "La Rochelle", "Angoulême", "Périgueux", "Brive-la-Gaillarde", "Niort", "Agen"],
        'Brittany': ["Rennes", "Brest", "Quimper", "Lorient", "Vannes", "Saint-Malo", "Saint-Brieuc", "Fouesnant", "Concarneau", "Morlaix"],
        'Occitanie': ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Carcassonne", "Béziers", "Albi", "Montauban", "Narbonne", "Castres"],
        'Normandy': ["Rouen", "Caen", "Le Havre", "Cherbourg-en-Cotentin", "Évreux", "Dieppe", "Saint-Étienne-du-Rouvray", "Sotteville-lès-Rouen", "Alençon", "Vernon"],
        'Pays de la Loire': ["Nantes", "Angers", "Le Mans", "Saint-Nazaire", "Cholet", "La Roche-sur-Yon", "Laval", "Saumur", "Saint-Herblain", "Rezé"]
      }
}

