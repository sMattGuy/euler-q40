let bignum = ""
for(let i=1;bignum.length<1000000;i++){
	bignum += i;
}
console.log(bignum[0]*bignum[9]*bignum[99]*bignum[999]*bignum[9999]*bignum[99999]*bignum[999999]);