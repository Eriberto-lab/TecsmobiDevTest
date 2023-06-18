const { returnMenu } = require("../test");

describe("Testando a função returnMenu", () => {
  it("Ao chamar a função passando o id 'home' deve retornar apenas o objeto referente ao home", () => {
    const result = returnMenu("home");
    const expected = [
      {
        id: "home",
        label: "Página Inicial",
        link: "/",
        menuSupId: null,
      },
    ];
    expect(result).toEqual(expected);
  });

  it("Ao passar 'register' deve retornar o menu e TODOS os filhos, incluindo os subníveis", () => {
    const result = returnMenu("register");
    const expected = [
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
    ];
    expect(result).toEqual(expected);
  });

  it("Ao passar 'store' deve retornar todos os objetos relacionados ao id 'store' ou mennuSupId 'store'", () => {
    const result = returnMenu("store");
    const expected = [
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
    ];
    expect(result).toEqual(expected);
  });

  it("Ao passar um id inválido deve retornar um array vazio", () => {
    const result = returnMenu("invalid");
    const expected = [];
    expect(result).toEqual(expected);
  });
});
