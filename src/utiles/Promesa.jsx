const Promesa = () => {
  const productos = [
    {
      id: "1",
      nombre: "FIESTA",
      marca: "FORD",
      precio: 1550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
    {
      id: "2",
      nombre: "GALAXY",
      marca: "FORD",
      precio: 550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
    {
      id: "3",
      nombre: "ESCORT",
      marca: "FORD",
      precio: 2550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
    {
      id: "4",
      nombre: "CIVIC",
      marca: "HONDA",
      precio: 3550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
    {
      id: "5",
      nombre: "PRELUDE",
      marca: "HONDA",
      precio: 4550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
    {
      id: "6",
      nombre: "FIT",
      marca: "HONDA",
      precio: 6550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
    {
      id: "7",
      nombre: "CAMARO",
      marca: "CHEVROLET",
      precio: 8550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
    {
      id: "8",
      nombre: "S10",
      marca: "CHEVROLET",
      precio: 9550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
    {
      id: "9",
      nombre: "CRUIZE",
      marca: "CHEVROLET",
      precio: 7550,
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, libero? Est similique adipisci facilis dicta sit excepturi qui omnis impedit nobis placeat, perspiciatis soluta dolore quos mollitia labore, sunt quam",
    },
  ];

  return new Promise((resolve, reject) => {
    resolve(productos);
    reject(console.log("no anda"));
  });
};

export default Promesa;
