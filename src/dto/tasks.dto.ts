import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class createTaskDto {
  @IsString()
  @IsNotEmpty()
  Title: string;
  @IsString()
  @IsOptional()
  Deleteescription?: string;
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}

export class updateTaskDto {
  @IsOptional()
  @IsString()
  Title?: string;
  @IsString()
  @IsOptional()
  Deleteescription?: string;
  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
