const { extract, extractPdf } = require("./index.js");
const { readFileSync } = require("node:fs");

const xlsx_1 = {
  path: "/Users/meocoder/Downloads/samples_document/xlsx_1.xlsx",
  fileName: "xlsx_1.xlsx",
};
const xlsx_2 = {
  path: "/Users/meocoder/Downloads/samples_document/sample.xlsx",
  fileName: "xlsx_1.xlsx",
};
const doc_1 = {
  path: "/Users/meocoder/Downloads/samples_document/sample.docx",
  fileName: "doc.docx",
};
const doc_2 = {
  path: "/Users/meocoder/Downloads/samples_document/filosofi-logo.docx",
  fileName: "doc.docx",
};
const doc_3 = {
  path: "/Users/meocoder/Downloads/samples_document/file-sample_1MB.docx",
  fileName: "doc.docx",
};
const doc_4 = {
  path: "/Users/meocoder/Downloads/samples_document/file-sample_1MB.doc",
  fileName: "doc.doc",
};
const pptx_1 = {
  path: "/Users/meocoder/Downloads/samples_document/sample.pptx",
  fileName: "sample.pptx",
};
const pdf_1 = {
  path: "/Users/meocoder/Downloads/samples_document/pdf_1.pdf",
  fileName: "pdf_1.pdf",
};
const pdf_2 = {
  path: "/Users/meocoder/Downloads/samples_document/pspdfkit-web-demo.pdf",
  fileName: "pspdfkit-web-demo.pdf",
};

const file = doc_4;

const buffer = readFileSync(file.path);
console.time("count text");
const wordCount = extract(buffer, file.fileName);
console.timeEnd("count text");
console.log(`Have ${wordCount}`);

// const buffer = readFileSync(file.path);
// console.time("count text");
// const wordCount = extractPdf(buffer);
// console.timeEnd("count text");
// console.log(`Have ${wordCount}`);