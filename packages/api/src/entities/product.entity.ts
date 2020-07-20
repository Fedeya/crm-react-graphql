import { ObjectType, Field, Int, Float, ID } from 'type-graphql';
import { prop, getModelForClass } from '@typegoose/typegoose';

@ObjectType()
export class Product {
  @Field(type => ID)
  id!: string;

  @Field()
  @prop({ trim: true })
  name!: string;

  @Field(type => Int)
  @prop()
  quantity!: number;

  @Field(type => Float)
  @prop()
  price!: number;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;
}

export const ProductModel = getModelForClass(Product, {
  schemaOptions: { timestamps: true }
});