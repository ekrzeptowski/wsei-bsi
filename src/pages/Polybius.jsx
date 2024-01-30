import { useState } from "react";
import { alphabet, notAlphabetRegex } from "../common";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Label } from "../components/Label";

function createArray(letters) {
  let array = [];
  let index = 0;

  for (let i = 0; i < 5; i++) {
    array[i] = [];
    for (let j = 0; j < 7; j++) {
      array[i][j] = letters[index];
      index++;
    }
  }

  return array;
}

function randomizeArray(array) {
  let randomArray = [];
  let row = 0;
  let column = 0;

  while (array.length > 0) {
    let randomRow = Math.floor(Math.random() * array.length);
    let randomColumn = Math.floor(Math.random() * array[randomRow].length);

    if (randomArray[row] === undefined) {
      randomArray[row] = [];
    }

    randomArray[row][column] = array[randomRow][randomColumn];

    array[randomRow].splice(randomColumn, 1);
    if (array[randomRow].length === 0) {
      array.splice(randomRow, 1);
    }
    column++;
    if (column === 7) {
      column = 0;
      row++;
    }
  }

  return randomArray;
}

export const Polybius = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [key, setKey] = useState(new Array(5).fill(new Array(7).fill("")));

  const handleKeyChange = (row, column, e) => {
    let newKey = [...key];
    newKey[row] = [...newKey[row]];
    newKey[row][column] = e.target.value;
    setKey(newKey);
  };

  const handleRandomize = () => setKey(randomizeArray(createArray(alphabet)));

  const isKeyValid = () => {
    const keyWithoutDuplicates = [...new Set(key.flat())].join("").toLowerCase().replace(notAlphabetRegex, "");

    if (!(keyWithoutDuplicates.length === alphabet.length)) {
      alert(
        "Klucz jest niepoprawny!\n\n" +
          "Klucz musi zawierać wszystkie litery alfabetu Polskiego.\n" +
          "Klucz nie może zawierać powtórzeń.\n" +
          "Klucz musi zawierać 35 znaków."
      );
      return false;
    } else {
      return true;
    }
  };

  const handleEncrypt = () => {
    if (!isKeyValid()) return;
    let newOutput = input
      .toLowerCase()
      .replace(notAlphabetRegex, "")
      .split("")
      .map((char) => {
        for (let row = 0; row < key.length; row++) {
          let column = key[row].indexOf(char);
          if (column !== -1) return `${row + 1}${column + 1}`;
        }
      })
      .join("");
    setOutput(newOutput);
  };

  const handleDecrypt = () => {
    if (!isKeyValid()) return;
    // check if input consists of pairs of numbers
    if (input.length % 2 !== 0 || input.match(/[^0-9]/g)) {
      alert("Niepoprawny tekst wejściowy!\n\nTekst wejściowy musi składać się z par liczb.");
      return;
    }
    let newOutput = "";
    for (let i = 0; i < input.length; i += 2) {
      let row = parseInt(input[i], 10) - 1;
      let column = parseInt(input[i + 1], 10) - 1;
      newOutput += key[row][column];
    }
    setOutput(newOutput);
  };

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="input">Tekst wejściowy:</Label>
        <Input id="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <Label htmlFor="key">Klucz:</Label>
        <div>
          <table>
            <thead>
              <tr>
                {/* Empty cell for alignment */}
                <th></th>
                {key[0].map((_, columnIndex) => (
                  <th key={columnIndex}>{columnIndex + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {key.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {/* Row header */}
                  <th>{rowIndex + 1}</th>
                  {row.map((column, columnIndex) => (
                    <td key={columnIndex}>
                      <Input
                        size="1"
                        maxLength="1"
                        className="text-center font-mono"
                        value={column}
                        onChange={(e) => handleKeyChange(rowIndex, columnIndex, e)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button onClick={handleRandomize}>Losuj klucz</Button>
        <div className="space-x-2">
          <Button onClick={handleEncrypt}>Szyfruj</Button>
          <Button onClick={handleDecrypt}>Deszyfruj</Button>
        </div>
      </div>
      <p>Wynik: {output}</p>
    </>
  );
};
