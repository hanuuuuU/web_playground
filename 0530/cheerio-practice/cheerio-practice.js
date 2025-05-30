import * as fs from 'fs';
import * as cheerio from 'cheerio';

const html=fs.readFileSync('./blog.html');

const $ = cheerio.load(html);

// const headerTitle=$('#title');
// console.log(headerTitle.text());

// console.log("-".repeat(10));
// const myData101Tag=$('[data-id=101]');
// console.log(myData101Tag.text());

const postTags=$('.post');
postTags.text()
console.log(postTags.length);
const postTag1=postTags.eq(0);
console.log(postTag1.attr());

const postTags2=postTags.eq(1);
console.log(postTags2.attr());

for(let i=0; i<postTags.length; i++){
    const targetNode=postTags.eq(i);
}