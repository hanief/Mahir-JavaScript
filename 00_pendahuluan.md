{{meta {load_files: ["code/intro.js"]}}}

# Pendahuluan

{{quote {author: "Ellen Ullman", title: "Close to the Machine: Technophilia and Its Discontents", chapter: true}

Kita berpikir bahwa kita membuat sistem tersebut untuk tujuan kita sendiri. Kita berpikir kita sedang membuatnya dari cerminan diri kita sendiri... Tetapi komputer sebenarnya tidak seperti kita sama sekali. Komputer adalah proyeksi dari bagian kecil saja dari diri kita: yaitu bagian yang berdedikasi terhadap logika, urutan, aturan, dan kejelasan.

quote}}

{{figure {url: "img/chapter_picture_00.jpg", alt: "Illustration of a screwdriver next to a circuit board of about the same size", chapter: "framed"}}}

Buku ini adalah mengenai cara memerintah ((komputer)). Saat ini, komputer ada dimana-mana seperti halnya sebuah obeng, tapi mereka memang lebih rumit, dan untuk membuatnya melakukan sesuatu seperti yang kita mau tidaklah selalu mudah.

Jika pekerjaan yang anda berikan kepada komputer adalah pekerjaan yang umum, sangat dipahami orang, seperti halnya menunjukkan surel anda atau beraksi layaknya sebuah kalkulator, anda bisa saja membuka ((aplikasi)) yang cocok untuk pekerjaan itu dan anda bisa langsung bekerja. Tetapi untuk pekerjaan-pekerjaan yang unik atau terbuka akhirnya, seringkali tidak ada aplikasi yang cocok.

Di sini lah ((pemrograman)) mungkin bisa hadir. _Pemrograman_ adalah sebuah pekerjaan untuk membangun sebuah _program)_—sebuah kumpulan instruksi-instruksi presisi yang memberitahu komputer apa yang harus ia lakukan. Karena komputer itu monster yang bodoh dan pedantik, pemrograman pada dasarnya sebuah aktivitas yang melelahkan dan membuat frustasi.

Untungnya, jika anda bisa mengabaikan fakta tersebut dan bahkan anda bisa menikmati berpikir keras seperti halnya sebuah mesin yang bodoh, maka pemrograman bisa menjadi menyenangkan. Ia memungkinkan anda melakukan sesuatu yang biasanya mengabiskan waktu berjam-jam menjadi selesai hanya dalam hitungan detik. Ia juga cara untuk membuat komputer bisa melakukan hal-hal yang sebelumnya tak bisa mereka lakukan. Selain itu, ia juga bisa menjadi sebuah permainan yang penuh dengan teka-teki dan abstraksi.****

Kebanyakan pemrograman dilakukan dengan ((bahasa pemrograman)). Sebuah _bahasa pemrograman_ adalah sebuah bahasa yang sengaja dibuat untuk memerintahkan komputer melakukan sesuatu. Hal paling menarik dari hal ini adalah kita menemukan bahwa cara untuk berkomunikasi dengan komputer adalah terinspirasi dari cara kita berkomunikasi dengan sesama manusia. Seperti halnya bahasa untuk manusia, bahasa pemrograman memiliki kata-kata dan frasa-frasa yang digabungkan dalam kesatuan yang baru, sehingga membuatnya bisa menjelaskan konsep-konsep yang baru.

Di masa lalu, antar-muka berbasis bahasa seperti BASIC dan DOS di tahun 1980-an dan 1990-an, adalah metode utama untuk berinteraksi dengan komputer. Untuk penggunaan rutin, antar-muka ini telah digantikan oleh antar-muka visual yang lebih mudah dipelajari tapi kurang memberikan kebebasan. Jika anda tahu caranya, bahasa-bahasa tersebut masih tersedia. Salah satu diantaranya, _JavaScript_, disertakan bersama setiap peramban mutakhir dan tersedia di hampir semua perangkat.

Buku ini akan mencoba untuk mengakrabkan anda dengan bahasa ini sehingga anda bisa melakukan hal-hal yang berguna dan menyenangkan dengannya.

## On programming

{{index [programming, "difficulty of"]}}

Besides explaining JavaScript, I will introduce the basic principles of programming. Programming, it turns out, is hard. The fundamental rules are simple and clear, but programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You're building your own maze, in a way, and you can easily get lost in it.

{{index learning}}

