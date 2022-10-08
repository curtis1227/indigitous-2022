const church_statement_of_faith_urls_filename = 'church_statement_of_faith_urls.txt';

export default async function churchSearch(keyword: string): Promise<string[]> {
  // Read in the list of church statement of faith urls.
  const fs = require('fs'),
    path = require('path'),
    filePath = path.resolve('./public', church_statement_of_faith_urls_filename);

  const statement_of_faith_urls =
    fs.readFileSync(filePath, 'utf8').trim().split(',');

  // const puppeteer = require('puppeteer');
  // const browser = await puppeteer.launch({ headless: true });
  // const page = (await browser.pages())[0];
  // await page.goto(statement_of_faith_urls[0]);
  // const extractedText = await page.$eval('*', (el) => el.innerText);

  // console.log(extractedText);

  // await browser.close();

  return [];
}
