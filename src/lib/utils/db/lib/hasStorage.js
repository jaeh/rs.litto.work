const TEST_KEY = '__test__ing__'

/**
 * Test if localStorage or sessionStorage are supported.
 *
 * @export
 * @param {Storage} storage
 * @returns {boolean}
 */
export const hasStorage = storage => {
  try {
    storage.setItem(TEST_KEY, '1')
    const value = storage.getItem(TEST_KEY)
    storage.removeItem(TEST_KEY)

    return value === '1'
  } catch (e) {
    return false
  }
}
