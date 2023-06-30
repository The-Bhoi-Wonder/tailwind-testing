import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const process = require('process');
 
// Printing current directory


//const postsDirectory = 'C:\Users\Joebh\MyWebsite\tailwind-testing\app\posts';
const postsDirectory = path.join(process.cwd(), 'app/\public/\posts');
console.log("Post directory2: ",
          postsDirectory);

export function getSortedPostsData() {
  console.log("called getsorted");
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    console.console.log(id);
    // Combine the data with the id
    return {
      
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}