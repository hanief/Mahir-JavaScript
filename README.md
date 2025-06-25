# Mahir JavaScript

Ini adalah sumber yang digunakan untuk membangun edisi keempat dari Mahir Javascript (https://mahirjavascript.net).

Ini adalah terjemahan dari buku Eloquent Javascript (https://eloquentjavascript.net).

Kami menyambut baik masukan, silakan membuat *issues* dan *pull request*.

## Menyusun buku

Untuk menyusun buku menjadi keluaran HTML di `html/`, kita bisa menggunakan make:

    npm install
    make html

Untuk membuat berkas PDF (ini tidak disarankan kecuali anda benar-benar membutuhkannya, sebab daftar ini mungkin akan kadaluwarsa lagi dan untuk menyusun ulangnya agak menyulitkan):

    apt-get install texlive texlive-xetex fonts-inconsolata fonts-symbola texlive-lang-chinese inkscape
    make book.pdf

## Menerjemahkan

Kami menyambut baik bantuan penerjemahan. Lisensi buku ini mengizinkan turunan non-komersial, termasuk terjemahan. Jika anda telah selesai menerjemahkan, silakan kabari saya, dan saya akan menambahkan tautan ke situs.

Saya ingin memperingatkan anda: teks ini mengandung sekitar 130 000 kata, dan bukunya mengandung sekitar 400 halaman. Itu adalah jumlah tulisan yang cukup banyak, yang akan membutuhkan waktu yang cukup banyak untuk penerjemahannya.

Jika peringatan itu tidak menakutkan bagi anda, cara terbaik untuk menerjemahkan tulisan ini adalah:

 - *Fork* (Cabangkan) repositori ini di Github.

 - Buat sebuah *Issue* di respositori ini yang menjelaskan rencana penerjemahan yang akan anda lakukan.

 - Terjemahkan berkas `.md` di percabangan anda. Berkas tersebut diformat menggunakan [CommonMark](https://commonmark.org), dengan beberapa tambahan ekstensi. Anda mungkin perlu mengecualikan istilah-istilah indeks (yang ditandai dengan kurung ganda dan sintaks `{{index ...}}`) dari terjemahan anda, karena hal itu lebih banyak berkaitan dengan keluaran cetak.

 - Publikasikan terjemahan anda secara daring atau silakan minta saya untuk memuatnya.

Jika anda melakukan ini secara terbuka, dan membuat *issue* yang tertaut dengan pekerjaan anda, maka anda akan menghindari usaha yang sia-sia dimana beberapa orang yang berbeda memulai terjemahan untuk bahasa yang sama (dan mungkin tidak akan pernah menyelesaikannya). (Karena terjemahan memiliki lisensi yang sama, anda bebas untuk mengambil terjemahan orang lain dan melanjutkannya, bahkan jika terjemahan tersebut telah menghilang dari internet.)

Saya tidak tertarik dengan terjemahan menggunakan mesin / komputer. Mohon hanya meminta saya untuk menautkan terjemahan anda jika itu dilakukan oleh manusia.
