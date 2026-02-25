# Weekly Contest 490

## Title: Check Digitorial Permutation
### Difficult - Medium
#### Link: https://leetcode.com/problems/check-digitorial-permutation/description/

## Answer :

```go
func CheckDigitalPermutation(n int) bool {
	x, s := 0, strconv.Itoa(n)
	for i := 0; i < len(s); i++ {
		num, _ := strconv.Atoi(string(s[i]))
		x += factorial(num)
		fmt.Println(factorial(num))
	}
	sX := strconv.Itoa(x)
	runeSx, sRune := []rune(sX), []rune(s)
	sort.Slice(runeSx, func(i, j int) bool {
		return runeSx[i] < runeSx[j]
	})
	sort.Slice(sRune, func(i, j int) bool {
		return sRune[i] < sRune[j]
	})

	return string(runeSx) == string(sRune)
}

func factorial(n int) int {
	x := 1
	for n > 1 {
		x *= n
		n--
	}
	return x
}

```

## Key Points

### penjumlahan factorial setiap index
#### - setiap index dari n, harus di hitung factorialnya

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

##### contoh gagal: 253
- 2 factorial = 2 * 1 = 2
- 5 factorial = 5 * 4 * 3 * 2 * 1 = 120
- 3 factorial = 3 * 2 * 1 = 6
##### contoh berhasil: 145
- 1 facotrial = 1 return 1 karna kalau 0 doi malah 0 atau 1 * 1 aja kayak trik ku
- 4 factorial = 4 * 3 * 2 * 1 = 24
- 5 factorial = 5 * 4 * 3 * 2 * 1 = 120


#### - jumlahkan masing masing hasil
##### contoh gagal:
- 2 + 120 + 6 = 128
##### contoh berhasil: 
- 1 + 24 + 120 = 145

### di samakan secara sorting dengan sort input dan sort hasil sum factorial
#### - sorting input sort and sum factorial dari yg terkecil
##### contoh gagal:
- sort input 253 -> sort: 235
- sort sum factor 128 -> sort: 128
##### contoh berhasil: 
- sort input 145 -> sort: 145
sort sum factor 145 -> sort: 145


### bandingkan apakah input sama dengan hasil penjumlahan factorial setiap index
##### contoh gagal: 
- 235 != 128 maka return false
##### contoh berhasil: 
- 145 == 14= maka return true

# ___________________________________________________________________________________________

# Weekly Contest 490

## Title: Find the Score Difference in a Game
### Difficult - Medium
#### Link: https://leetcode.com/problems/find-the-score-difference-in-a-game/description/

## Answer :

```go
func FindTheScoreDiffInAnGame(nums []int) int {
	p1b := true
	p1, p2 := 0, 0
	for i := 0; i < len(nums); i++ {
		if nums[i]%2 != 0 {
			p1b = !p1b
		}
		if (i+1)%6 == 0 {
			p1b = !p1b
		}
		if p1b {
			p1 += nums[i]
		} else {
			p2 += nums[i]
		}
	}

	return p1 - p2
}
```
### My first answer (wrong)
```go 
 func FindTheScoreDiffInAnGame(nums []int) int {
 	p1b := true
 	p1, p2 := 0, 0
 	for i := 0; i < len(nums); i++ {
 		if nums[i]%2 != 0 {
 			if p1b {
 				if (i+1)%6 != 0 {
 					p2 += nums[i]
 					p1b = !p1b
 				} else {
 					p1 += nums[i]
 				}
 			} else {
 				if (i+1)%6 != 0 {
 					p1 += nums[i]
 					p1b = !p1b
 				} else {
 					p2 += nums[i]
 				}
 			}
 		} else {
 			if p1b {
 				p1 += nums[i]
 			} else {
 				p2 += nums[i]
 			}
 		}
 	}
 	return p1 - p2
 }

```


## Key Points
- ada p1, dan p2
- p1 main duluan
- kalo index 6 doi tuker giliran
- kalo nums[i] ganjil doi tuker giliran
- kalo dalam giliran, doi tambah skor sesuai nums[i]

# ___________________________________________________________________________________________