There will be times when reading this book feels terribly frustrating. If you are new to programming, there will be a lot of new material to digest. Much of this material will then be _combined_ in ways that require you to make additional connections.

It is up to you to make the necessary effort. When you are struggling to follow the book, do not jump to any conclusions about your own capabilities. You are fine—you just need to keep at it. Take a break, reread some material, and make sure you read and understand the example programs and ((exercises)). Learning is hard work, but everything you learn is yours and will make further learning easier.

{{quote {author: "Ursula K. Le Guin", title: "The Left Hand of Darkness"}

{{index "Le Guin, Ursula K."}}

When action grows unprofitable, gather information; when information grows unprofitable, sleep.

quote}}

{{index [program, "nature of"], data}}

A program is many things. It is a piece of text typed by a programmer, it is the directing force that makes the computer do what it does, it is data in the computer's memory, and, at the same time, it controls the actions performed on this memory. Analogies that try to compare programs to familiar objects tend to fall short. A superficially fitting one is to compare a program to a machine—lots of separate parts tend to be involved, and to make the whole thing tick, we have to consider the ways in which these parts interconnect and contribute to the operation of the whole.

A ((computer)) is a physical machine that acts as a host for these immaterial machines. Computers themselves can do only stupidly straightforward things. The reason they are so useful is that they do these things at an incredibly high ((speed)). A program can ingeniously combine an enormous number of these simple actions to do very complicated things.

{{index [programming, "joy of"]}}

A program is a building of thought. It is costless to build, it is weightless, and it grows easily under our typing hands. But as a program grows, so does its ((complexity)). The skill of programming is the skill of building programs that don't confuse the programmer. The best programs are those that manage to do something interesting while still being easy to understand.

{{index "programming style", "best practices"}}

Some programmers believe that this complexity is best managed by using only a small set of well-understood techniques in their programs. They have composed strict rules ("best practices") prescribing the form programs should have and carefully stay within their safe little zone.

{{index experiment}}

This is not only boring—it is ineffective. New problems often require new solutions. The field of programming is young and still developing rapidly, and it is varied enough to have room for wildly different approaches. There are many terrible mistakes to make in program design, and you should go ahead and make them at least once so that you understand them. A sense of what a good program looks like is developed with practice, not learned from a list of rules.

## Why language matters

{{index "programming language", "machine code", "binary data"}}

In the beginning, at the birth of computing, there were no programming languages. Programs looked something like this:

```{lang: null}
00110001 00000000 00000000
00110001 00000001 00000001
00110011 00000001 00000010
01010001 00001011 00000010
00100010 00000010 00001000
01000011 00000001 00000000
01000001 00000001 00000001
00010000 00000010 00000000
01100010 00000000 00000000
```

{{index [programming, "history of"], "punch card", complexity}}

This is a program to add the numbers from 1 to 10 together and print the result: `1 + 2 + ... + 10 = 55`. It could run on a simple hypothetical machine. To program early computers, it was necessary to set large arrays of switches in the right position or punch holes in strips of cardboard and feed them to the computer. You can imagine how tedious and error prone this procedure was. Even writing simple programs required much cleverness and discipline. Complex ones were nearly inconceivable.

{{index bit, "wizard (mighty)"}}

Of course, manually entering these arcane patterns of bits (the ones and zeros) did give the programmer a profound sense of being a mighty wizard. And that has to be worth something in terms of job satisfaction.

{{index memory, instruction}}

Each line of the previous program contains a single instruction. It could be written in English like this:

 1. Store the number 0 in memory location 0.
 2. Store the number 1 in memory location 1.
 3. Store the value of memory location 1 in memory location 2.
 4. Subtract the number 11 from the value in memory location 2.
 5. If the value in memory location 2 is the number 0, continue with instruction 9.
 6. Add the value of memory location 1 to memory location 0.
 7. Add the number 1 to the value of memory location 1.
 8. Continue with instruction 3.
 9. Output the value of memory location 0.

{{index readability, naming, binding}}

Although that is already more readable than the soup of bits, it is still rather obscure. Using names instead of numbers for the instructions and memory locations helps.

```{lang: "null"}
  Set “total” to 0.
  Set “count” to 1.
[loop]
  Set “compare” to “count”.
  Subtract 11 from “compare”.
  If “compare” is 0, continue at [end].
  Add “count” to “total”.
  Add 1 to “count”.
  Continue at [loop].
[end]
  Output “total”.
```

