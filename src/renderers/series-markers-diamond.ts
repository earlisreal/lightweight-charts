import { Coordinate } from '../model/coordinate';

import { shapeSize } from './series-markers-utils';

export function drawDiamond(
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number
): void {
	const squareSize = shapeSize('diamond', size);
	const halfSize = (squareSize - 1) / 2;
	const left = centerX - halfSize;
	const top = centerY - halfSize;

	ctx.translate(centerX, centerY);
	ctx.rotate(45 * Math.PI / 180);
	ctx.translate(centerX * -1, centerY * -1);
	ctx.fillRect(left, top, squareSize, squareSize);
}

export function hitTestDiamond(
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	const squareSize = shapeSize('diamond', size);
	const halfSize = (squareSize - 1) / 2;
	const left = centerX - halfSize;
	const top = centerY - halfSize;

	return x >= left && x <= left + squareSize &&
		y >= top && y <= top + squareSize;
}
