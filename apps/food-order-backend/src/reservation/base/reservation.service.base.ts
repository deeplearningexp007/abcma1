/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Reservation, // @ts-ignore
  Restaurant, // @ts-ignore
  UserModel,
} from "@prisma/client";

export class ReservationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReservationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationCountArgs>
  ): Promise<number> {
    return this.prisma.reservation.count(args);
  }

  async reservations<T extends Prisma.ReservationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationFindManyArgs>
  ): Promise<Reservation[]> {
    return this.prisma.reservation.findMany(args);
  }
  async reservation<T extends Prisma.ReservationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationFindUniqueArgs>
  ): Promise<Reservation | null> {
    return this.prisma.reservation.findUnique(args);
  }
  async createReservation<T extends Prisma.ReservationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationCreateArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.create<T>(args);
  }
  async updateReservation<T extends Prisma.ReservationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationUpdateArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.update<T>(args);
  }
  async deleteReservation<T extends Prisma.ReservationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReservationDeleteArgs>
  ): Promise<Reservation> {
    return this.prisma.reservation.delete(args);
  }

  async getRestaurants(parentId: number): Promise<Restaurant | null> {
    return this.prisma.reservation
      .findUnique({
        where: { id: parentId },
      })
      .restaurants();
  }

  async getUserModels(parentId: number): Promise<UserModel | null> {
    return this.prisma.reservation
      .findUnique({
        where: { id: parentId },
      })
      .userModels();
  }
}
