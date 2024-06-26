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
  TransactionStatus, // @ts-ignore
  Transaction,
} from "@prisma/client";

export class TransactionStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TransactionStatusCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionStatusCountArgs>
  ): Promise<number> {
    return this.prisma.transactionStatus.count(args);
  }

  async transactionStatuses<T extends Prisma.TransactionStatusFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionStatusFindManyArgs>
  ): Promise<TransactionStatus[]> {
    return this.prisma.transactionStatus.findMany(args);
  }
  async transactionStatus<T extends Prisma.TransactionStatusFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionStatusFindUniqueArgs>
  ): Promise<TransactionStatus | null> {
    return this.prisma.transactionStatus.findUnique(args);
  }
  async createTransactionStatus<T extends Prisma.TransactionStatusCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionStatusCreateArgs>
  ): Promise<TransactionStatus> {
    return this.prisma.transactionStatus.create<T>(args);
  }
  async updateTransactionStatus<T extends Prisma.TransactionStatusUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionStatusUpdateArgs>
  ): Promise<TransactionStatus> {
    return this.prisma.transactionStatus.update<T>(args);
  }
  async deleteTransactionStatus<T extends Prisma.TransactionStatusDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TransactionStatusDeleteArgs>
  ): Promise<TransactionStatus> {
    return this.prisma.transactionStatus.delete(args);
  }

  async getTransactions(parentId: number): Promise<Transaction | null> {
    return this.prisma.transactionStatus
      .findUnique({
        where: { id: parentId },
      })
      .transactions();
  }
}
