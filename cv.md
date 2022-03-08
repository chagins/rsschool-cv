# Yaroslav Chagin
## FRONTEND DEVELOPER

[:point_right: contacts](#contacts) | [:point_right: about me](#about-me) | [:point_right: hard-skills](#hard-skills) | [:point_right: soft-skills](#soft-skills) | [:point_right: education](#education-and-courses) | [:point_right: code example](#code-example) | [:point_right: language](#language)

---
### Contacts

- **Phone:** [+7 982 472 70 83](tel:+79824727083)

- **E-mail:** [chagin_yav@hotmail.com](mailto:chagin_yav@hotmail.com)

- **Discord:** [Yaroslav Chagin#1853](https://discordapp.com/users/878959404060405801)

- **Telegram:** [@chagins](https://t.me/chagins)

---
### About me

Hello! I'm 34 years old. I am very interested in information technology.

After graduating from the Perm National Research Polytechnic University, I worked in various positions: IT support specialist, system administrator, sql developer. 

In the last three months, I discovered web development for myself. I was charmed by the possibility to transition from design to website or application and create something from scratch.

My goal is to become a professional front-end developer.

---
### Hard Skills

- HTML
- CSS
- JavaScript
- GIT
- SQL
- JIRA

---
### Soft Skills

- Positive attitude
- Curiosity
- Willingness to learn
- Teamwork
- Good communication

---
### Education and courses

- **Perm National Research Polytechnic University**
  - Bachelor Program in Informatics and Computer Engineering
- **Harvard**
  - [CS50](https://javarush.ru/quests/QUEST_HARVARD_CS50)
- **Code Basics**
  - [JavaScript for beginners](https://code-basics.com/languages/javascript)
  - [HTML for beginners](https://code-basics.com/languages/html)
  - [CSS for beginners](https://code-basics.com/languages/css)
- **RS School**
  - [JavaScript/Front-end. Stage 0 (2022)](https://rs.school/js-stage0/)
- **Udemy**
  - [WEB developer 2021](https://www.udemy.com/course/webdeveloper/) (in progress)
  - [Oracle Database 12c SQL Certified Associate 1Z0-071](https://www.udemy.com/course/oracle-database-12c-sql-certified-associate-1z0-071/)

---
### Code Example

```JavaScript
// Roman to Integer
// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {

  const ROMAN_DICT = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let date = 0;
  for (let c = 0; c < s.length; c++) {
    date +=
      c < s.length - 1 && ROMAN_DICT.get(s[c]) < ROMAN_DICT.get(s[c + 1])
        ? -ROMAN_DICT.get(s[c])
        : ROMAN_DICT.get(s[c]);
  }

  return date;

};
```
---
### Language:

- Russian (native speaker)
- English A1

[:point_up::point_up::point_up:](#yaroslav-chagin)