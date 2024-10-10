import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class Product extends Document{
  @Prop()
  productId:bigint;
  @Prop()
  productName:string;
  @Prop()
  cost:string;
}

export const ProductSchema=SchemaFactory.createForClass(Product);