import { Field, ObjectType } from "type-graphql";

/**
 * Her we just define the fields
 * frontend will need to consume
 */

@ObjectType()
export class Appointment {
    @Field()
    title: string
}