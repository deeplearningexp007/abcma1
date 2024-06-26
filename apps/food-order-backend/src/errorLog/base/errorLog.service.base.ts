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
  ErrorLog, // @ts-ignore
  UserModel,
} from "@prisma/client";

export class ErrorLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ErrorLogCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.ErrorLogCountArgs>
  ): Promise<number> {
    return this.prisma.errorLog.count(args);
  }

  async errorLogs<T extends Prisma.ErrorLogFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ErrorLogFindManyArgs>
  ): Promise<ErrorLog[]> {
    return this.prisma.errorLog.findMany(args);
  }
  async errorLog<T extends Prisma.ErrorLogFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ErrorLogFindUniqueArgs>
  ): Promise<ErrorLog | null> {
    return this.prisma.errorLog.findUnique(args);
  }
  async createErrorLog<T extends Prisma.ErrorLogCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ErrorLogCreateArgs>
  ): Promise<ErrorLog> {
    return this.prisma.errorLog.create<T>(args);
  }
  async updateErrorLog<T extends Prisma.ErrorLogUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ErrorLogUpdateArgs>
  ): Promise<ErrorLog> {
    return this.prisma.errorLog.update<T>(args);
  }
  async deleteErrorLog<T extends Prisma.ErrorLogDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ErrorLogDeleteArgs>
  ): Promise<ErrorLog> {
    return this.prisma.errorLog.delete(args);
  }

  async getUserModels(parentId: number): Promise<UserModel | null> {
    return this.prisma.errorLog
      .findUnique({
        where: { id: parentId },
      })
      .userModels();
  }
}
