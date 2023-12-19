const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	if(arr.length==0) return [];
  // Write your code here
	
	let trackSum=0, ans=[], subarray=[];
	for(let i=0;i<arr.length;i++){
		if(trackSum+arr[i]<=n){
			subarray.push(arr[i]);
			trackSum+=arr[i];
		}else{
			ans.push(subarray);
			subarray=[arr[i]];
			trackSum=arr[i];
		}
	}
	ans.push(subarray);
	return ans;
};
 
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
