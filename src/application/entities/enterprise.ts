import { Replace } from '@helpers/replace';
import { randomUUID } from 'crypto';

interface EnterpriseProps {
	socialName: string;
	cnpj: string;
	address: string;
	createdAt: Date;
	updatedAt: Date;
}

export class Enterprise {
	private _id: string;
	private props: EnterpriseProps;

	constructor(
		props: Replace<EnterpriseProps, { createdAt?: Date; updatedAt?: Date }>,
	) {
		this._id = randomUUID();
		this.props = {
			...props,
			createdAt: props.createdAt ?? new Date(),
			updatedAt: props.updatedAt ?? new Date(),
		};
	}

	public get id() {
		return this._id;
	}

	public set socialName(socialName: string) {
		this.props.socialName = socialName;
	}

	public get socialName() {
		return this.props.socialName;
	}

	public set cnpj(cnpj: string) {
		this.props.cnpj = cnpj;
	}

	public get cnpj() {
		return this.props.cnpj;
	}

	public set address(address: string) {
		this.props.address = address;
	}

	public get address() {
		return this.props.address;
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
