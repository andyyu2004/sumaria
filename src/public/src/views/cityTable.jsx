const cityAB = ["Airdrie", "Brooks", "Calgary", "Camrose", "Chestermere", "Cold Lake",
  "Edmonton", "Fort Saskatchewan", "Grande Prairie", "Lacombe", "Leduc",
  "Lethbridge", "Lloydminster (part)", "Medicine Hat", "Red Deer",
  "Spruce Grove", "St. Albert", "Wetaskiwin"];

const cityBC = ["Abbotsford", "Armstrong", "Burnaby", "Campbell River", "Castlegar",
  "Chilliwack", "Colwood", "Coquitlam", "Courtenay", "Cranbrook",
  "Dawson Creek", "Duncan", "Enderby", "Fernie", "Fort St. John",
  "Grand Forks", "Greenwood", "Kamloops", "Kelowna", "Kimberley",
  "Langford", "Langley", "Maple Ridge", "Merritt", "Nanaimo", "Nelson",
  "New Westminster", "North Vancouver", "Parksville", "Penticton",
  "Pitt Meadows", "Port Alberni", "Port Coquitlam", "Port Moody",
  "Powell River", "Prince George", "Prince Rupert", "Quesnel",
  "Revelstoke", "Richmond", "Rossland", "Salmon Arm", "Surrey",
  "Terrace", "Trail", "Vancouver", "Vernon", "Victoria",
  "White Rock", "Williams Lake"];

const cityMB = ["Brandon", "Dauphin", "Flin Flon (part)", "Morden",
  "Portage la Prairie", "Selkirk", "Steinbach", "Thompson",
  "Winkler", "Winnipeg"];

const cityNB = ["Bathurst", "Campbellton", "Dieppe", "Edmundston",
  "Fredericton", "Miramichi", "Moncton", "Saint John"];

const cityNL = ["Corner Brook", "Mount Pearl", "St. John's"];

const cityNS = ["Cape Breton", "Halifax", "Queens"];

const cityON = ["Barrie", "Belleville", "Brampton", "Brant", "Brantford", "Brockville",
  "Burlington", "Cambridge", "Clarence-Rockland", "Cornwall", "Dryden",
  "Elliot Lake", "Greater Sudbury", "Guelph", "Haldimand County",
  "Hamilton", "Kawartha Lakes", "Kenora", "Kingston", "Kitchener",
  "London", "Markham", "Mississauga", "Niagara Falls", "Norfolk County",
  "North Bay", "Orillia", "Oshawa", "Ottawa", "Owen Sound", "Pembroke",
  "Peterborough", "Pickering", "Port Colborne", "Prince Edward County",
  "Quinte West", "Sarnia", "Sault Ste. Marie", "St. Catharines",
  "St. Thomas", "Stratford", "Temiskaming Shores", "Thorold", "Thunder Bay",
  "Timmins", "Toronto", "Vaughan", "Waterloo", "Welland", "Windsor", "Woodstock"];

const cityPE = ["Charlottetown", "Summerside"];

