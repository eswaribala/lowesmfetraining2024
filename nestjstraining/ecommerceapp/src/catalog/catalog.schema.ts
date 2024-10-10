import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Int32 } from "typeorm";
@Schema()
export class Catalog extends Document{
  @Prop()
  catalogId:number;
  @Prop()
  catalogName:String;

}

export const CatalogSchema=SchemaFactory.createForClass(Catalog);