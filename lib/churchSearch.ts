const church_statement_of_faith_urls_filename = 'church_statement_of_faith_urls.txt';

export default function churchSearch(keyword: string) {
  // Read in the list of church statement of faith urls.
  const fs = require('fs'),
    path = require('path'),
    filePath = path.resolve('./public', church_statement_of_faith_urls_filename);

  const list_of_churches =
    fs.readFileSync(filePath, 'utf8').trim().split(',');

  return list_of_churches;
}
