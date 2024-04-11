export const convertDateKr = (date: string) => {
	const _date = new Date(date);
	_date.setHours(_date.getHours() - 9);
	const year = _date.getFullYear();
	const month = _date.getMonth() + 1;
	const day = _date.getDate();
	const week = weekIndexArray[_date.getDay()];
	return `${year}년 ${month}월 ${day}일(${week})`;
};

export const convertDateSimpleKR = (date: string) => {
	const _date = new Date(date);
	_date.setHours(_date.getHours() - 9);
	const year = _date.getFullYear();
	const YY = String(year).substring(2, 4);
	const month = _date.getMonth() + 1;
	const day = _date.getDate();
	return `${YY}.${month}.${day}`;
};

const weekIndexArray = ['일', '월', '화', '수', '목', '금', '토'];
