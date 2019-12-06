import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [value, setValue] = useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const card = document.querySelectorAll(".card");
    const cardArr = Array.from(card);

    value ? body.classList.add("darkmode") : body.classList.remove("darkmode");

    cardArr.forEach(card => {
      value
        ? card.classList.add("darkcard")
        : card.classList.remove("darkcard");
    });
  });

  return [value, setValue];
}
