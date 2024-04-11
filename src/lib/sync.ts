import fs from "fs";

// function syncPostsDirectory() {
//     if (!fs.existsSync(publicPostsDirectory)) {
//       fs.mkdirSync(publicPostsDirectory, { recursive: true });
//     }

//     const postsFiles = fs
//       .readdirSync(postsDirectory)
//       .filter((item) => item.indexOf(".md") == -1);

//     const publicPostsFiles = fs.readdirSync(publicPostsDirectory);

//     // `_posts` 디렉토리의 파일을 `public/posts`로 복사
//     postsFiles.forEach((file) => {
//       const srcPath = join(postsDirectory, file);
//       const destPath = join(publicPostsDirectory, file);
//       const srcStats = fs.statSync(srcPath);
//       let shouldCopy = true;

//       if (fs.existsSync(destPath)) {
//         const destStats = fs.statSync(destPath);
//         shouldCopy =
//           srcStats.size !== destStats.size || srcStats.mtime > destStats.mtime;
//       }

//       if (shouldCopy) {
//         fs.copyFileSync(srcPath, destPath);
//         console.log(`Copied: ${file}`);
//       }
//     });

//     // `public/posts`에 있는데 `_posts`에 없는 파일 삭제
//     publicPostsFiles.forEach((file) => {
//       if (!postsFiles.includes(file)) {
//         fs.unlinkSync(join(publicPostsDirectory, file));
//         console.log(`Deleted: ${file}`);
//       }
//     });
//   }
