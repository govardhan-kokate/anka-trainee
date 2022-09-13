
function isPrimeno( n)
{
	if(n == 1 || n == 0) return false;

	for(let i = 2; i < n; i++)
	{
		if(n % i == 0) return false;
	}

	return true;
}

var N = 100;

for(let i = 1; i <= N; i++)
{
	if(isPrimeno(i)) {
		console.log( i );
	}
}

