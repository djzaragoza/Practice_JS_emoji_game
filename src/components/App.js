import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";

import "./styles.css";
import deck from "./cardsData";

export default function App() {
   const [cards, setCards] = useState(deck);
   const [selectedCards, setSelectedCards] = useState([]);
   const [gameWon, setGameWon] = useState(false);
   const [score, setScore] = useState(0);
}

