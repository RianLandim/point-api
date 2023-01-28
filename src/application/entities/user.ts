import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';
import { hashSync } from 'bcrypt';

interface UserProps {
	username: string;
	password: string;
	name: string;
	enterpriseId: string;
	createdAt: Date;
	updatedAt: Date;
}

export class User {
	private _id: string;
	private props: UserProps;

	constructor(
		props: Replace<UserProps, { createdAt?: Date; updatedAt?: Date }>,
	) {
		this._id = randomUUID();

		this.props = {
			...props,
			password: hashSync(props.password, 16),
			createdAt: props.createdAt ?? new Date(),
			updatedAt: props.updatedAt ?? new Date(),
		};
	}

	public get id() {
		return this._id;
	}

	public set username(username: string) {
		this.props.username = username;
	}

	public get username() {
		return this.props.username;
	}

	public set password(password: string) {
		this.props.password = password;
	}

	public get password() {
		return this.props.password;
	}

	public set name(name: string) {
		this.props.name = name;
	}

	public get name() {
		return this.props.name;
	}

	public set enterpriseId(enterpriseId: string) {
		this.props.enterpriseId = enterpriseId;
	}

	public get enterpriseId() {
		return this.props.enterpriseId;
	}

	public set createdAt(createdAt: Date) {
		this.props.createdAt = createdAt;
	}

	public get createdAt() {
		return this.props.createdAt;
	}

	public set updatedAt(updatedAt: Date) {
		this.props.updatedAt = updatedAt;
	}

	public get updatedAt() {
		return this.props.updatedAt;
	}
}
