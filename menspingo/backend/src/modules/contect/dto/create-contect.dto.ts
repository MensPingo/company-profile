import { IsString, IsEmail, IsNotEmpty ,} from 'class-validator';
export class CreateContectDto {
      @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsOptional()
  company?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  // Indian phone validation (10 digits)
  @IsOptional()
  @Matches(/^[6-9]\d{9}$/, {
    message: 'Phone number must be a valid Indian number',
  })
  phone?: string;

  @IsString()
  @IsOptional()
  serviceNeeded?: string;

  @IsString()
  @IsOptional()
  budgetRange?: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000)
  message: string;

}
