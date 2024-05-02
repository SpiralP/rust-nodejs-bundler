searchState.loadedDescShard("num_traits", 0, "Numeric traits for generic mathematics\nThe base trait for numeric types, covering <code>0</code> and <code>1</code> values, …\nThe trait for <code>Num</code> types which also implement assignment …\nGeneric trait for types implementing numeric assignment …\nThe trait for <code>NumAssign</code> types which also implement …\nGeneric trait for types implementing basic numeric …\nThe trait for <code>Num</code> types which also implement numeric …\nThe trait for <code>Num</code> references which implement numeric …\nA value bounded by a minimum and a maximum\nA value bounded by a maximum value\nA value bounded by a minimum value\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a string and radix (typically <code>2..=36</code>).\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNumbers which have upper and lower bounds\nNumbers which have lower bounds\nNumbers which have upper bounds\nReturns the largest finite number this type can represent\nReturns the largest finite number this type can represent\nReturns the smallest finite number this type can represent\nReturns the smallest finite number this type can represent\nA generic interface for casting between machine scalars …\nA generic trait for converting a number to a value.\nAn interface for casting between machine scalars.\nA generic trait for converting a value to a number.\nConvert a value to another, using the <code>as</code> operator.\nCast from one machine scalar to another.\nCreates a number from another value that can be converted …\nConverts a <code>f32</code> to return an optional value of this type. …\nConverts a <code>f64</code> to return an optional value of this type. …\nConverts an <code>i128</code> to return an optional value of this type. …\nConverts an <code>i16</code> to return an optional value of this type. …\nConverts an <code>i32</code> to return an optional value of this type. …\nConverts an <code>i64</code> to return an optional value of this type. …\nConverts an <code>i8</code> to return an optional value of this type. …\nConverts an <code>isize</code> to return an optional value of this …\nConverts an <code>u128</code> to return an optional value of this type. …\nConverts an <code>u16</code> to return an optional value of this type. …\nConverts an <code>u32</code> to return an optional value of this type. …\nConverts an <code>u64</code> to return an optional value of this type. …\nConverts an <code>u8</code> to return an optional value of this type. …\nConverts a <code>usize</code> to return an optional value of this type. …\nConverts the value of <code>self</code> to an <code>f32</code>. Overflows may map to …\nConverts the value of <code>self</code> to an <code>f64</code>. Overflows may map to …\nConverts the value of <code>self</code> to an <code>i128</code>. If the value cannot …\nConverts the value of <code>self</code> to an <code>i16</code>. If the value cannot …\nConverts the value of <code>self</code> to an <code>i32</code>. If the value cannot …\nConverts the value of <code>self</code> to an <code>i64</code>. If the value cannot …\nConverts the value of <code>self</code> to an <code>i8</code>. If the value cannot be\nConverts the value of <code>self</code> to an <code>isize</code>. If the value …\nConverts the value of <code>self</code> to a <code>u128</code>. If the value cannot …\nConverts the value of <code>self</code> to a <code>u16</code>. If the value cannot be\nConverts the value of <code>self</code> to a <code>u32</code>. If the value cannot be\nConverts the value of <code>self</code> to a <code>u64</code>. If the value cannot be\nConverts the value of <code>self</code> to a <code>u8</code>. If the value cannot be …\nConverts the value of <code>self</code> to a <code>usize</code>. If the value cannot …\nReturn Euler’s number.\nReturn <code>1.0 / π</code>.\nReturn <code>1.0 / sqrt(2.0)</code>.\nReturn <code>2.0 / π</code>.\nReturn <code>2.0 / sqrt(π)</code>.\nReturn <code>π / 2.0</code>.\nReturn <code>π / 3.0</code>.\nReturn <code>π / 4.0</code>.\nReturn <code>π / 6.0</code>.\nReturn <code>π / 8.0</code>.\nGeneric trait for floating point numbers that works with …\nReturn <code>ln(10.0)</code>.\nReturn <code>ln(2.0)</code>.\nReturn <code>log10(2.0)</code>.\nReturn <code>log10(e)</code>.\nReturn <code>log2(10.0)</code>.\nReturn <code>log2(e)</code>.\nReturn Archimedes’ constant <code>π</code>.\nReturn <code>sqrt(2.0)</code>.\nReturn the full circle constant <code>τ</code>.\nTrait for floating point numbers that provide an …\nComputes the absolute value of <code>self</code>. Returns …\nReturns the smallest integer greater than or equal to a …\nReturns the floating point category of the number. If only …\nReturns epsilon, a small positive value.\nReturns the largest integer less than or equal to a number.\nReturns the fractional part of a number.\nReturns positive infinity.\nReturns the mantissa, base 2 exponent, and sign as …\nReturns <code>true</code> if the number is neither infinite or NaN.\nReturns <code>true</code> if the number is infinite.\nReturns <code>true</code> if the number is NaN.\nReturns <code>true</code> if the number is neither zero, infinite, …\nReturns <code>true</code> if <code>self</code> is negative, including <code>-0.0</code> and …\nReturns <code>true</code> if <code>self</code> is positive, including <code>+0.0</code> and …\nReturns <code>true</code> if the number is subnormal.\nReturns the maximum of the two numbers.\nReturns the largest finite value that this type can …\nReturns the minimum of the two numbers.\nReturns the smallest positive, normalized value that this …\nReturns the smallest finite value that this type can …\nReturns NaN.\nReturns negative infinity.\nReturns <code>-0.0</code>.\nRaise a number to an integer power.\nReturns the reciprocal (multiplicative inverse) of the …\nReturns the nearest integer to a number. Round half-way …\nReturns a number that represents the sign of <code>self</code>.\nConverts to degrees, assuming the number is in radians.\nConverts to radians, assuming the number is in degrees.\nReturn the ordering between <code>self</code> and <code>other</code>.\nReturn the integer part of a number.\nDefines an associated constant representing the …\nDefines an associated constant representing the additive …\nThe multiplicative identity element of <code>Self</code>, <code>1</code>.\nDefines a multiplicative identity element for <code>Self</code>.\nThe additive identity element of <code>Self</code>, <code>0</code>.\nDefines an additive identity element for <code>Self</code>.\nReturns <code>true</code> if <code>self</code> is equal to the multiplicative …\nReturns <code>true</code> if <code>self</code> is equal to the additive identity.\nReturns the multiplicative identity, <code>1</code>.\nReturns the multiplicative identity element of <code>Self</code>, <code>1</code>.\nSets <code>self</code> to the multiplicative identity element of <code>Self</code>, <code>1</code>…\nSets <code>self</code> to the additive identity element of <code>Self</code>, <code>0</code>.\nReturns the additive identity, <code>0</code>.\nReturns the additive identity element of <code>Self</code>, <code>0</code>.\nGeneric trait for primitive integers.\nReturns the number of ones in the binary representation of …\nReturns the number of zeros in the binary representation …\nConvert an integer from big endian to the target’s …\nConvert an integer from little endian to the target’s …\nReturns the number of leading ones in the binary …\nReturns the number of leading zeros in the binary …\nRaises self to the power of <code>exp</code>, using exponentiation by …\nReverses the order of bits in the integer.\nShifts the bits to the left by a specified amount, <code>n</code>, …\nShifts the bits to the right by a specified amount, <code>n</code>, …\nShifts the bits to the left by a specified amount, <code>n</code>, …\nShifts the bits to the right by a specified amount, <code>n</code>, …\nReverses the byte order of the integer.\nConvert <code>self</code> to big endian from the target’s endianness.\nConvert <code>self</code> to little endian from the target’s …\nReturns the number of trailing ones in the binary …\nReturns the number of trailing zeros in the binary …\nShifts the bits to the left by a specified amount, <code>n</code>, …\nShifts the bits to the right by a specified amount, <code>n</code>, …\nCreate a number from its representation as a byte array in …\nCreate a number from its representation as a byte array in …\nCreate a number from its memory representation as a byte …\nReturn the memory representation of this number as a byte …\nReturn the memory representation of this number as a byte …\nReturn the memory representation of this number as a byte …\nPerforms addition that returns <code>None</code> instead of wrapping …\nPerforms division that returns <code>None</code> instead of panicking …\nPerforms multiplication that returns <code>None</code> instead of …\nPerforms negation that returns <code>None</code> if the result can’t …\nPerforms an integral remainder that returns <code>None</code> instead …\nPerforms a left shift that returns <code>None</code> on shifts larger …\nPerforms a right shift that returns <code>None</code> on shifts larger …\nPerforms subtraction that returns <code>None</code> instead of wrapping …\nAdds two numbers, checking for overflow. If overflow …\nDivides two numbers, checking for underflow, overflow and …\nMultiplies two numbers, checking for underflow or …\nNegates a number, returning <code>None</code> for results that can’t …\nFinds the remainder of dividing two numbers, checking for …\nChecked shift left. Computes <code>self &lt;&lt; rhs</code>, returning <code>None</code> …\nChecked shift right. Computes <code>self &gt;&gt; rhs</code>, returning <code>None</code> …\nSubtracts two numbers, checking for underflow. If …\nPerforms euclid division that returns <code>None</code> instead of …\nReturns both the quotient and remainder from checked …\nFinds the euclid remainder of dividing two numbers, …\nCalculates Euclidean division, the matching method for …\nReturns both the quotient and remainder from Euclidean …\nCalculates the least nonnegative remainder of <code>self (mod v)</code>.\nUnary operator for retrieving the multiplicative inverse, …\nThe result after applying the operator.\nReturns the multiplicative inverse of <code>self</code>.\nFused multiply-add. Computes <code>(self * a) + b</code> with only one …\nThe fused multiply-add assignment operation …\nThe resulting type after applying the fused multiply-add.\nPerforms the fused multiply-add operation <code>(self * a) + b</code>\nPerforms the fused multiply-add assignment operation …\nPerforms addition with a flag for overflow.\nPerforms multiplication with a flag for overflow.\nPerforms substraction with a flag for overflow.\nReturns a tuple of the sum along with a boolean indicating …\nReturns a tuple of the product along with a boolean …\nReturns a tuple of the difference along with a boolean …\nSaturating math operations. Deprecated, use <code>SaturatingAdd</code>, …\nPerforms addition that saturates at the numeric bounds …\nPerforms multiplication that saturates at the numeric …\nPerforms subtraction that saturates at the numeric bounds …\nSaturating addition operator. Returns a+b, saturating at …\nSaturating addition. Computes <code>self + other</code>, saturating at …\nSaturating multiplication. Computes <code>self * other</code>, …\nSaturating subtraction operator. Returns a-b, saturating …\nSaturating subtraction. Computes <code>self - other</code>, saturating …\nPerforms addition that wraps around on overflow.\nPerforms multiplication that wraps around on overflow.\nPerforms a negation that does not panic.\nPerforms a left shift that does not panic.\nPerforms a right shift that does not panic.\nPerforms subtraction that wraps around on overflow.\nWrapping (modular) addition. Computes <code>self + other</code>, …\nWrapping (modular) multiplication. Computes <code>self * other</code>, …\nWrapping (modular) negation. Computes <code>-self</code>, wrapping …\nPanic-free bitwise shift-left; yields <code>self &lt;&lt; mask(rhs)</code>, …\nPanic-free bitwise shift-right; yields <code>self &gt;&gt; mask(rhs)</code>, …\nWrapping (modular) subtraction. Computes <code>self - other</code>, …\nThe result after applying the operator.\nBinary operator for raising a value to a power.\nRaises a value to the power of exp, returning <code>None</code> if an …\nRaises a value to the power of exp, using exponentiation …\nReturns <code>self</code> to the power <code>rhs</code>.\nUseful functions for signed numbers (i.e. numbers that can …\nA trait for values which cannot be negative\nComputes the absolute value.\nComputes the absolute value.\nThe positive difference of two numbers.\nThe positive difference of two numbers.\nReturns true if the number is negative and false if the …\nReturns true if the number is positive and false if the …\nReturns the sign of the number.\nReturns the sign of the number.")