import React, { useState } from "react";


function Main() {
  const navigation = [
    { name: "Dashboard", href: "#", current: false },
    { name: "Current page", href: "#", current: true },
  ];
  
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
    <main className="flex-1 p-6">
      <div className="m-10">
        <div className="ml-28">
          <h1 className="text-4xl text-white">{saudacao}</h1>
          {stringArmazenada ? (
            <h2 className="text-5xl text-white mt-3">{stringArmazenada}</h2>
          ) : (
            <button
              className="bg-button hover:bg-purple-700 active:bg-purple-800 text-white font-bold mt-3 py-2 px-4 rounded-full"
              onClick={armazenarString}
            >
              Click me
            </button>
          )}
        </div>
        <div className="ml-28 mt-8 p-1">
            <a href="/" className="inline-flex items-center rounded-sm border-b-2 border-complement px-1 pt-1 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Daily Overview</a>
            <a href="/" className="iinline-flex items-center rounded-sm p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset active:ring-complement">Statistics</a>
        </div>          
        <div className="ml-24 mt-4 w-tabela h-96 grid grid-cols-3 grid-rows-2 gap-4">          
          <div className="bg-secondary rounded-2xl"><div className="text-white pl-5 pt-2">Titúlo 1</div></div>
          <div className="bg-secondary rounded-2xl"><div className="text-white pl-5 pt-2">Titúlo 2</div></div>
          <div className="bg-secondary row-span-2 rounded-2xl"><div className="text-white pl-5 pt-2">Titúlo 3</div></div>
          <div className="bg-secondary col-span-2 rounded-2xl"><div className="text-white pl-5 pt-2">Titúlo 1</div></div>
        </div>
      </div>
    </main>
  );
}

export default Main;
