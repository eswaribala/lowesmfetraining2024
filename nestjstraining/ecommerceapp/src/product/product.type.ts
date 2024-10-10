import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductType {
  @Field(() => ID)
  productId: number;

  @Field()
  productName: string;
  @Field()
  cost:number

}