#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use dotext::extract as dotext_extract;
use napi::bindgen_prelude::Buffer;
use pdf_extract::extract_text_from_mem as pdf_extract_from_mem;
use std::io::Cursor;

#[napi]
pub fn extract(reader: Buffer, filename: String) -> i32 {
  let reader = Cursor::new(reader);
  let text = dotext_extract(reader, &filename).unwrap_or("".to_string());
  let word_count = text.trim().split_whitespace().fold(0, |acc, _| acc + 1);
  word_count
}
#[napi]
pub fn extract_pdf(reader: Buffer) -> i32 {
  let text = pdf_extract_from_mem(&reader).unwrap_or("".to_string());
  let word_count = text.trim().split_whitespace().fold(0, |acc, _| acc + 1);
  word_count
}
