
# Pre Calculus 
- jangan peduliin catatan yang ini okay, skip aja skip baca yang atas aja
- ini cuman note nyampah ku aja okay, ke atas aja udah nurut ke atas aja

## Sistem bilangan 
- N -> bilangan asli: 1,2,3,4,....
- Z -> bilangan bulat (int): ...,-2,-1,0,1,2,...
- Q -> bilangan rasional: Q = a/b -> a, b (Z [bilangan bulat]) && b != 0
- R -> bilangan riil: semua bilangan, termasuk bilangan irrasional (akar, phi)

### Garis bilangan 
- semua num rill ada posisi garisnya
- negative kiri nya 0 positive kanan nya 0
- 0, 1, akar2 (1,4), 2, 3, phi (3,14), 4

### Sifat bilangan riil
- triktomi: kalo x y num rill salah satu ini berlaku: x > y, x < y, x = y
- ketransifitan: if x < y and y < z maka x < z
- penjumlahan: if x < y maka x + z < y + z
- perkalian: if z > 0 && x < y maka z * x < z * y, if z < 0 and x < y maka z * x > z * y

### Interval
- {x|x < a} -> (-∞, a)
- {x|x <= a} -> (-∞, a]
- {x| a < x  < b} -> (a, b)
- {x| a <= x  <= b} -> [a,b]
- {x| x > b } -> (b, ∞)
- {x| x >= b} -> [b, ∞)
- {x| x E R} -> (∞, ∞)

