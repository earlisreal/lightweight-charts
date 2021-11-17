import { Coordinate } from '../model/coordinate';

import { shapeSize } from './series-markers-utils';

export function drawDiamond(
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number
): void {
	const diamondSize = shapeSize('diamond', size);
	const halfSize = (diamondSize - 1) / 2;

	ctx.beginPath();
	ctx.moveTo(centerX, centerY - halfSize);
	ctx.lineTo(centerX - halfSize, centerY);
	ctx.lineTo(centerX, centerY + halfSize);
	ctx.lineTo(centerX + halfSize, centerY);
	ctx.lineTo(centerX, centerY - halfSize);
	ctx.fill();
}

export function hitTestDiamond(
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	const diamondSize = shapeSize('diamond', size);
	const halfSize = (diamondSize - 1) / 2;
	const left = centerX - halfSize;
	const top = centerY - halfSize;

	return x >= left && x <= left + diamondSize &&
		y >= top && y <= top + diamondSize;
}
