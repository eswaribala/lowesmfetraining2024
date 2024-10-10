import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Catalog } from "./catalog.schema";

@Injectable()
class CatalogService{

  constructor(@InjectModel(Catalog.name) private catalogModel: Model<Catalog>) {}

  async findAll(): Promise<Catalog[]> {
    return this.catalogModel.find().exec();
  }

  async create(catalogId: bigint, catalogName: string): Promise<Catalog> {
    const newCatalog = new this.catalogModel({ catalogId,catalogName });
    return newCatalog.save();
  }




}