### Pertidaksamaan
- pernyataan matematis yg nunjukin proposisi 2 atau lebih object
- notasi dasar: <, >, <=, >=, !=
- task 1:
```rb
1). 2x -8 < 4x + 2
-> 2x - 4x < 2 + 8 
-> -2x < 10
-> 2x > -10 
-> x > -10/2
-> hp = (-5, ∞)
graph: -5, -4, -3, ..., 0, 1, 2, ...
```
- task 2:
```rb
1). 9 >= 2x - 5 >= 3
-> 9 + 5 >= 2x - 5 + 5 >= 3 + 5
-> 9 + 5 >= 2x >= 3 + 5
-> 14 >= 2x >= 8
-> (14 >= 2x >= 8) / 2
-> 14 / 2 = 7 && 2x / 2 = x (atau 1) && 8 / 2 = 4
-> 7 >= x >= 4
-> 4 <= x <= 7
-> hp = [4, 7]
graph: 4, ..., 7
```
- task 3:
```rb
1). -7 < 2x + 3 <= 15
-> -7 - 3 < 2x + 3 - 3 <= 15 - 3
-> -7 - 3 < 2x <= 15 - 3
-> -10 < 2x <= 12
-> (-10 < 2x <= 12) / 2
-> -10 / 2 = -5 && 2x / 2 = x (atau 1) && 12 / 2 = 6
-> -5 < x <= 6
-> hp = (-5, 6]
graph: -5, -4, ..., 6
```
- graph note: 
```rb
- < di hp (
- <= di hp [
- > di hp )
- >= di hp ]
```
- task 4 :
```rb

- cara 1: (a + b)**2 = a**2 + 2 * a * b + b ** 2
-> (a + b)**2 = a**2 + 2 * a * b + b ** 2
-> (a_1 + b_1) * (a_2 + b_2) = a**2 + 2 * a * b + b ** 2
-> (a_1 + b_1) * (a_2 + b_2) = a**2 + 2 * a_1 * b_2 + a_2 * b_1 + b ** 2
-> a**2 + 2 * a_1 * b_2 + a_2 * b_1 + b ** 2 = (a_1 + b_1) * (a_2 + b_2)
-> a**2 + 2 * a * b + b ** 2 = (a_1 + b_1) * (a_2 + b_2)


1.) 2x**2 + 6x + 4 > 0
-> a**2 + 2 * a * b + b ** 2 = f1(a_1 + b_1) * f2(a_2 + b_2)
-> 2x**2 = a**2
-> (2 * a * b) = 6x
-> b ** 2 = 4
-> f1() * f2()
-> f1() -> 2x**2 = 2x * x 
-> after1: f1(2x, [] ) * f2(x, [])
-> f2() -> 4 = -> cari terbesar buat dapetin 4 [1 * 4, 4 * 1, 2 * 2]
-> after2: cari a2 and b1 
-> arr pencarian: [cari1(1 * 4), cari2(2 * 2)]
-> cari1: f1(2x, [] ) * f2(x, []) -> f1(a_1 + b_1) * f2(a_2 + b_2) 
-> cari1: f1(2x * 1) * f2(x * 4) 
-> cari1: (a_1 * b_2) + (a2 * b1) -> f1(2x * 4 = 8x) + f2(x * 1) -> 8x + x = 9x [salah]
-> cari2: f1(2x, [] ) * f2(x, []) -> f1(a_1 + b_1) * f2(a_2 + b_2) 
-> cari2: f1(2x * 4) * f2(x * 1)
-> cari2: (a_1 * b_2) + (a2 * b1) -> f1(2x * 1 = 2x) + f2(x * 4 = 4x) -> 2x + 4x = 6x [benar]
-> cari3: f1(2x, [] ) * f2(x, []) -> f1(a_1 + b_1) * f2(a_2 + b_2) 
-> cari3: f1(2x * 2) * f2(x * 2)
-> cari3: (a_1 * b_2) + (a2 * b1) -> f1(2x * 2 = 4x) + f2(x * 2 = 2x) -> 4x + 2x = 6x [benar]
-> next: f1(a_1 + b_1) * f2(a_2 + b_2) -> f1(2x, [] ) * f2(x, [])
-> next: f1(2x + 4) * f2(x + 1) 
-> f1: 2x + 4 = 0
-> f1: 2x = -4
-> f1: x = -4/2 -> -2
-> f2: x + 1 = 0
-> f2: x = -1
-> titik pemecah: f1 = -2 && f2 = -1
-> graph1: -2,-1 -> dibawah -2 dan -1 ada -3
-> setiap x diganti -3: 2x**2 + 6x + 4 > 0 -> 2(-3)**2 + 6(-3) + 4
-> 2(-3**2 = 9) -> 2 * 9 = 18 && 6 * -3 = -18 
-> 18 + -18 + 4 > 0 
-> graph2: -2,-1 -> diatas -2 dan dibawah -1 ada 1.5
-> setiap x diganti -1.5: 2x**2 + 6x + 4 > 0 -> 2(-1.5)**2 + 6(-1.5) + 4
-> 2(-1.5**2 = 2,25) -> 2 * 2.25 = 4.5 && 6 * -1.5 = -9 
-> 4.5 + -9 + 4 > 0 -> -4.5 + 4 -> -8.5 > 0 -> -4.6, // -8.5 harusnya -0.5
-> hp = (-∞, 2] && (-1, ∞)
-> graph: (...,2) && (-1,...)



- cara 2: x_1_2 = (-b + (sqrt(b**2 - 4 * a * c)) / 2 * a
2.) 2x**2 - 5x - 3 < 0
-> a[2x**2] b[-5x] c[-3] -> a[2] b[-5] c[-3]
-> x_1_2 = (-(-5) + sqrt(-5**2 - (4 * 2 * -3))) / 2 * 2
-> x_1_2 = (5 + sqrt(25 - (-24))) / 4
-> x_1_2 = (5 + sqrt(49)) / 4
-> x_1_2 = (5 + 7) / 4
-> x_1 - (5 + 7) / 4 = 3 -> x1 = 3
-> x_2 - (5 - 7) / 4 = -2 / 4 = -1/2 -> x2 = -1/2
-> titik pemecah: x1 = 3 && x2 = -1/2
-> note: -1/2 = -0.5, kalau 1/2 = 0.5
-> graph: -0.5,...,3, cari yang dibawah -0.5, misal -1
-> 2x**2 - 5x - 3 < 0 -> 2(-1**2) - 5(-1) - 3 < 0
-> 2(-1**2 = 1) - 5(-1) - 3 < 0
-> 2(1) (- 5(-1)) - 3 < 0 -> 2 + 5 - 3 < 0
-> graph: -0.5,...,3, cari yang diaras -0.5, dan dibawah 3, misal 1
-> 2x**2 - 5x - 3 < 0 -> 2(1**2) - 5(1) - 3 < 0
-> dibawah -0.5 positive, di atas 3 positive, dalam itu negative
-> hp = (-1/2, 3)



3.) 2x-4 <= 6 - 3x <= 3x + 6 
a: 2x-4 <= 6 - 3x
a: 2x + 3x <= 6 + 4 -> 5x <= 10 -> 10/5 = 2
a: x <= 2
b: 6 - 3x <= 3x + 6 
b: -3x - 3x <= 6 - 6 
b: -6x <= 0   
b: 6x >= 0   
b: x >= 0   
hp: (0,2)
graph: 0,..,2

4.) (1 / x + 1) <  (2 / 3x - 1)
-> (1 / x + 1) -  (2 / 3x - 1) < 0
-> 1(3x - 1) - 2(x + 1) / (x + 1) * (3x - 1) 
-> (3x - 1) - (2x + 2) / (x + 1) * (3x - 1) 
-> (3x - 2x) + (1 - 2) / (x + 1) * (3x - 1) 
-> (x - 1) / (x + 1) * (3x - 1) 
-> a: x - 1 = 0 -> x = 1
-> b: x + 1 = 0 -> x = -1
-> c: 3x - 1 = 0 -> 3x = 1 -> x = 1/3
-> tp: -1, 1/3, 1
-> graph: -1,...,1/3, ..., 1
-> hp = (-∞, -1) U (1/3, 3)


5.) (3 / x + 2) > (4 / x + 4)
-> (3 / x + 2) - (4 / x + 4) < 0
-> 3 (x + 4) - 4(x + 2) / (x + 2) * (x + 4) > 0
-> (3x + 12) - (4x + 8) / (x + 2) * (x + 4) > 0
-> (3x - 4x + 12 - 8) / (x + 2) * (x + 4) > 0
-> (-x + 4) / (x + 2) * (x + 4) > 0
-> a: -x + 4 = 0 -> -x = -4 -> x = 4
-> b: x + 2 = 0 -> x = -2
-> c: x + 4 = 0 -> x = -4
-> tp: -4, -2, 4
-> graph: -4,...,-2, ..., 4
-> hp = (-∞, -4) U (-2, 4)

```

