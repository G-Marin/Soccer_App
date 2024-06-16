import React, { createContext, useState} from 'react';



export const LeagueContext = createContext();

export const LeagueProvider = ({ children }) => {

const leaguesList = [
    { name: "Premier League", id: 39 },
    { name: "La Liga", id: 140 },
    { name: "Serie A - Brazil", id: 695 },
    { name: "Serie A - Italy", id: 135 },
    { name: "Bundesliga", id: 78 },
    { name: "Ligue 1", id: 61 },
    { name: "Eredivisie", id: 88 },
    { name: "Primeira Liga", id: 94 },
    { name: "Champions League", id: 2 },
    { name: "Europa League", id: 3 },
    { name: "World Cup", id: 1 },
    { name: "Euro Cup", id: 4 },
    { name: "Copa America", id: 9 },
    { name: "African Cup of Nations", id: 19 },
    { name: "Asian Cup", id: 7 },
    { name: "CONCACAF Gold Cup", id: 22 },
    { name: "Copa Libertadores", id: 13 },
    { name: "Copa Sudamericana", id: 11 },
    { name: "FIFA Club World Cup", id: 15 },
    { name: "UEFA Super Cup", id: 531 },
    { name: "Community Shield", id: 528 },
    { name: "Copa del Rey", id: 143 },
    { name: "Coppa Italia", id: 137 },
    { name: "DFB Pokal", id: 81 },
    { name: "Coupe de France", id: 65 },
    { name: "KNVB Beker", id: 90 },
    { name: "Taca de Portugal", id: 97 },
    { name: "FA Cup", id: 45 }
];


  
  return (
    <LeagueContext.Provider value={{leaguesList}}>
      {children}
    </LeagueContext.Provider>
  );
};
