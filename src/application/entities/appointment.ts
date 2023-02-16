import { Replace } from '@helpers/replace';
import { randomUUID } from 'crypto';

interface AppointmentProps {
	userId: string;
	enterpriseId: string;
	createdAt: Date;
	updatedAt: Date;
}

export class Appointment {
	private _id: string;
	private props: AppointmentProps;

	constructor(
		props: Replace<AppointmentProps, { createdAt?: Date; updatedAt?: Date }>,
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

	public set userId(userId: string) {
		this.props.userId = userId;
	}

	public get userId() {
		return this.props.userId;
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
