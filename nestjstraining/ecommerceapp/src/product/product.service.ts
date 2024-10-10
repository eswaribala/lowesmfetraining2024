import { InjectModel } from "@nestjs/mongoose";
import { Catalog } from "../catalog/catalog.schema";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { Product } from "./product.schema";
import { Int32 } from "typeorm";
@Injectable()
export class ProductService{
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(productId: number, productName: string,cost:number): Promise<Product> {
    const newProduct = new this.productModel({ productId,productName,cost });
    return newProduct.save();
  }
}