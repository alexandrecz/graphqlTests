import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(of => Appointment)
export class AppointmentResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        title: "Teste",
      },
    ];
  }

  @Mutation(returns => Appointment)
  async createAppointment(@Arg("input") data: CreateAppointmentInput): Promise<Appointment> {
    const appointment = {
      title: data.title,
    };

    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    return {
      name: "John doe",
    };
  }
}
