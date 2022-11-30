const isAdTurn = (idx, interval = 5) => idx > 0 && idx % interval === 0;

export default isAdTurn;
