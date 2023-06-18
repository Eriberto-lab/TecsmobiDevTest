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