const cityQC = ["Acton Vale", "Alma", "Amos", "Amqui", "Asbestos", "Baie-Comeau", "Baie-D'Urfé",
  "Baie-Saint-Paul", "Barkmere", "Beaconsfield", "Beauceville", "Beauharnois", "Beaupré",
  "Bécancour", "Bedford", "Belleterre", "Beloeil", "Berthierville", "Blainville", "Boisbriand",
  "Bois-des-Filion", "Bonaventure", "Boucherville", "Brome Lake", "Bromont", "Brossard",
  "Brownsburg-Chatham", "Candiac", "Cap-Chat", "Cap-Santé", "Carignan", "Carleton-sur-Mer",
  "Causapscal", "Chambly", "Chandler", "Chapais", "Charlemagne", "Châteauguay", "Château-Richer",
  "Chibougamau", "Clermont", "Coaticook", "Contrecoeur", "Cookshire-Eaton", "Côte Saint-Luc",
  "Coteau-du-Lac", "Cowansville", "Danville", "Daveluyville", "Dégelis", "Delson", "Desbiens",
  "Deux-Montagnes", "Disraeli", "Dolbeau-Mistassini", "Dollard-des-Ormeaux", "Donnacona",
  "Dorval", "Drummondville", "Dunham", "Duparquet", "East Angus", "Estérel", "Farnham",
  "Fermont", "Forestville", "Fossambault-sur-le-Lac", "Gaspé", "Gatineau", "Gracefield",
  "Granby", "Grande-Rivière", "Hampstead", "Hudson", "Huntingdon", "Joliette", "Kingsey Falls",
  "Kirkland", "La Malbaie", "La Pocatière", "La Prairie", "La Sarre", "La Tuque", "Lac-Delage",
  "Lachute", "Lac-Mégantic", "Lac-Saint-Joseph", "Lac-Sergent", "L'Ancienne-Lorette", "L'Assomption",
  "Laval", "Lavaltrie", "Lebel-sur-Quévillon", "L'Épiphanie", "Léry", "Lévis", "L'Île-Cadieux",
  "L'Île-Dorval", "L'Île-Perrot", "Longueuil", "Lorraine", "Louiseville", "Macamic", "Magog",
  "Malartic", "Maniwaki", "Marieville", "Mascouche", "Matagami", "Matane", "Mercier",
  "Métabetchouan–Lac-à-la-Croix", "Métis-sur-Mer", "Mirabel", "Mont-Joli", "Mont-Laurier",
  "Montmagny", "Montreal", "Montreal West", "Montréal-Est", "Mont-Saint-Hilaire", "Mont-Tremblant",
  "Mount Royal", "Murdochville", "Neuville", "New Richmond", "Nicolet", "Normandin",
  "Notre-Dame-de-l'Île-Perrot", "Notre-Dame-des-Prairies", "Otterburn Park", "Paspébiac", "Percé",
  "Pincourt", "Plessisville", "Pohénégamook", "Pointe-Claire", "Pont-Rouge", "Port-Cartier",
  "Portneuf", "Prévost", "Princeville", "Québec", "Repentigny", "Richelieu", "Richmond", "Rimouski",
  "Rivière-du-Loup", "Rivière-Rouge", "Roberval", "Rosemère", "Rouyn-Noranda", "Saguenay",
  "Saint-Augustin-de-Desmaures", "Saint-Basile", "Saint-Basile-le-Grand", "Saint-Bruno-de-Montarville",
  "Saint-Césaire", "Saint-Colomban", "Saint-Constant", "Sainte-Adèle", "Sainte-Agathe-des-Monts",
  "Sainte-Anne-de-Beaupré", "Sainte-Anne-de-Bellevue", "Sainte-Anne-des-Monts",
  "Sainte-Anne-des-Plaines", "Sainte-Catherine", "Sainte-Catherine-de-la-Jacques-Cartier",
  "Sainte-Julie", "Sainte-Marguerite-du-Lac-Masson", "Sainte-Marie", "Sainte-Marthe-sur-le-Lac",
  "Sainte-Thérèse", "Saint-Eustache", "Saint-Félicien", "Saint-Gabriel", "Saint-Georges",
  "Saint-Hyacinthe", "Saint-Jean-sur-Richelieu", "Saint-Jérôme", "Saint-Joseph-de-Beauce",
  "Saint-Joseph-de-Sorel", "Saint-Lambert", "Saint-Lazare", "Saint-Lin-Laurentides",
  "Saint-Marc-des-Carrières", "Saint-Ours", "Saint-Pamphile", "Saint-Pascal", "Saint-Pie",
  "Saint-Raymond", "Saint-Rémi", "Saint-Sauveur", "Saint-Tite", "Salaberry-de-Valleyfield",
  "Schefferville", "Scotstown", "Senneterre", "Sept-Îles", "Shawinigan", "Sherbrooke", "Sorel-Tracy",
  "Stanstead", "Sutton", "Témiscaming", "Témiscouata-sur-le-Lac", "Terrebonne", "Thetford Mines",
  "Thurso", "Trois-Pistoles", "Trois-Rivières", "Valcourt", "Val-d'Or", "Varennes", "Vaudreuil-Dorion",
  "Victoriaville", "Ville-Marie", "Warwick", "Waterloo", "Waterville", "Westmount", "Windsor"];

const citySK = ["Estevan", "Flin Flon (part)", "Humboldt", "Lloydminster (part)", "Martensville",
  "Meadow Lake", "Melfort", "Melville", "Moose Jaw", "North Battleford", "Prince Albert",
  "Regina", "Saskatoon", "Swift Current", "Warman", "Weyburn", "Yorkton"];

const cityNT = ["Yellowknife"];

const cityNU = ["Iqaluit"];

const cityYT = ["Whitehorse"];

const cityTable = {
  "AB": cityAB,
  "BC": cityBC,
  "MB": cityMB,
  "NB": cityNB,
  "NL": cityNL,
  "NS": cityNS,
  "NT": cityNT,
  "NU": cityNU,
  "ON": cityON,
  "PE": cityPE,
  "QC": cityQC,
  "SK": citySK,
  "YT": cityYT,
  "none": ["(select a province first)"]
}

export default cityTable;