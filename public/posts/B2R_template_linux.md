# Template proses main CTF boot to root (Linux)

![img](https://raw.githubusercontent.com/Tomba-Hopkins/Warung-Sidi/refs/heads/main/img/menu/2.jpg)

# Foothold

- ini adalah template2 ku buat main ctf b2r
- kedepannya akan ku update selalu

## Scanning Service with nmap
- cek tcp
```bash
nmap -sCV --min-rate 1000 [ip] -vv -oN scan.nmap -p-
```

- cek udp
```bash
nmap -sU --min-rate 1000 [ip] -vv -oN scan_udp.nmap -p- 
```

## FTP check
kalau anonymous di FTP target nyala
```bash
ftp [ip] 21
[login with: Anonymous:Anonymous]
```
- check file di ftp, kali aja ada file penting dan download aja
```bash
ls -la
get [namafile.ekstensi]
```

## Fuzzing directory
ini dipakai kalau ip ada service web nya
- with gobuster
```bash
gobuster dir -u http://[ip] -w ~/wordlists/seclists/web-content/common.txt | tee dir.txt
```
- with dirsearch (kalau gobuster gabisa)
```bash
dirsearch -u http://[ip] -w ~/wordlists/seclists/web-content/common.txt
```

## Fuzzing Subdomain
kali aja web nya pakai domain misal http://nasgor.jmk
- with gobuster
```bash
gobuster vhost -u nasgor.jmk -w ~/wordlists/seclists/dns/subdomains-top1million-5000.txt --append-domain | tee subdo.txt
```
- with ffuf
```bash
ffuf -u "http://nasgor.jmk" -H "HOST: FUZZ.nasgor.jmk" -w ~/wordlists/seclists/dns/subdomains-top1million-5000.txt  -fw 522
```
- kalau response nya banyak (false positive, filter length nya)
```bash
ffuf -u "http://nasgor.jmk" -H "HOST: FUZZ.nasgor.jmk" -w ~/wordlists/seclists/dns/subdomains-top1million-5000.txt  -fw (jumlah length nya)
```


## Check Exploit
kali aja webnya vuln sama public Exploit
- check versi di source code nya (ctrl + u) di browser lalu cek2 di comment atau source kali aja ada versi
- kalau ada bisa lanjutkan cari public exploit nya
- di google / exploitdb / github
```txt
cari aja di google: [nama aplikasi] [versi] exploit
contoh keyword: nasgorApp V2.2.9 exploit
```
- di searchsploit 
```bash
searchsploit nasgorApp V2.2.9
```

- di msfconsole
```bash
msfconsole
search nasgorApp V2.2.9
```


# Privilege Escalation

## Check file config
- contoh config php, and use their creds
```bash
cat /var/www/html/nasgor/config.php
mysql -u root -p
su user (pakai creds dari config.php kali aja bisa)
```

## Check Service yg jalan
- ss 
```bash
ss -tulnp
```
- ps 
```bash
ps aux
```

## Check sudo 
```bash
sudo -l
```

## Check crontab
```bash
cat /etc/crontab
```

# Under Construction - masih belum selesai ( soon )