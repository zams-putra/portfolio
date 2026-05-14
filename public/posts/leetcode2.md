# ___________________________________________________________________________________________


# Weekly Contest 501

## Title: Concatenate Array With Reverse
### Difficult - Easy
#### Link: https://leetcode.com/problems/concatenate-array-with-reverse/description/

## Answer :

```go
func concatWithReverse(nums []int) (r []int) {
	r = append(r, nums...)
	for i := len(nums) - 1; i >= 0; i-- {
		r = append(r, nums[i])
	}
	return
}
```

## Key Points
```bash
- tinggal append aja normal nums ama nums versi reverse
- misal nih -> xyz -> nanti output begini ae -> xyzzyx
- atau misal -> nasgor -> output: nasgorrogsan
```

