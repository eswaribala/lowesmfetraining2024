import { InjectModel } from "@nestjs/mongoose";
import { Catalog } from "../catalog/catalog.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { Product } from "./product.schema";
@Injectable()
class ProductService{
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(productId: bigint, productName: string,cost:bigint): Promise<Product> {
    const newProduct = new this.productModel({ productId,productName,cost });
    return newProduct.save();
  }
}