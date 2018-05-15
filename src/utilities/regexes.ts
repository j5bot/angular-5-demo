export const PHONE_VALIDATION =
  /^\+?(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)?\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,3})\s*?((#|x|ext)[a-z]*)?\.?\s*?(\d+)?$/i;
export const PHONE_VALIDATION_ALLOW_EMPTY =
  /^$|^\+?(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)?\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,3})\s*?((#|x|ext)[a-z]*)?\.?\s*?(\d+)?$/i;


export const Validators: any = {
  PHONE_VALIDATION,
  PHONE_VALIDATION_ALLOW_EMPTY
};

export default {
  PHONE_VALIDATION,
  PHONE_VALIDATION_ALLOW_EMPTY
};