{{index loop, jump, "summing example"}}

Can you see how the program works at this point? The first two lines give two memory locations their starting values: `total` will be used to build up the result of the computation, and `count` will keep track of the number that we are currently looking at. The lines using `compare` are probably the most confusing ones. The program wants to see whether `count` is equal to 11 to decide whether it can stop running. Because our hypothetical machine is rather primitive, it can test only whether a number is zero and make a decision based on that. It therefore uses the memory location labeled `compare` to compute the value of `count - 11` and makes a decision based on that value. The next two lines add the value of `count` to the result and increment `count` by 1 every time the program decides that `count` is not 11 yet.

Here is the same program in JavaScript:

```
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
// → 55
```

{{index "while loop", loop, [braces, block]}}

This version gives us a few more improvements. Most importantly, there is no need to specify the way we want the program to jump back and forth anymore—the `while` construct takes care of that. It continues executing the block (wrapped in braces) below it as long as the condition it was given holds. That condition is `count <= 10`, which means “the count is less than or equal to 10”. We no longer have to create a temporary value and compare that to zero, which was just an uninteresting detail. Part of the power of programming languages is that they can take care of uninteresting details for us.

{{index "console.log"}}

At the end of the program, after the `while` construct has finished, the `console.log` operation is used to write out the result.

{{index "sum function", "range function", abstraction, function}}

Finally, here is what the program could look like if we happened to have the convenient operations `range` and `sum` available, which respectively create a ((collection)) of numbers within a range and compute the sum of a collection of numbers:

```{startCode: true}
console.log(sum(range(1, 10)));
// → 55
```

{{index readability}}

The moral of this story is that the same program can be expressed in both long and short, unreadable and readable ways. The first version of the program was extremely obscure, whereas this last one is almost English: `log` the `sum` of the `range` of numbers from 1 to 10. (We will see in [later chapters](data) how to define operations like `sum` and `range`.)

{{index ["programming language", "power of"], composability}}

A good programming language helps the programmer by allowing them to talk about the actions that the computer has to perform on a higher level. It helps omit details, provides convenient building blocks (such as `while` and `console.log`), allows you to define your own building blocks (such as `sum` and `range`), and makes those blocks easy to compose.

## What is JavaScript?

{{index history, Netscape, browser, "web application", JavaScript, [JavaScript, "history of"], "World Wide Web"}}

{{indexsee WWW, "World Wide Web"}}

{{indexsee Web, "World Wide Web"}}

JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—that is, applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.

{{index Java, naming}}

It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.

{{index ECMAScript, compatibility}}

After its adoption outside of Netscape, a ((standard)) document was written to describe the way the JavaScript language should work so that the various pieces of software that claimed to support JavaScript could make sure they actually provided the same language. This is called the ECMAScript standard, after the Ecma International organization that conducted the standardization. In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.

{{index [JavaScript, "weaknesses of"], debugging}}

There are those who will say _terrible_ things about JavaScript. Many of these things are true. When I was required to write something in JavaScript for the first time, I quickly came to despise it. It would accept almost anything I typed but interpret it in a way that was completely different from what I meant. This had a lot to do with the fact that I did not have a clue what I was doing, of course, but there is a real issue here: JavaScript is ridiculously liberal in what it allows. The idea behind this design was that it would make programming in JavaScript easier for beginners. In actuality, it mostly makes finding problems in your programs harder because the system will not point them out to you.

{{index [JavaScript, "flexibility of"], flexibility}}

This flexibility also has its advantages, though. It leaves room for techniques that are impossible in more rigid languages and makes for a pleasant, informal style of programming. After ((learning)) the language properly and working with it for a while, I have come to actually _like_ JavaScript.

{{index future, [JavaScript, "versions of"], ECMAScript, "ECMAScript 6"}}

There have been several versions of JavaScript. ECMAScript version 3 was the widely supported version during JavaScript's ascent to dominance, roughly between 2000 and 2010. During this time, work was underway on an ambitious version 4, which planned a number of radical improvements and extensions to the language. Changing a living, widely used language in such a radical way turned out to be politically difficult, and work on version 4 was abandoned in 2008. A much less ambitious version 5, which made only some uncontroversial improvements, came out in 2009. In 2015, version 6 came out, a major update that included some of the ideas planned for version 4. Since then we've had new, small updates every year.

