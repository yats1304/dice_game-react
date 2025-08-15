import styled from "styled-components";
import { useState } from "react";

const NumberSelector = () => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const [selectedNumber, setSelectedNumber] = useState();

  return (
    <div>
        {arrNumber.map((value, i) =>(
            <Box
            isSelected={value === selectedNumber}
            key={1} 
            onClick={() => setSelectedNumber(value)}>{value}</Box>
        ))}
    </div>
  )
}

export default NumberSelector

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`