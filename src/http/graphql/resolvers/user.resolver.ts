import { Resolver } from '@nestjs/graphql';
import { User } from '../model/user';

@Resolver(() => User)
export class UserResolver {
	constructor() {}
}
