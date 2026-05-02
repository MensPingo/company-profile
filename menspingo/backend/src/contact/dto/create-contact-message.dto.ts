import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateContactMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name!: string;

  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(4000)
  message!: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  company?: string;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  serviceNeeded?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  budgetRange?: string;

  // Honeypot: bots often fill this; UI should keep it hidden/empty.
  @IsOptional()
  @IsString()
  @MaxLength(0)
  website?: string;
}
