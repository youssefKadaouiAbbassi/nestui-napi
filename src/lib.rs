#![deny(clippy::all)]

use napi_derive::napi;

/// Adds 100 to the given input.
///
/// # Arguments
///
/// * `input` - A 32-bit unsigned integer to which 100 will be added.
///
/// # Returns
///
/// A 32-bit unsigned integer that is the result of adding 100 to `input`.
#[inline]
#[napi]
pub fn plus_100(input: u32) -> u32 {
  input + 100
}