## Graph and Function
- fungsi: pemetaan setiap anggota sebuah himpunan[domain] kepada aggota himpunan lain[kodomain]
- cth: [1,2,3] -> domain | [a,b,c,d,e] -> kodomain 
- domain & kodomain = range
- domain[1,2,3] kodomain[a,b,c,d,e] range[{1,b}, {2,d}, {3, a}] 

### Grafik fungsi
### fungsi linear: 
- garis lurus graphnya
- cth tentukan sketsa graph: y = 2x - 3; x > 2; x <= 6
```rb
1. temukan domain dari batas x
-> x > 2, x <= 6
-> kira2: 3,4,5,6


2. temukan kodomain dari y
-> 2x - 3
-> x = [3,4,5,6]
-> y = [] && x = [3,4,5,6], itung per arr dari x
-> y_1 = 2x_1 - 3 -> 2(3) - 3 = 3
-> y_2 = 2x_2 - 4 -> 2(4) - 3 = 5
-> y_3 = 2x_3 - 5 -> 2(5) - 3 = 7
-> y_4 = 2x_4 - 6 -> 2(6) - 3 = 9
-> y = [3,5,7,9]
-> x = [3,4,5,6] && y = [3,5,7,9]


3. temukan range dari hasil x dan y
-> range = [{3,3}, {4,5}, {5, 7}, {6, 9}] 
```
- grafiknya? -> bikin sendiri coret sendiri di kertas  titik koordinat2 range nya
- lalu luruskan garisnya

### fungsi kuadrat: 
- persamaan var, punya pangkat tertinggi 2, garis kurva
- cth tentukan sketsa graph: y = x**2 - 9
```rb
1. temukan domain dari batas x 
-> y = x**2 - 9
-> [x, ] [x, ]
-> ax**2 + bx + c ->  [1*9, 3 * 3]
-> [x - 3 ] [x + 3 ]
-> x - 3 = 0 -> x = 3
-> x + 3 -> x = -3
-> kira2: -3,-2,...,3

2. temukan kodomain dari y
-> 2x - 3
-> x = [-3,-2,-1,0,1,2,3]
-> y = [] && x = [-3,-2,-1,0,1,2,3], itung per arr dari x
-> y_1 = (-3)**2 - 9 = -3 * -3 = 9 - 9 -> 0
-> y_2 = (-2)**2 - 9 = -2 * -2 = 4 - 9 -> -5
-> y_3 = (-1)**2 - 9 = -1 * -1 = 1 - 9 -> -8
-> skip: y = [0, -5, -8, -9, -8, -5, 0]
-> x = [-3,-2,-1,0,1,2,3] && y = [0, -5, -8, -9, -8, -5, 0]

3. temukan range dari hasil x dan y
-> range = [{-3, 0}, {-2, -5}, {-1, -8}, {0, -9}, {1, -8}, {2, -5}, {3, 0}]
- grafiknya? -> bikin sendiri coret sendiri di kertas  titik koordinat2 range nya
- lalu buat kurva garisin lengkung aja
```

### Soal 
```rb
1). tentukan sketsa grafik y = -(x-3)**2 + 1
-> y = -(x-3)**2 + 1
-> temukan domain dari batas x
-> y = -(x-3)**2 + 1
-> (x-3)**2
-> formula: ax**2 + bx + c
-> [(x**2) + (2 * x * -3) + (-3**2)]
-> x**2 + -6x + 9
-> (x**2 -6x  +9)
-> y = -(x-3)**2 + 1
-> y = -(x**2 -6x  +9) + 1
-> y = -x**2 6x -9 + 1
-> y = -x**2 6x -8
-> (-x ) (x)
```