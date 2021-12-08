import { EnumListPipe } from './enum-list.pipe';
import { EnumAsString } from './enum-as-string.pipe';

export * from './enum-list.pipe';
export * from './enum-as-string.pipe';

export const ALL_SHARED_PIPES = [
	EnumListPipe,
	EnumAsString
];
