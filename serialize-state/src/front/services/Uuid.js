export const ALPHA_NUM_SPECIAL = 'ABCDEFGHIJKLMSOPQRSTUVWXYZabcdefghijklmsopqrstuvwxyz0123456789!@#$%^&*-_=+';
export const ALPHA_NUM_SPECIAL_LEN = ALPHA_NUM_SPECIAL.length;
export const ALPHA_NUM = 'ABCDEFGHIJKLMSOPQRSTUVWXYZabcdefghijklmsopqrstuvwxyz0123456789';
export const ALPHA_NUM_LEN = ALPHA_NUM.length;

class Uuid {
  static getUuid(chars = ALPHA_NUM, len = ALPHA_NUM_LEN) {
    return function createUuid(uidlen = 32) {
      const buf = [];

      for (let i = 0; i < uidlen; i += 1) buf.push(chars[Uuid.randInt(0, len - 1)]);

      return buf.join('');
    };
  }
  
  static randInt(min, max) {
    return Math.floor((Math.random() * ((max - min) + 1)) + min);
  }
}

export default Uuid;
