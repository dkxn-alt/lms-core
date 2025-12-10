import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateMemberDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  active?: boolean;
}

// model members {
//   id        String    @id @default(uuid()) @db.Uuid
//   name      String
//   email     String    @unique
//   active    Boolean?  @default(true)
//   joined_at DateTime? @default(now()) @db.Timestamptz(6)
//   loans     loans[]
// }
