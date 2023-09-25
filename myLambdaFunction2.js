const fs = require('fs');

exports.handler = async (event) => {
  // Die Bestellliste
  const orderList = ["Kapern", "Senf", "Butter", "Eier", "Hackfleisch", "Kartoffeln", "Zwiebeln"];
  
  // Sortiere Bestellliste in alphabetischer Reihenfolge (aufsteigend)
  orderList.sort();

  // Ausgabe sortierte Bestellliste in der Konsole
  console.log(orderList);

  // Die Antwort
  const response = {
    statusCode: 200,
    body: JSON.stringify(orderList)
  };
  
  return response;
};