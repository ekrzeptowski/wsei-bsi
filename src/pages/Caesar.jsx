import { useState } from "react";
import { alphabet, notAlphabetRegex } from "../common";

import { Label } from "../components/Label";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";
import { H1 } from "../components/Heading";

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

  const handleEncrypt = () => {
    setOutput(caesar(input, key % alphabet.length));
  };

  const handleDecrypt = () => {
    setOutput(caesar(input, (alphabet.length - (key % alphabet.length)) % alphabet.length));
  };

  return (
    <>
      <H1>Szyfr Cezara</H1>
      <div className="space-y-2">
        <Label htmlFor="input">Tekst wejściowy:</Label>
        <TextArea id="input" value={input} onChange={(e) => setInput(e.target.value)} />

        <Label htmlFor="key">Klucz:</Label>
        <Input
          id="key"
          type="number"
          min="1"
          max="35"
          step="1"
          value={key}
          onChange={(e) => setKey(parseInt(e.target.value, 10))}
        />
        <div className="space-x-2">
          <Button onClick={handleEncrypt}>Szyfruj</Button>
          <Button onClick={handleDecrypt}>Deszyfruj</Button>
        </div>
      </div>

      <p>Wynik: {output}</p>
    </>
  );
};
