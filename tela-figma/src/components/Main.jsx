import React, { useState } from "react";

function Main() {
  const armazenarString = () => {
    const string = prompt("Digite o nome que deseja armazenar:");
    localStorage.setItem("string", string || "");
    window.location.reload();
  };
  const [stringArmazenada, setStringArmazenada] = useState(
    localStorage.getItem("string") || ""
  );
  const agora = new Date();
  const hora = agora.getHours();

  let saudacao;
  if (hora >= 5 && hora < 12) {
    saudacao = "Good Morning,";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Good Afternoon,";
  } else {
    saudacao = "Good Evening,";
  }

  return (
    <main className="bg-primary min-h-screen p-4">
      <div className="m-16">
        <h1 className="text-4xl text-white">{saudacao}</h1>
        {stringArmazenada ? (
          <h2 className="text-5xl text-white mt-3">{stringArmazenada}</h2>
        ) : (
          <button className="bg-button hover:bg-purple-700 active:bg-purple-800 text-white font-bold mt-3 py-2 px-4 rounded-full" onClick={armazenarString}>
            Click me
          </button>
        )}
      </div>
    </main>
  );
}

export default Main;
