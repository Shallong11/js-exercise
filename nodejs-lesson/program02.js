var arr = process.argv;

var sum = 0;

if (arr.length > 2) {
	for (var i = 2; i < arr.length; i++) {
		sum += parseInt(arr[i]);
	}
}

console.log(sum);
