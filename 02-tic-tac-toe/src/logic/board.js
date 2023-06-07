import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  //revisamos las combinaciones ganadoras
  for(const combo of WINNER_COMBOS){
    const [a,b,c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){
      return boardToCheck[a]
    }
  }
  return null;
}

export const checkEndGame = (newBoard) => {
  //revisamo si hay un empate
  //si no hay espacios vacios en el tablero
  return newBoard.every((square) => square !== null)
}