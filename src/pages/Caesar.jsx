import { useState } from "react";
import { alphabet, notAlphabetRegex } from "../common";

import { Label } from "../components/Label";
import { Button } from "../components/Button";
import { alphabet } from "../common";

function caesar(text, shift) {
  return [...text.toLowerCase().replace(notAlphabetRegex, "")]
    .map((char) => {
      const index = alphabet.indexOf(char);
      return index === -1 ? char : alphabet[(index + shift) % alphabet.length];
    })
    .join("");
}
export const Caesar = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [key, setKey] = useState(1);

  const handleEncrypt = (e) => {
    setOutput(caesar(input, key % alphabet.length));
  };

  const handleDecrypt = (e) => {
    setOutput(caesar(input, (alphabet.length - (key % alphabet.length)) % alphabet.length));
  };

  return (
    <>
      <div>
        <Label htmlFor="input">Tekst do zaszyfrowania:</Label>
        <textarea id="input" value={input} onChange={(e) => setInput(e.target.value)} />

        <Label htmlFor="key">Klucz:</Label>
        <input
          id="key"
          type="number"
          min="1"
          max="35"
          step="1"
          value={key}
          onChange={(e) => setKey(parseInt(e.target.value, 10))}
        />
        <div>
          <Button onClick={handleEncrypt}>Szyfruj</Button>
          <Button onClick={handleDecrypt}>Deszyfruj</Button>
        </div>
      </div>

      <p>Wynik: {output}</p>
    </>
  );
};
