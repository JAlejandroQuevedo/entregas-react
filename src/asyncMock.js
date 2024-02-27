const products = [
    {
        id: "1",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    },
    {
        id: "2",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    },
    {
        id: "3",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    },
    {
        id: "4",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    },
    {
        id: "5",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    },
    {
        id: "6",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    },
    {
        id: "7",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    },
    {
        id: "8",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    },
    {
        id: "9",
        name: "Zapato",
        img: "url-img",
        price: 100,
        category: "calzados",
        description: "Un zapato de puma de color blanco", stock: 10
    }

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject("No hay productos");
        }
    });
};

export const getProduct = (id) => {

    return new Promise((resolve, reject) => {

        if (products.length > 0) {

            const item = products.find(product => product.id === id);

            setTimeout(() => {
                if (item) {
                    resolve(item);
                } else {
                    reject(`No se encuentra el producto con el id ${id}`);
                }
            }, 2000)


        } else {
            reject("No hay productos")
        }

    })
}