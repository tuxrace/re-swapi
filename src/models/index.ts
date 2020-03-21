import people from './people/index';

export interface RootModel {
	people: typeof people
};

export const models: RootModel = { people }
