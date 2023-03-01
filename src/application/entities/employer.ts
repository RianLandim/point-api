import { Replace } from '@helpers/replace';
import { randomUUID } from 'crypto';

interface EmployerProps {
	name: string;
	jobDocument: string;
	cpf: string;
	createdAt: Date;
	updatedAt: Date;
}

export class Employer {
	private _id: string;
	private props: EmployerProps;

	constructor(
		props: Replace<EmployerProps, { createdAt?: Date; updatedAt?: Date }>,
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

	public set name(name: string) {
		this.props.name = name;
	}

	public get name() {
		return this.props.name;
	}
	public set jobDocument(jobDocument: string) {
		this.props.jobDocument = jobDocument;
	}

	public get jobDocument() {
		return this.props.jobDocument;
	}
	public set cpf(cpf: string) {
		this.props.cpf = cpf;
	}

	public get cpf() {
		return this.props.cpf;
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
