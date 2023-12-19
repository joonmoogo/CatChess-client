import { useEffect } from "react";
import BuyXP from "./BuyXP";
import CharacterCard from "./CharacterCard";
import Reload from "./Reload";

export default function BottomSide({ windowWidth, windowHeight }) {

  const scaleRatio = 1;
  const height = 150;

  const bottomSideStyle = {
    position: "fixed",
    bottom: 0,
    left: "50%",
    width: `${windowWidth / 2}px`,
    height: `${height}px`,
    marginLeft: `-${windowWidth / 4}px`,
    padding: "10px",
    color: "black",
    boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex", // 수정된 부분
    transform: `scale(${scaleRatio})`,
    transformOrigin: "bottom left",
  };

  const stackBoxStyle = {
    border: "1px solid #ccc",
    width: '20%',
    textAlign: 'center',
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };

  const characterCardContainerStyle = {
    display: "flex",
    flexDirection: "row", // 수정된 부분
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1, // 수정된 부분
    marginLeft: "10px", // 수정된 부분
  };

  return (
    <div style={bottomSideStyle}>
      <div style={stackBoxStyle}>
        <BuyXP />
        <Reload />
      </div>
      <div style={characterCardContainerStyle}>
        <CharacterCard onClick={(event)=>{console.log(event)}}/>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        
      </div>
    </div>
  );
}
