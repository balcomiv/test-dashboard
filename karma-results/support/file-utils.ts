import * as fs from 'fs';

export function readFromFile(fileName: string): any {
  const data = fs.readFileSync(fileName);
  const result = JSON.parse(data.toString());
  //  let summary = null;

  Object.entries(result).forEach(([key, value]) => {
    //    if (key === "summary") {
    //       summary = value;
    //    }
  });
  return result;
}

export function writeToFile(file: string, fileContent: string | null): void {
  fileContent = fileContent ?? 'NO STRAY FILES FOUND';

  try {
    fs.writeFileSync(file, fileContent, 'utf8');
  } catch (error) {
    console.log(error);
  }
}
