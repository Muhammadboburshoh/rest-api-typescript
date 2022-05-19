import { object, string } from 'zod';

export const createUserScheam = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    }),
    password: string({
      required_error: 'Password is required'
    }).min(6, 'passwor min length 6'),
    passwordConfirmation: string({
      required_error: 'passwordConfirmation is required'
    }),
    email: string({
      required_error: 'email is required'
    }).email('Not valid email')
  }).refine(data => data.password === data.passwordConfirmation, {
    message: 'passwords do not match',
    path: ['passwordConfirmation']
  })
});

export type CreateUserInput = TypeOf<typeof createUserScheam>;
