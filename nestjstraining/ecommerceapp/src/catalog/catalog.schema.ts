import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
class Catalog extends Document{
  @Prop()
  catalogId:bigint;
  @Prop()
  catalogName:String;

}

export const CatalogSchema=SchemaFactory.createForClass(Catalog);