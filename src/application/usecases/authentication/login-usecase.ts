import { User } from '@app/entities/user';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserViewModel } from '../../../infra/http/view-model/user-view-model';

@Injectable()
export class Login {
	constructor(private jwtService: JwtService) {}

	async execute(user: User) {
		const payload = { username: user.username, sub: user.id };
		return {
			user: UserViewModel.toHttp(user),
			accessToken: this.jwtService.sign(payload),
		};
	}
}
