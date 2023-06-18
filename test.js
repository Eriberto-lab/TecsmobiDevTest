const menuTree = [
  {
    id: "home",
    label: "Página Inicial",
    link: "/",
    menuSupId: null,
  },
  {
    id: "register",
    label: "Cadastros",
    link: "/register",
    menuSupId: null,
  },
  {
    id: "people",
    label: "Pessoa",
    link: "/register/people",
    menuSupId: "register",
  },
  {
    id: "car",
    label: "Carro",
    link: "/register/car",
    menuSupId: "register",
  },
  {
    id: "store",
    label: "Loja",
    link: "/register/store",
    menuSupId: "register",
  },
  {
    id: "internalStore",
    label: "Loja Interna",
    link: "/register/store/internal",
    menuSupId: "store",
  },
  {
    id: "externalStore",
    label: "Loja Externa",
    link: "/register/store/external",
    menuSupId: "store",
  },
  {
    id: "report",
    label: "Relatórios",
    link: "/report",
    menuSupId: null,
  },
];

//   Levando em consideração o array acima, escreva uma função que deve receber o ID como parâmetro de entrada e retornar um novo array com o menu selecionado e os sub menus (obs: usar 'menuSupId' como referência entre os menus e submenus)

//   Casos de teste:

//   1 - ao chamar a função passando o id 'home' deve retornar apenas o objeto referente ao home:
//   [
//     {
//        id: 'home',
//        label: 'Página Inicial',
//        link: '/',
//        menuSupId: null
//     }
//   ]

//   2 - ao passar 'register' deve retornar o menu e TODOS os filhos, incluindo os subníveis:
//   [
//     { id: 'register', ... },
//     { id: 'car', ... },
//     { id: 'store', ... },
//     { id: 'internalStore', ... },
//     { id: 'externalStore', ... }
//   ]

//   3 - ao passar 'store' deve retornar:
//   [
//     { id: 'store', ... },
//     { id: 'internalStore', ... },
//     { id: 'externalStore', ... }
//   ]

//   4 - ao passar um id inválido deve retornar um array vazio:
//   []
//   teste dev.txt
//   Exibindo teste dev.txt…

const returnMenu = (menu) => {
  switch (menu) {
    case "home":
      return menuTree.filter(
        (item) => item.id === "home" || item.menuSupId === "home"
      );
    case "register":
      return menuTree.filter(
        (item) =>
          item.id === "register" ||
          item.menuSupId === "register" ||
          item.link.includes("register")
      );
    case "store":
      return menuTree.filter(
        (item) => item.id === "store" || item.menuSupId === "store"
      );
    case "report":
      return menuTree.filter(
        (item) => item.id === "report" || item.menuSupId === "report"
      );
    default:
      return [];
  }
};

console.log(returnMenu("register"));

module.exports = { returnMenu };
