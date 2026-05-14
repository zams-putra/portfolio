# Math 

- entah ini mau di isi rumus atau apa y
- tapi beberapa ada note buat ngebantu leetcode ku kedepannya nanti
- disini aku buatnya pake Go lang
- soon mungkin akan ada func2 lain yang berhubungan ama math

## Abs number - function
- fungsi yang ngereturn angka absolute
- misal (1 - 4), return nya kan -3 yak
- nah beberapa soal tuh ada yang nyuruh kita nyari gap nya berapa 
- di case ini gap nya 3
- daripada ribet pakai max(1, 4) - min(1, 4), mending pake abs func

```go 
func AbsNum(n int) int {
	if n < 0 {
		return -n
	}
	return n
}
```


## It is prime number - function
- buat deteksi angka prima
- di soal2 leetcode kadang juga ada yg disuruh nyari prime num 
- doi nge return boolean

```go
func isItPrime(n int) bool {
	if n <= 1 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}
```


## Factorial - function 
- ini pernah dapet juga di leetcode
- misal 5! 
- factorial 5, dia bakal ngitung  5 * 4 * 3 * 2 * 1
```go
func factorial(n int) int {
	x := 1
	for n > 1 {
		x *= n
		n--
	}
	return x
}
```