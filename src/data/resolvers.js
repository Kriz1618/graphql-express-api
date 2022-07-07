import { Widgets } from './dbConnectors.js';

const resolvers = {
    getProducts: () => {
        return new Promise((resolve, reject) => {
            Widgets.find({}, (err, products) => {
                if (err) reject(err);
                resolve(products);
            });
        });
    },
    getProduct: ({ id }) => {
        return new Promise((resolve, reject) => {
            Widgets.findById({ _id: id }, (err, product) => {
                if (err) reject(err)
                else resolve(product)
            });
        });
    },
    createProduct: ({input}) => {
        return new Promise((resolve, reject) => {
            const newWidget = new Widgets({
                stores: input.stores,
                name: input.name,
                description: input.description,
                price: input.price,
                soldout: input.soldout,
                inventory: input.inventory,
            });

            newWidget.save((err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        });
    },
    updateProduct: ({ id, input }) => {
        return new Promise((resolve, reject) => {
            Widgets.findByIdAndUpdate(id, input, { new: true }, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    },
    deleteProduct: ({ id }) => {
        return new Promise((resolve, reject) => {
            Widgets.findByIdAndDelete(id, (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    }
};

export default resolvers;
