import type { Position } from './position.type';
import type { Translation } from './translation.type';

export type Story = {
	name: string;
	position_image?: Position;
	positions_text?: Position[];
	text_align?: string;
	translations?: Translation[];
};
