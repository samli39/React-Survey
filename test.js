// var longestCommonPrefix = function(nums1, m, nums2, n) {
// 	let ans = [];
// 	while (m || n) {
// 		let first = m === 0 ? Number.MIN_SAFE_INTEGER : nums1[m - 1];
// 		let second = n === 0 ? Number.MIN_SAFE_INTEGER : nums2[n - 1];
// 		if (first > second || !second) {
// 			m--;
// 			ans.unshift(first);
// 		} else {
// 			n--;
// 			ans.unshift(second);
// 		}
// 	}
// 	console.log(ans);
// 	return ans;
// };
// console.log(longestCommonPrefix([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

const a = {
	a: 'b',
};

a['a'] ? console.log('yes') : console.log('no');
