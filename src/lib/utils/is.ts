export type Fns =
  | 'array'
  | 'bigint'
  | 'boolean'
  | 'date'
  | 'error'
  | 'float'
  | 'function'
  | 'integer'
  | 'lowerCase'
  | 'nil'
  | 'null'
  | 'number'
  | 'object'
  | 'objectNative'
  | 'promise'
  | 'regexp'
  | 'symbol'
  | 'undefined'
  | 'upperCase'
  | 'string'

export const is = (e: any, type: Fns): boolean =>
  typeof is[type] === 'function' ? is[type](e) : typeof e === type

is.string = is.str = (e: any): e is string => typeof e === 'string'
is.boolean = is.bool = (e: any): e is boolean => typeof e === 'boolean'
is.function = is.fn = (e: any): e is Function => typeof e === 'function'
is.undefined = is.undef = (e: any): e is undefined => typeof e === 'undefined'
is.bigint = (e: any): e is BigInt => typeof e === 'bigint'
is.object = is.obj = (e: any): e is object => typeof e === 'object'
is.symbol = is.sym = (e: any): e is Symbol => typeof e === 'symbol'

is.number = is.num = (e: any): e is number => e === +e
is.integer = is.int = is.i = (e: any): boolean => e === +e && e === (e | 0)
is.float = is.f = (e: any): boolean => e === +e

is.array = is.arr = (e: any): e is any[] => Array.isArray(e)
is.regexp = (e: any): e is RegExp => e instanceof RegExp
is.date = (e: any): e is Date => e instanceof Date
is.error = is.err = (e: any): e is Error => e instanceof Error
is.null = is.nil = (e: any): e is null => e === null
is.promise = is.prom = (e: any): e is Promise<any> => e instanceof Promise
is.objectNative = (e: any): e is object => Object.prototype.toString.call(e) === '[object Object]'

is.upperCase = is.upper = (e: string): boolean => e.toUpperCase() === e
is.lowerCase = is.lower = (e: string): boolean => e.toLowerCase() === e

export default is
