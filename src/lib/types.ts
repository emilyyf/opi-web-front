export interface Transaction {
	id: number;
	description: string;
	value: string;
	date: Date;
	type_id: number;
};

export interface Type {
	id: number;
	description: string;
};
