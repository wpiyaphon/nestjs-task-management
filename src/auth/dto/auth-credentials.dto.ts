import { IsString, Length, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @Length(4, 20)
  username: string;

  @IsString()
  @Length(8, 32)
  @Matches(/((?=.*\d)|(?=.*\W+))/, {
    message: 'password must contain at least one number or special character',
  })
  @Matches(/(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'password must contain at least one uppercase and one lowercase letter',
  })
  password: string;
}
