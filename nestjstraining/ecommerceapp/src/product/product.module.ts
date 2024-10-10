import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { CatalogService } from "../catalog/catalog.service";
import { CatalogResolver } from "../catalog/catalog.resolver";
import { Product, ProductSchema } from "./product.schema";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])

  ],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
