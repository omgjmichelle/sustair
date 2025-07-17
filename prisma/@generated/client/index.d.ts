
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PM
 * 
 */
export type PM = $Result.DefaultSelection<Prisma.$PMPayload>
/**
 * Model CO
 * 
 */
export type CO = $Result.DefaultSelection<Prisma.$COPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PMS
 * const pMS = await prisma.pM.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PMS
   * const pMS = await prisma.pM.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pM`: Exposes CRUD operations for the **PM** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PMS
    * const pMS = await prisma.pM.findMany()
    * ```
    */
  get pM(): Prisma.PMDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cO`: Exposes CRUD operations for the **CO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more COS
    * const cOS = await prisma.cO.findMany()
    * ```
    */
  get cO(): Prisma.CODelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PM: 'PM',
    CO: 'CO'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pM" | "cO"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PM: {
        payload: Prisma.$PMPayload<ExtArgs>
        fields: Prisma.PMFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PMFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PMFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>
          }
          findFirst: {
            args: Prisma.PMFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PMFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>
          }
          findMany: {
            args: Prisma.PMFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>[]
          }
          create: {
            args: Prisma.PMCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>
          }
          createMany: {
            args: Prisma.PMCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PMCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>[]
          }
          delete: {
            args: Prisma.PMDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>
          }
          update: {
            args: Prisma.PMUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>
          }
          deleteMany: {
            args: Prisma.PMDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PMUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PMUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>[]
          }
          upsert: {
            args: Prisma.PMUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PMPayload>
          }
          aggregate: {
            args: Prisma.PMAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePM>
          }
          groupBy: {
            args: Prisma.PMGroupByArgs<ExtArgs>
            result: $Utils.Optional<PMGroupByOutputType>[]
          }
          count: {
            args: Prisma.PMCountArgs<ExtArgs>
            result: $Utils.Optional<PMCountAggregateOutputType> | number
          }
        }
      }
      CO: {
        payload: Prisma.$COPayload<ExtArgs>
        fields: Prisma.COFieldRefs
        operations: {
          findUnique: {
            args: Prisma.COFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.COFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>
          }
          findFirst: {
            args: Prisma.COFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.COFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>
          }
          findMany: {
            args: Prisma.COFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>[]
          }
          create: {
            args: Prisma.COCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>
          }
          createMany: {
            args: Prisma.COCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.COCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>[]
          }
          delete: {
            args: Prisma.CODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>
          }
          update: {
            args: Prisma.COUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>
          }
          deleteMany: {
            args: Prisma.CODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.COUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.COUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>[]
          }
          upsert: {
            args: Prisma.COUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COPayload>
          }
          aggregate: {
            args: Prisma.COAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCO>
          }
          groupBy: {
            args: Prisma.COGroupByArgs<ExtArgs>
            result: $Utils.Optional<COGroupByOutputType>[]
          }
          count: {
            args: Prisma.COCountArgs<ExtArgs>
            result: $Utils.Optional<COCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pM?: PMOmit
    cO?: COOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PM
   */

  export type AggregatePM = {
    _count: PMCountAggregateOutputType | null
    _avg: PMAvgAggregateOutputType | null
    _sum: PMSumAggregateOutputType | null
    _min: PMMinAggregateOutputType | null
    _max: PMMaxAggregateOutputType | null
  }

  export type PMAvgAggregateOutputType = {
    humidity: number | null
    pm10: number | null
    pm25: number | null
    pressure: number | null
    temperature: number | null
  }

  export type PMSumAggregateOutputType = {
    humidity: number | null
    pm10: number | null
    pm25: number | null
    pressure: number | null
    temperature: number | null
  }

  export type PMMinAggregateOutputType = {
    humidity: number | null
    pm10: number | null
    pm25: number | null
    pressure: number | null
    temperature: number | null
    timestamp: Date | null
  }

  export type PMMaxAggregateOutputType = {
    humidity: number | null
    pm10: number | null
    pm25: number | null
    pressure: number | null
    temperature: number | null
    timestamp: Date | null
  }

  export type PMCountAggregateOutputType = {
    humidity: number
    pm10: number
    pm25: number
    pressure: number
    temperature: number
    timestamp: number
    _all: number
  }


  export type PMAvgAggregateInputType = {
    humidity?: true
    pm10?: true
    pm25?: true
    pressure?: true
    temperature?: true
  }

  export type PMSumAggregateInputType = {
    humidity?: true
    pm10?: true
    pm25?: true
    pressure?: true
    temperature?: true
  }

  export type PMMinAggregateInputType = {
    humidity?: true
    pm10?: true
    pm25?: true
    pressure?: true
    temperature?: true
    timestamp?: true
  }

  export type PMMaxAggregateInputType = {
    humidity?: true
    pm10?: true
    pm25?: true
    pressure?: true
    temperature?: true
    timestamp?: true
  }

  export type PMCountAggregateInputType = {
    humidity?: true
    pm10?: true
    pm25?: true
    pressure?: true
    temperature?: true
    timestamp?: true
    _all?: true
  }

  export type PMAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PM to aggregate.
     */
    where?: PMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PMS to fetch.
     */
    orderBy?: PMOrderByWithRelationInput | PMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PMS
    **/
    _count?: true | PMCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PMAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PMSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PMMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PMMaxAggregateInputType
  }

  export type GetPMAggregateType<T extends PMAggregateArgs> = {
        [P in keyof T & keyof AggregatePM]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePM[P]>
      : GetScalarType<T[P], AggregatePM[P]>
  }




  export type PMGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PMWhereInput
    orderBy?: PMOrderByWithAggregationInput | PMOrderByWithAggregationInput[]
    by: PMScalarFieldEnum[] | PMScalarFieldEnum
    having?: PMScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PMCountAggregateInputType | true
    _avg?: PMAvgAggregateInputType
    _sum?: PMSumAggregateInputType
    _min?: PMMinAggregateInputType
    _max?: PMMaxAggregateInputType
  }

  export type PMGroupByOutputType = {
    humidity: number
    pm10: number
    pm25: number
    pressure: number
    temperature: number
    timestamp: Date
    _count: PMCountAggregateOutputType | null
    _avg: PMAvgAggregateOutputType | null
    _sum: PMSumAggregateOutputType | null
    _min: PMMinAggregateOutputType | null
    _max: PMMaxAggregateOutputType | null
  }

  type GetPMGroupByPayload<T extends PMGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PMGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PMGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PMGroupByOutputType[P]>
            : GetScalarType<T[P], PMGroupByOutputType[P]>
        }
      >
    >


  export type PMSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    humidity?: boolean
    pm10?: boolean
    pm25?: boolean
    pressure?: boolean
    temperature?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["pM"]>

  export type PMSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    humidity?: boolean
    pm10?: boolean
    pm25?: boolean
    pressure?: boolean
    temperature?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["pM"]>

  export type PMSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    humidity?: boolean
    pm10?: boolean
    pm25?: boolean
    pressure?: boolean
    temperature?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["pM"]>

  export type PMSelectScalar = {
    humidity?: boolean
    pm10?: boolean
    pm25?: boolean
    pressure?: boolean
    temperature?: boolean
    timestamp?: boolean
  }

  export type PMOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"humidity" | "pm10" | "pm25" | "pressure" | "temperature" | "timestamp", ExtArgs["result"]["pM"]>

  export type $PMPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PM"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      humidity: number
      pm10: number
      pm25: number
      pressure: number
      temperature: number
      timestamp: Date
    }, ExtArgs["result"]["pM"]>
    composites: {}
  }

  type PMGetPayload<S extends boolean | null | undefined | PMDefaultArgs> = $Result.GetResult<Prisma.$PMPayload, S>

  type PMCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PMCountAggregateInputType | true
    }

  export interface PMDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PM'], meta: { name: 'PM' } }
    /**
     * Find zero or one PM that matches the filter.
     * @param {PMFindUniqueArgs} args - Arguments to find a PM
     * @example
     * // Get one PM
     * const pM = await prisma.pM.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PMFindUniqueArgs>(args: SelectSubset<T, PMFindUniqueArgs<ExtArgs>>): Prisma__PMClient<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PM that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PMFindUniqueOrThrowArgs} args - Arguments to find a PM
     * @example
     * // Get one PM
     * const pM = await prisma.pM.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PMFindUniqueOrThrowArgs>(args: SelectSubset<T, PMFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PMClient<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PM that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMFindFirstArgs} args - Arguments to find a PM
     * @example
     * // Get one PM
     * const pM = await prisma.pM.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PMFindFirstArgs>(args?: SelectSubset<T, PMFindFirstArgs<ExtArgs>>): Prisma__PMClient<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PM that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMFindFirstOrThrowArgs} args - Arguments to find a PM
     * @example
     * // Get one PM
     * const pM = await prisma.pM.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PMFindFirstOrThrowArgs>(args?: SelectSubset<T, PMFindFirstOrThrowArgs<ExtArgs>>): Prisma__PMClient<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PMS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PMS
     * const pMS = await prisma.pM.findMany()
     * 
     * // Get first 10 PMS
     * const pMS = await prisma.pM.findMany({ take: 10 })
     * 
     * // Only select the `humidity`
     * const pMWithHumidityOnly = await prisma.pM.findMany({ select: { humidity: true } })
     * 
     */
    findMany<T extends PMFindManyArgs>(args?: SelectSubset<T, PMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PM.
     * @param {PMCreateArgs} args - Arguments to create a PM.
     * @example
     * // Create one PM
     * const PM = await prisma.pM.create({
     *   data: {
     *     // ... data to create a PM
     *   }
     * })
     * 
     */
    create<T extends PMCreateArgs>(args: SelectSubset<T, PMCreateArgs<ExtArgs>>): Prisma__PMClient<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PMS.
     * @param {PMCreateManyArgs} args - Arguments to create many PMS.
     * @example
     * // Create many PMS
     * const pM = await prisma.pM.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PMCreateManyArgs>(args?: SelectSubset<T, PMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PMS and returns the data saved in the database.
     * @param {PMCreateManyAndReturnArgs} args - Arguments to create many PMS.
     * @example
     * // Create many PMS
     * const pM = await prisma.pM.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PMS and only return the `humidity`
     * const pMWithHumidityOnly = await prisma.pM.createManyAndReturn({
     *   select: { humidity: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PMCreateManyAndReturnArgs>(args?: SelectSubset<T, PMCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PM.
     * @param {PMDeleteArgs} args - Arguments to delete one PM.
     * @example
     * // Delete one PM
     * const PM = await prisma.pM.delete({
     *   where: {
     *     // ... filter to delete one PM
     *   }
     * })
     * 
     */
    delete<T extends PMDeleteArgs>(args: SelectSubset<T, PMDeleteArgs<ExtArgs>>): Prisma__PMClient<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PM.
     * @param {PMUpdateArgs} args - Arguments to update one PM.
     * @example
     * // Update one PM
     * const pM = await prisma.pM.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PMUpdateArgs>(args: SelectSubset<T, PMUpdateArgs<ExtArgs>>): Prisma__PMClient<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PMS.
     * @param {PMDeleteManyArgs} args - Arguments to filter PMS to delete.
     * @example
     * // Delete a few PMS
     * const { count } = await prisma.pM.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PMDeleteManyArgs>(args?: SelectSubset<T, PMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PMS
     * const pM = await prisma.pM.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PMUpdateManyArgs>(args: SelectSubset<T, PMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PMS and returns the data updated in the database.
     * @param {PMUpdateManyAndReturnArgs} args - Arguments to update many PMS.
     * @example
     * // Update many PMS
     * const pM = await prisma.pM.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PMS and only return the `humidity`
     * const pMWithHumidityOnly = await prisma.pM.updateManyAndReturn({
     *   select: { humidity: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PMUpdateManyAndReturnArgs>(args: SelectSubset<T, PMUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PM.
     * @param {PMUpsertArgs} args - Arguments to update or create a PM.
     * @example
     * // Update or create a PM
     * const pM = await prisma.pM.upsert({
     *   create: {
     *     // ... data to create a PM
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PM we want to update
     *   }
     * })
     */
    upsert<T extends PMUpsertArgs>(args: SelectSubset<T, PMUpsertArgs<ExtArgs>>): Prisma__PMClient<$Result.GetResult<Prisma.$PMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PMS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMCountArgs} args - Arguments to filter PMS to count.
     * @example
     * // Count the number of PMS
     * const count = await prisma.pM.count({
     *   where: {
     *     // ... the filter for the PMS we want to count
     *   }
     * })
    **/
    count<T extends PMCountArgs>(
      args?: Subset<T, PMCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PMCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PMAggregateArgs>(args: Subset<T, PMAggregateArgs>): Prisma.PrismaPromise<GetPMAggregateType<T>>

    /**
     * Group by PM.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PMGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PMGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PMGroupByArgs['orderBy'] }
        : { orderBy?: PMGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PM model
   */
  readonly fields: PMFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PM.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PMClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PM model
   */
  interface PMFieldRefs {
    readonly humidity: FieldRef<"PM", 'Float'>
    readonly pm10: FieldRef<"PM", 'Float'>
    readonly pm25: FieldRef<"PM", 'Float'>
    readonly pressure: FieldRef<"PM", 'Float'>
    readonly temperature: FieldRef<"PM", 'Float'>
    readonly timestamp: FieldRef<"PM", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PM findUnique
   */
  export type PMFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * Filter, which PM to fetch.
     */
    where: PMWhereUniqueInput
  }

  /**
   * PM findUniqueOrThrow
   */
  export type PMFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * Filter, which PM to fetch.
     */
    where: PMWhereUniqueInput
  }

  /**
   * PM findFirst
   */
  export type PMFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * Filter, which PM to fetch.
     */
    where?: PMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PMS to fetch.
     */
    orderBy?: PMOrderByWithRelationInput | PMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PMS.
     */
    cursor?: PMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PMS.
     */
    distinct?: PMScalarFieldEnum | PMScalarFieldEnum[]
  }

  /**
   * PM findFirstOrThrow
   */
  export type PMFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * Filter, which PM to fetch.
     */
    where?: PMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PMS to fetch.
     */
    orderBy?: PMOrderByWithRelationInput | PMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PMS.
     */
    cursor?: PMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PMS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PMS.
     */
    distinct?: PMScalarFieldEnum | PMScalarFieldEnum[]
  }

  /**
   * PM findMany
   */
  export type PMFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * Filter, which PMS to fetch.
     */
    where?: PMWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PMS to fetch.
     */
    orderBy?: PMOrderByWithRelationInput | PMOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PMS.
     */
    cursor?: PMWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PMS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PMS.
     */
    skip?: number
    distinct?: PMScalarFieldEnum | PMScalarFieldEnum[]
  }

  /**
   * PM create
   */
  export type PMCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * The data needed to create a PM.
     */
    data: XOR<PMCreateInput, PMUncheckedCreateInput>
  }

  /**
   * PM createMany
   */
  export type PMCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PMS.
     */
    data: PMCreateManyInput | PMCreateManyInput[]
  }

  /**
   * PM createManyAndReturn
   */
  export type PMCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * The data used to create many PMS.
     */
    data: PMCreateManyInput | PMCreateManyInput[]
  }

  /**
   * PM update
   */
  export type PMUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * The data needed to update a PM.
     */
    data: XOR<PMUpdateInput, PMUncheckedUpdateInput>
    /**
     * Choose, which PM to update.
     */
    where: PMWhereUniqueInput
  }

  /**
   * PM updateMany
   */
  export type PMUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PMS.
     */
    data: XOR<PMUpdateManyMutationInput, PMUncheckedUpdateManyInput>
    /**
     * Filter which PMS to update
     */
    where?: PMWhereInput
    /**
     * Limit how many PMS to update.
     */
    limit?: number
  }

  /**
   * PM updateManyAndReturn
   */
  export type PMUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * The data used to update PMS.
     */
    data: XOR<PMUpdateManyMutationInput, PMUncheckedUpdateManyInput>
    /**
     * Filter which PMS to update
     */
    where?: PMWhereInput
    /**
     * Limit how many PMS to update.
     */
    limit?: number
  }

  /**
   * PM upsert
   */
  export type PMUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * The filter to search for the PM to update in case it exists.
     */
    where: PMWhereUniqueInput
    /**
     * In case the PM found by the `where` argument doesn't exist, create a new PM with this data.
     */
    create: XOR<PMCreateInput, PMUncheckedCreateInput>
    /**
     * In case the PM was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PMUpdateInput, PMUncheckedUpdateInput>
  }

  /**
   * PM delete
   */
  export type PMDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
    /**
     * Filter which PM to delete.
     */
    where: PMWhereUniqueInput
  }

  /**
   * PM deleteMany
   */
  export type PMDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PMS to delete
     */
    where?: PMWhereInput
    /**
     * Limit how many PMS to delete.
     */
    limit?: number
  }

  /**
   * PM without action
   */
  export type PMDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PM
     */
    select?: PMSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PM
     */
    omit?: PMOmit<ExtArgs> | null
  }


  /**
   * Model CO
   */

  export type AggregateCO = {
    _count: COCountAggregateOutputType | null
    _avg: COAvgAggregateOutputType | null
    _sum: COSumAggregateOutputType | null
    _min: COMinAggregateOutputType | null
    _max: COMaxAggregateOutputType | null
  }

  export type COAvgAggregateOutputType = {
    lat: number | null
    lon: number | null
    CO: number | null
  }

  export type COSumAggregateOutputType = {
    lat: number | null
    lon: number | null
    CO: number | null
  }

  export type COMinAggregateOutputType = {
    lat: number | null
    lon: number | null
    CO: number | null
    timestamp: Date | null
  }

  export type COMaxAggregateOutputType = {
    lat: number | null
    lon: number | null
    CO: number | null
    timestamp: Date | null
  }

  export type COCountAggregateOutputType = {
    lat: number
    lon: number
    CO: number
    timestamp: number
    _all: number
  }


  export type COAvgAggregateInputType = {
    lat?: true
    lon?: true
    CO?: true
  }

  export type COSumAggregateInputType = {
    lat?: true
    lon?: true
    CO?: true
  }

  export type COMinAggregateInputType = {
    lat?: true
    lon?: true
    CO?: true
    timestamp?: true
  }

  export type COMaxAggregateInputType = {
    lat?: true
    lon?: true
    CO?: true
    timestamp?: true
  }

  export type COCountAggregateInputType = {
    lat?: true
    lon?: true
    CO?: true
    timestamp?: true
    _all?: true
  }

  export type COAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CO to aggregate.
     */
    where?: COWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COS to fetch.
     */
    orderBy?: COOrderByWithRelationInput | COOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: COWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned COS
    **/
    _count?: true | COCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: COAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: COSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: COMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: COMaxAggregateInputType
  }

  export type GetCOAggregateType<T extends COAggregateArgs> = {
        [P in keyof T & keyof AggregateCO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCO[P]>
      : GetScalarType<T[P], AggregateCO[P]>
  }




  export type COGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COWhereInput
    orderBy?: COOrderByWithAggregationInput | COOrderByWithAggregationInput[]
    by: COScalarFieldEnum[] | COScalarFieldEnum
    having?: COScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: COCountAggregateInputType | true
    _avg?: COAvgAggregateInputType
    _sum?: COSumAggregateInputType
    _min?: COMinAggregateInputType
    _max?: COMaxAggregateInputType
  }

  export type COGroupByOutputType = {
    lat: number
    lon: number
    CO: number
    timestamp: Date
    _count: COCountAggregateOutputType | null
    _avg: COAvgAggregateOutputType | null
    _sum: COSumAggregateOutputType | null
    _min: COMinAggregateOutputType | null
    _max: COMaxAggregateOutputType | null
  }

  type GetCOGroupByPayload<T extends COGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<COGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof COGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], COGroupByOutputType[P]>
            : GetScalarType<T[P], COGroupByOutputType[P]>
        }
      >
    >


  export type COSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lat?: boolean
    lon?: boolean
    CO?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cO"]>

  export type COSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lat?: boolean
    lon?: boolean
    CO?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cO"]>

  export type COSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    lat?: boolean
    lon?: boolean
    CO?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["cO"]>

  export type COSelectScalar = {
    lat?: boolean
    lon?: boolean
    CO?: boolean
    timestamp?: boolean
  }

  export type COOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"lat" | "lon" | "CO" | "timestamp", ExtArgs["result"]["cO"]>

  export type $COPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      lat: number
      lon: number
      CO: number
      timestamp: Date
    }, ExtArgs["result"]["cO"]>
    composites: {}
  }

  type COGetPayload<S extends boolean | null | undefined | CODefaultArgs> = $Result.GetResult<Prisma.$COPayload, S>

  type COCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<COFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: COCountAggregateInputType | true
    }

  export interface CODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CO'], meta: { name: 'CO' } }
    /**
     * Find zero or one CO that matches the filter.
     * @param {COFindUniqueArgs} args - Arguments to find a CO
     * @example
     * // Get one CO
     * const cO = await prisma.cO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends COFindUniqueArgs>(args: SelectSubset<T, COFindUniqueArgs<ExtArgs>>): Prisma__COClient<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {COFindUniqueOrThrowArgs} args - Arguments to find a CO
     * @example
     * // Get one CO
     * const cO = await prisma.cO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends COFindUniqueOrThrowArgs>(args: SelectSubset<T, COFindUniqueOrThrowArgs<ExtArgs>>): Prisma__COClient<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COFindFirstArgs} args - Arguments to find a CO
     * @example
     * // Get one CO
     * const cO = await prisma.cO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends COFindFirstArgs>(args?: SelectSubset<T, COFindFirstArgs<ExtArgs>>): Prisma__COClient<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COFindFirstOrThrowArgs} args - Arguments to find a CO
     * @example
     * // Get one CO
     * const cO = await prisma.cO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends COFindFirstOrThrowArgs>(args?: SelectSubset<T, COFindFirstOrThrowArgs<ExtArgs>>): Prisma__COClient<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more COS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all COS
     * const cOS = await prisma.cO.findMany()
     * 
     * // Get first 10 COS
     * const cOS = await prisma.cO.findMany({ take: 10 })
     * 
     * // Only select the `lat`
     * const cOWithLatOnly = await prisma.cO.findMany({ select: { lat: true } })
     * 
     */
    findMany<T extends COFindManyArgs>(args?: SelectSubset<T, COFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CO.
     * @param {COCreateArgs} args - Arguments to create a CO.
     * @example
     * // Create one CO
     * const CO = await prisma.cO.create({
     *   data: {
     *     // ... data to create a CO
     *   }
     * })
     * 
     */
    create<T extends COCreateArgs>(args: SelectSubset<T, COCreateArgs<ExtArgs>>): Prisma__COClient<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many COS.
     * @param {COCreateManyArgs} args - Arguments to create many COS.
     * @example
     * // Create many COS
     * const cO = await prisma.cO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends COCreateManyArgs>(args?: SelectSubset<T, COCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many COS and returns the data saved in the database.
     * @param {COCreateManyAndReturnArgs} args - Arguments to create many COS.
     * @example
     * // Create many COS
     * const cO = await prisma.cO.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many COS and only return the `lat`
     * const cOWithLatOnly = await prisma.cO.createManyAndReturn({
     *   select: { lat: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends COCreateManyAndReturnArgs>(args?: SelectSubset<T, COCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CO.
     * @param {CODeleteArgs} args - Arguments to delete one CO.
     * @example
     * // Delete one CO
     * const CO = await prisma.cO.delete({
     *   where: {
     *     // ... filter to delete one CO
     *   }
     * })
     * 
     */
    delete<T extends CODeleteArgs>(args: SelectSubset<T, CODeleteArgs<ExtArgs>>): Prisma__COClient<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CO.
     * @param {COUpdateArgs} args - Arguments to update one CO.
     * @example
     * // Update one CO
     * const cO = await prisma.cO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends COUpdateArgs>(args: SelectSubset<T, COUpdateArgs<ExtArgs>>): Prisma__COClient<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more COS.
     * @param {CODeleteManyArgs} args - Arguments to filter COS to delete.
     * @example
     * // Delete a few COS
     * const { count } = await prisma.cO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CODeleteManyArgs>(args?: SelectSubset<T, CODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many COS
     * const cO = await prisma.cO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends COUpdateManyArgs>(args: SelectSubset<T, COUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COS and returns the data updated in the database.
     * @param {COUpdateManyAndReturnArgs} args - Arguments to update many COS.
     * @example
     * // Update many COS
     * const cO = await prisma.cO.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more COS and only return the `lat`
     * const cOWithLatOnly = await prisma.cO.updateManyAndReturn({
     *   select: { lat: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends COUpdateManyAndReturnArgs>(args: SelectSubset<T, COUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CO.
     * @param {COUpsertArgs} args - Arguments to update or create a CO.
     * @example
     * // Update or create a CO
     * const cO = await prisma.cO.upsert({
     *   create: {
     *     // ... data to create a CO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CO we want to update
     *   }
     * })
     */
    upsert<T extends COUpsertArgs>(args: SelectSubset<T, COUpsertArgs<ExtArgs>>): Prisma__COClient<$Result.GetResult<Prisma.$COPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of COS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COCountArgs} args - Arguments to filter COS to count.
     * @example
     * // Count the number of COS
     * const count = await prisma.cO.count({
     *   where: {
     *     // ... the filter for the COS we want to count
     *   }
     * })
    **/
    count<T extends COCountArgs>(
      args?: Subset<T, COCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], COCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends COAggregateArgs>(args: Subset<T, COAggregateArgs>): Prisma.PrismaPromise<GetCOAggregateType<T>>

    /**
     * Group by CO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends COGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: COGroupByArgs['orderBy'] }
        : { orderBy?: COGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, COGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CO model
   */
  readonly fields: COFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__COClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CO model
   */
  interface COFieldRefs {
    readonly lat: FieldRef<"CO", 'Float'>
    readonly lon: FieldRef<"CO", 'Float'>
    readonly CO: FieldRef<"CO", 'Float'>
    readonly timestamp: FieldRef<"CO", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CO findUnique
   */
  export type COFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * Filter, which CO to fetch.
     */
    where: COWhereUniqueInput
  }

  /**
   * CO findUniqueOrThrow
   */
  export type COFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * Filter, which CO to fetch.
     */
    where: COWhereUniqueInput
  }

  /**
   * CO findFirst
   */
  export type COFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * Filter, which CO to fetch.
     */
    where?: COWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COS to fetch.
     */
    orderBy?: COOrderByWithRelationInput | COOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COS.
     */
    cursor?: COWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COS.
     */
    distinct?: COScalarFieldEnum | COScalarFieldEnum[]
  }

  /**
   * CO findFirstOrThrow
   */
  export type COFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * Filter, which CO to fetch.
     */
    where?: COWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COS to fetch.
     */
    orderBy?: COOrderByWithRelationInput | COOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COS.
     */
    cursor?: COWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COS.
     */
    distinct?: COScalarFieldEnum | COScalarFieldEnum[]
  }

  /**
   * CO findMany
   */
  export type COFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * Filter, which COS to fetch.
     */
    where?: COWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COS to fetch.
     */
    orderBy?: COOrderByWithRelationInput | COOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing COS.
     */
    cursor?: COWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COS.
     */
    skip?: number
    distinct?: COScalarFieldEnum | COScalarFieldEnum[]
  }

  /**
   * CO create
   */
  export type COCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * The data needed to create a CO.
     */
    data: XOR<COCreateInput, COUncheckedCreateInput>
  }

  /**
   * CO createMany
   */
  export type COCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many COS.
     */
    data: COCreateManyInput | COCreateManyInput[]
  }

  /**
   * CO createManyAndReturn
   */
  export type COCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * The data used to create many COS.
     */
    data: COCreateManyInput | COCreateManyInput[]
  }

  /**
   * CO update
   */
  export type COUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * The data needed to update a CO.
     */
    data: XOR<COUpdateInput, COUncheckedUpdateInput>
    /**
     * Choose, which CO to update.
     */
    where: COWhereUniqueInput
  }

  /**
   * CO updateMany
   */
  export type COUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update COS.
     */
    data: XOR<COUpdateManyMutationInput, COUncheckedUpdateManyInput>
    /**
     * Filter which COS to update
     */
    where?: COWhereInput
    /**
     * Limit how many COS to update.
     */
    limit?: number
  }

  /**
   * CO updateManyAndReturn
   */
  export type COUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * The data used to update COS.
     */
    data: XOR<COUpdateManyMutationInput, COUncheckedUpdateManyInput>
    /**
     * Filter which COS to update
     */
    where?: COWhereInput
    /**
     * Limit how many COS to update.
     */
    limit?: number
  }

  /**
   * CO upsert
   */
  export type COUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * The filter to search for the CO to update in case it exists.
     */
    where: COWhereUniqueInput
    /**
     * In case the CO found by the `where` argument doesn't exist, create a new CO with this data.
     */
    create: XOR<COCreateInput, COUncheckedCreateInput>
    /**
     * In case the CO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<COUpdateInput, COUncheckedUpdateInput>
  }

  /**
   * CO delete
   */
  export type CODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
    /**
     * Filter which CO to delete.
     */
    where: COWhereUniqueInput
  }

  /**
   * CO deleteMany
   */
  export type CODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COS to delete
     */
    where?: COWhereInput
    /**
     * Limit how many COS to delete.
     */
    limit?: number
  }

  /**
   * CO without action
   */
  export type CODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CO
     */
    select?: COSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CO
     */
    omit?: COOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PMScalarFieldEnum: {
    humidity: 'humidity',
    pm10: 'pm10',
    pm25: 'pm25',
    pressure: 'pressure',
    temperature: 'temperature',
    timestamp: 'timestamp'
  };

  export type PMScalarFieldEnum = (typeof PMScalarFieldEnum)[keyof typeof PMScalarFieldEnum]


  export const COScalarFieldEnum: {
    lat: 'lat',
    lon: 'lon',
    CO: 'CO',
    timestamp: 'timestamp'
  };

  export type COScalarFieldEnum = (typeof COScalarFieldEnum)[keyof typeof COScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type PMWhereInput = {
    AND?: PMWhereInput | PMWhereInput[]
    OR?: PMWhereInput[]
    NOT?: PMWhereInput | PMWhereInput[]
    humidity?: FloatFilter<"PM"> | number
    pm10?: FloatFilter<"PM"> | number
    pm25?: FloatFilter<"PM"> | number
    pressure?: FloatFilter<"PM"> | number
    temperature?: FloatFilter<"PM"> | number
    timestamp?: DateTimeFilter<"PM"> | Date | string
  }

  export type PMOrderByWithRelationInput = {
    humidity?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    pressure?: SortOrder
    temperature?: SortOrder
    timestamp?: SortOrder
  }

  export type PMWhereUniqueInput = Prisma.AtLeast<{
    timestamp?: Date | string
    AND?: PMWhereInput | PMWhereInput[]
    OR?: PMWhereInput[]
    NOT?: PMWhereInput | PMWhereInput[]
    humidity?: FloatFilter<"PM"> | number
    pm10?: FloatFilter<"PM"> | number
    pm25?: FloatFilter<"PM"> | number
    pressure?: FloatFilter<"PM"> | number
    temperature?: FloatFilter<"PM"> | number
  }, "timestamp">

  export type PMOrderByWithAggregationInput = {
    humidity?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    pressure?: SortOrder
    temperature?: SortOrder
    timestamp?: SortOrder
    _count?: PMCountOrderByAggregateInput
    _avg?: PMAvgOrderByAggregateInput
    _max?: PMMaxOrderByAggregateInput
    _min?: PMMinOrderByAggregateInput
    _sum?: PMSumOrderByAggregateInput
  }

  export type PMScalarWhereWithAggregatesInput = {
    AND?: PMScalarWhereWithAggregatesInput | PMScalarWhereWithAggregatesInput[]
    OR?: PMScalarWhereWithAggregatesInput[]
    NOT?: PMScalarWhereWithAggregatesInput | PMScalarWhereWithAggregatesInput[]
    humidity?: FloatWithAggregatesFilter<"PM"> | number
    pm10?: FloatWithAggregatesFilter<"PM"> | number
    pm25?: FloatWithAggregatesFilter<"PM"> | number
    pressure?: FloatWithAggregatesFilter<"PM"> | number
    temperature?: FloatWithAggregatesFilter<"PM"> | number
    timestamp?: DateTimeWithAggregatesFilter<"PM"> | Date | string
  }

  export type COWhereInput = {
    AND?: COWhereInput | COWhereInput[]
    OR?: COWhereInput[]
    NOT?: COWhereInput | COWhereInput[]
    lat?: FloatFilter<"CO"> | number
    lon?: FloatFilter<"CO"> | number
    CO?: FloatFilter<"CO"> | number
    timestamp?: DateTimeFilter<"CO"> | Date | string
  }

  export type COOrderByWithRelationInput = {
    lat?: SortOrder
    lon?: SortOrder
    CO?: SortOrder
    timestamp?: SortOrder
  }

  export type COWhereUniqueInput = Prisma.AtLeast<{
    timestamp?: Date | string
    AND?: COWhereInput | COWhereInput[]
    OR?: COWhereInput[]
    NOT?: COWhereInput | COWhereInput[]
    lat?: FloatFilter<"CO"> | number
    lon?: FloatFilter<"CO"> | number
    CO?: FloatFilter<"CO"> | number
  }, "timestamp">

  export type COOrderByWithAggregationInput = {
    lat?: SortOrder
    lon?: SortOrder
    CO?: SortOrder
    timestamp?: SortOrder
    _count?: COCountOrderByAggregateInput
    _avg?: COAvgOrderByAggregateInput
    _max?: COMaxOrderByAggregateInput
    _min?: COMinOrderByAggregateInput
    _sum?: COSumOrderByAggregateInput
  }

  export type COScalarWhereWithAggregatesInput = {
    AND?: COScalarWhereWithAggregatesInput | COScalarWhereWithAggregatesInput[]
    OR?: COScalarWhereWithAggregatesInput[]
    NOT?: COScalarWhereWithAggregatesInput | COScalarWhereWithAggregatesInput[]
    lat?: FloatWithAggregatesFilter<"CO"> | number
    lon?: FloatWithAggregatesFilter<"CO"> | number
    CO?: FloatWithAggregatesFilter<"CO"> | number
    timestamp?: DateTimeWithAggregatesFilter<"CO"> | Date | string
  }

  export type PMCreateInput = {
    humidity: number
    pm10: number
    pm25: number
    pressure: number
    temperature: number
    timestamp: Date | string
  }

  export type PMUncheckedCreateInput = {
    humidity: number
    pm10: number
    pm25: number
    pressure: number
    temperature: number
    timestamp: Date | string
  }

  export type PMUpdateInput = {
    humidity?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PMUncheckedUpdateInput = {
    humidity?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PMCreateManyInput = {
    humidity: number
    pm10: number
    pm25: number
    pressure: number
    temperature: number
    timestamp: Date | string
  }

  export type PMUpdateManyMutationInput = {
    humidity?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PMUncheckedUpdateManyInput = {
    humidity?: FloatFieldUpdateOperationsInput | number
    pm10?: FloatFieldUpdateOperationsInput | number
    pm25?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type COCreateInput = {
    lat: number
    lon: number
    CO: number
    timestamp: Date | string
  }

  export type COUncheckedCreateInput = {
    lat: number
    lon: number
    CO: number
    timestamp: Date | string
  }

  export type COUpdateInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    CO?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type COUncheckedUpdateInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    CO?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type COCreateManyInput = {
    lat: number
    lon: number
    CO: number
    timestamp: Date | string
  }

  export type COUpdateManyMutationInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    CO?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type COUncheckedUpdateManyInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lon?: FloatFieldUpdateOperationsInput | number
    CO?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PMCountOrderByAggregateInput = {
    humidity?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    pressure?: SortOrder
    temperature?: SortOrder
    timestamp?: SortOrder
  }

  export type PMAvgOrderByAggregateInput = {
    humidity?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    pressure?: SortOrder
    temperature?: SortOrder
  }

  export type PMMaxOrderByAggregateInput = {
    humidity?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    pressure?: SortOrder
    temperature?: SortOrder
    timestamp?: SortOrder
  }

  export type PMMinOrderByAggregateInput = {
    humidity?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    pressure?: SortOrder
    temperature?: SortOrder
    timestamp?: SortOrder
  }

  export type PMSumOrderByAggregateInput = {
    humidity?: SortOrder
    pm10?: SortOrder
    pm25?: SortOrder
    pressure?: SortOrder
    temperature?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type COCountOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
    CO?: SortOrder
    timestamp?: SortOrder
  }

  export type COAvgOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
    CO?: SortOrder
  }

  export type COMaxOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
    CO?: SortOrder
    timestamp?: SortOrder
  }

  export type COMinOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
    CO?: SortOrder
    timestamp?: SortOrder
  }

  export type COSumOrderByAggregateInput = {
    lat?: SortOrder
    lon?: SortOrder
    CO?: SortOrder
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}