The fact that JavaScript is evolving means that browsers have to constantly keep up. If you're using an older browser, it may not support every feature. The language designers are careful to not make any changes that could break existing programs, so new browsers can still run old programs. In this book, I'm using the 2024 version of JavaScript.

{{index [JavaScript, "uses of"]}}

Web browsers are not the only platforms on which JavaScript is used. Some databases, such as MongoDB and CouchDB, use JavaScript as their scripting and query language. Several platforms for desktop and server programming, most notably the ((Node.js)) project (the subject of [Chapter ?](node)), provide an environment for programming JavaScript outside of the browser.

## Code, and what to do with it

{{index "reading code", "writing code"}}

_Code_ is the text that makes up programs. Most chapters in this book contain quite a lot of code. I believe reading code and writing ((code)) are indispensable parts of ((learning)) to program. Try to not just glance over the examples—read them attentively and understand them. This may be slow and confusing at first, but I promise that you'll quickly get the hang of it. The same goes for the ((exercises)). Don't assume you understand them until you've actually written a working solution.

{{index interpretation}}

I recommend you try your solutions to exercises in an actual JavaScript interpreter. That way, you'll get immediate feedback on whether what you are doing is working, and, I hope, you'll be tempted to ((experiment)) and go beyond the exercises.

{{if interactive

When reading this book in your browser, you can edit (and run) all example programs by clicking them.

if}}

{{if book

{{index download, sandbox, "running code"}}

The easiest way to run the example code in the book—and to experiment with it—is to look it up in the online version of the book at [_https://eloquentjavascript.net_](https://eloquentjavascript.net/). There, you can click any code example to edit and run it and to see the output it produces. To work on the exercises, go to [_https://eloquentjavascript.net/code_](https://eloquentjavascript.net/code), which provides starting code for each coding exercise and allows you to look at the solutions.

if}}

{{index "developer tools", "JavaScript console"}}

Running the programs defined in this book outside of the book's website requires some care. Many examples stand on their own and should work in any JavaScript environment. But code in later chapters is often written for a specific environment (the browser or Node.js) and can run only there. In addition, many chapters define bigger programs, and the pieces of code that appear in them depend on each other or on external files. The [sandbox](https://eloquentjavascript.net/code) on the website provides links to ZIP files containing all the scripts and data files necessary to run the code for a given chapter.

## Overview of this book

This book contains roughly three parts. The first 12 chapters discuss the JavaScript language. The next seven chapters are about web ((browsers)) and the way JavaScript is used to program them. Finally, two chapters are devoted to ((Node.js)), another environment to program JavaScript in. There are five _project chapters_ in the book that describe larger example programs to give you a taste of actual programming.

The language part of the book starts with four chapters that introduce the basic structure of the JavaScript language. They discuss [control structures](program_structure) (such as the `while` word you saw in this introduction), [functions](functions) (writing your own building blocks), and [data structures](data). After these, you will be able to write basic programs. Next, Chapters [?](higher_order) and [?](object) introduce techniques to use functions and objects to write more _abstract_ code and keep complexity under control.

After a [first project chapter](robot) that builds a crude delivery robot, the language part of the book continues with chapters on [error handling and bug fixing](error), [regular expressions](regexp) (an important tool for working with text), [modularity](modules) (another defense against complexity), and [asynchronous programming](async) (dealing with events that take time). The [second project chapter](language), where we implement a programming language, concludes the first part of the book.

The second part of the book, Chapters [?](browser) to [?](paint), describes the tools that browser JavaScript has access to. You'll learn to display things on the screen (Chapters [?](dom) and [?](canvas)), respond to user input ([Chapter ?](event)), and communicate over the network ([Chapter ?](http)). There are again two project chapters in this part: building a [platform game](game) and a [pixel paint program](paint).

[Chapter ?](node) describes Node.js, and [Chapter ?](skillsharing) builds a small website using that tool.

{{if commercial

Finally, [Chapter ?](fast) describes some of the considerations that come up when optimizing JavaScript programs for speed.

if}}

## Typographic conventions

{{index "factorial function"}}

In this book, text written in a `monospaced` font will represent elements of programs. Sometimes these are self-sufficient fragments, and sometimes they just refer to part of a nearby program. Programs (of which you have already seen a few) are written as follows:

```
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
```

{{index "console.log"}}

Sometimes, to show the output that a program produces, the expected output is written after it, with two slashes and an arrow in front.

```
console.log(factorial(8));
// → 40320
```

Good luck!
