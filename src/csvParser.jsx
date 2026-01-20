/*export function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",");
  return lines.slice(1).map(line => {
    const values = line.split(",");
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index];
    });
    return obj;
  });
}*/

export function parseCSV(csvText, delimiter = ";") {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(delimiter).map(h => h.trim());

  return lines.slice(1).map(line => {
    const values = line.split(delimiter);
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = values[i]?.trim();
    });
    return obj;
  });
}