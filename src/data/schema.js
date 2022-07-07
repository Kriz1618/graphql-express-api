import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        inventory: Int
        stores: [Store]!
    }

    input UpdateProduct {
        name: String
        description: String
        price: Float
        soldout: Soldout
        inventory: Int
    }

    enum Soldout {
        SOLDOUT
        ONSALE
    }

    type Store {
        store: String
    }

    type Query {
        getProduct(id: ID): Product
        getProducts: [Product]
    }

    input StoreInput {
        store: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        inventory: Int
        stores: [StoreInput]!
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(id: ID, input: UpdateProduct): Product
        deleteProduct(id: ID): Product
    }

    type Subscription {
        productUpdates(id: ID): Product
    }
`)

export default schema;
