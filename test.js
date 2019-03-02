var longestCommonPrefix = function(haystack, needle) {
	if (needle === '') return 0;
	if (needle.length > haystack.length) return -1;
	//check for needle length
	const len = needle.length;
	for (let i = 0; i < len; i++) {
		//extract a subtring from haystack with same length as needle
		const piece = haystack.slice(i, i + len);
		console.log(piece, needle);
		//check if both pirece and needle are same length
		//if not, end of loop
		if (piece.length !== len) {
			console.log(piece.length, len);
			break;
		}
		//check if the piece is equal to needle
		if (piece === needle) return i;
	}
	return -1;
};
console.log(longestCommonPrefix('hello', 'll'));

// const a = '123';

// console.log(a.slice(1, 8).length);
