import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Product extends Document{
  @Prop()
  productId:number;
  @Prop()
  productName:string;
  @Prop()
  cost:number;
}

export const ProductSchema=SchemaFactory.createForClass(Product);