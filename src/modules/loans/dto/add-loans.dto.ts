import { IsUUID } from 'class-validator';

export class AddLoanDto {
  @IsUUID()
  memberId: string;

  @IsUUID()
  bookId: string;
}
