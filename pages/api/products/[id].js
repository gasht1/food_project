import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();
  const { method,
    query:{id},
 } = req;
 
  if (method === "GET") {
    try {
      const products = await Product.findById(id);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const product = await Product.create(req.body);

      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      const product = await Product.create(req.body);

      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

/*



export default async function handler(req, res) {
  
}

/*
    "title" : "pizza1",
    "img" : "image/pizza.png",
    "desc" : "desc1",
    "price" : [60,74,90],
    "extraOption" :[
        {
            "text" : "garlic sauce",
            "price" : 2
        }
    ]
}*/
