
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Produit
 * 
 */
export type Produit = $Result.DefaultSelection<Prisma.$ProduitPayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model Commande
 * 
 */
export type Commande = $Result.DefaultSelection<Prisma.$CommandePayload>
/**
 * Model LigneCommande
 * 
 */
export type LigneCommande = $Result.DefaultSelection<Prisma.$LigneCommandePayload>
/**
 * Model Livraison
 * 
 */
export type Livraison = $Result.DefaultSelection<Prisma.$LivraisonPayload>
/**
 * Model Rapport
 * 
 */
export type Rapport = $Result.DefaultSelection<Prisma.$RapportPayload>
/**
 * Model AlerteStock
 * 
 */
export type AlerteStock = $Result.DefaultSelection<Prisma.$AlerteStockPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Statut: {
  ACTIF: 'ACTIF',
  INACTIF: 'INACTIF',
  BLOQUE: 'BLOQUE'
};

export type Statut = (typeof Statut)[keyof typeof Statut]


export const Role: {
  ADMIN: 'ADMIN',
  CLIENT: 'CLIENT',
  FOURNISSEUR: 'FOURNISSEUR',
  LIVREUR: 'LIVREUR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatutProduit: {
  DISPONIBLE: 'DISPONIBLE',
  EN_RUPTURE: 'EN_RUPTURE',
  ARCHIVE: 'ARCHIVE'
};

export type StatutProduit = (typeof StatutProduit)[keyof typeof StatutProduit]


export const StatutCommande: {
  EN_ATTENTE: 'EN_ATTENTE',
  CONFIRMEE: 'CONFIRMEE',
  EN_PREPARATION: 'EN_PREPARATION',
  EXPEDIEE: 'EXPEDIEE',
  LIVREE: 'LIVREE',
  ANNULEE: 'ANNULEE'
};

export type StatutCommande = (typeof StatutCommande)[keyof typeof StatutCommande]


export const StatutLivraison: {
  EN_TRANSIT: 'EN_TRANSIT',
  LIVREE: 'LIVREE',
  EN_ATTENTE: 'EN_ATTENTE'
};

export type StatutLivraison = (typeof StatutLivraison)[keyof typeof StatutLivraison]


export const StatutAlerte: {
  ACTIVE: 'ACTIVE',
  RESOLUE: 'RESOLUE'
};

export type StatutAlerte = (typeof StatutAlerte)[keyof typeof StatutAlerte]

}

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatutProduit = $Enums.StatutProduit

export const StatutProduit: typeof $Enums.StatutProduit

export type StatutCommande = $Enums.StatutCommande

export const StatutCommande: typeof $Enums.StatutCommande

export type StatutLivraison = $Enums.StatutLivraison

export const StatutLivraison: typeof $Enums.StatutLivraison

export type StatutAlerte = $Enums.StatutAlerte

export const StatutAlerte: typeof $Enums.StatutAlerte

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produit`: Exposes CRUD operations for the **Produit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produits
    * const produits = await prisma.produit.findMany()
    * ```
    */
  get produit(): Prisma.ProduitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commande`: Exposes CRUD operations for the **Commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commandes
    * const commandes = await prisma.commande.findMany()
    * ```
    */
  get commande(): Prisma.CommandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ligneCommande`: Exposes CRUD operations for the **LigneCommande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LigneCommandes
    * const ligneCommandes = await prisma.ligneCommande.findMany()
    * ```
    */
  get ligneCommande(): Prisma.LigneCommandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livraison`: Exposes CRUD operations for the **Livraison** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livraisons
    * const livraisons = await prisma.livraison.findMany()
    * ```
    */
  get livraison(): Prisma.LivraisonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rapport`: Exposes CRUD operations for the **Rapport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rapports
    * const rapports = await prisma.rapport.findMany()
    * ```
    */
  get rapport(): Prisma.RapportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alerteStock`: Exposes CRUD operations for the **AlerteStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlerteStocks
    * const alerteStocks = await prisma.alerteStock.findMany()
    * ```
    */
  get alerteStock(): Prisma.AlerteStockDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
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
    User: 'User',
    Produit: 'Produit',
    Categorie: 'Categorie',
    Commande: 'Commande',
    LigneCommande: 'LigneCommande',
    Livraison: 'Livraison',
    Rapport: 'Rapport',
    AlerteStock: 'AlerteStock'
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
      modelProps: "user" | "produit" | "categorie" | "commande" | "ligneCommande" | "livraison" | "rapport" | "alerteStock"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Produit: {
        payload: Prisma.$ProduitPayload<ExtArgs>
        fields: Prisma.ProduitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findFirst: {
            args: Prisma.ProduitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findMany: {
            args: Prisma.ProduitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          create: {
            args: Prisma.ProduitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          createMany: {
            args: Prisma.ProduitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          delete: {
            args: Prisma.ProduitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          update: {
            args: Prisma.ProduitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          deleteMany: {
            args: Prisma.ProduitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProduitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          upsert: {
            args: Prisma.ProduitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          aggregate: {
            args: Prisma.ProduitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduit>
          }
          groupBy: {
            args: Prisma.ProduitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduitCountArgs<ExtArgs>
            result: $Utils.Optional<ProduitCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      Commande: {
        payload: Prisma.$CommandePayload<ExtArgs>
        fields: Prisma.CommandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findFirst: {
            args: Prisma.CommandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findMany: {
            args: Prisma.CommandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          create: {
            args: Prisma.CommandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          createMany: {
            args: Prisma.CommandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          delete: {
            args: Prisma.CommandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          update: {
            args: Prisma.CommandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          deleteMany: {
            args: Prisma.CommandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          upsert: {
            args: Prisma.CommandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          aggregate: {
            args: Prisma.CommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommande>
          }
          groupBy: {
            args: Prisma.CommandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandeCountArgs<ExtArgs>
            result: $Utils.Optional<CommandeCountAggregateOutputType> | number
          }
        }
      }
      LigneCommande: {
        payload: Prisma.$LigneCommandePayload<ExtArgs>
        fields: Prisma.LigneCommandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LigneCommandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LigneCommandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>
          }
          findFirst: {
            args: Prisma.LigneCommandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LigneCommandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>
          }
          findMany: {
            args: Prisma.LigneCommandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>[]
          }
          create: {
            args: Prisma.LigneCommandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>
          }
          createMany: {
            args: Prisma.LigneCommandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LigneCommandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>[]
          }
          delete: {
            args: Prisma.LigneCommandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>
          }
          update: {
            args: Prisma.LigneCommandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>
          }
          deleteMany: {
            args: Prisma.LigneCommandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LigneCommandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LigneCommandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>[]
          }
          upsert: {
            args: Prisma.LigneCommandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LigneCommandePayload>
          }
          aggregate: {
            args: Prisma.LigneCommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLigneCommande>
          }
          groupBy: {
            args: Prisma.LigneCommandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LigneCommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LigneCommandeCountArgs<ExtArgs>
            result: $Utils.Optional<LigneCommandeCountAggregateOutputType> | number
          }
        }
      }
      Livraison: {
        payload: Prisma.$LivraisonPayload<ExtArgs>
        fields: Prisma.LivraisonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivraisonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivraisonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>
          }
          findFirst: {
            args: Prisma.LivraisonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivraisonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>
          }
          findMany: {
            args: Prisma.LivraisonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>[]
          }
          create: {
            args: Prisma.LivraisonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>
          }
          createMany: {
            args: Prisma.LivraisonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivraisonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>[]
          }
          delete: {
            args: Prisma.LivraisonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>
          }
          update: {
            args: Prisma.LivraisonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>
          }
          deleteMany: {
            args: Prisma.LivraisonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivraisonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivraisonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>[]
          }
          upsert: {
            args: Prisma.LivraisonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivraisonPayload>
          }
          aggregate: {
            args: Prisma.LivraisonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivraison>
          }
          groupBy: {
            args: Prisma.LivraisonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivraisonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivraisonCountArgs<ExtArgs>
            result: $Utils.Optional<LivraisonCountAggregateOutputType> | number
          }
        }
      }
      Rapport: {
        payload: Prisma.$RapportPayload<ExtArgs>
        fields: Prisma.RapportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RapportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RapportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          findFirst: {
            args: Prisma.RapportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RapportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          findMany: {
            args: Prisma.RapportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>[]
          }
          create: {
            args: Prisma.RapportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          createMany: {
            args: Prisma.RapportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RapportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>[]
          }
          delete: {
            args: Prisma.RapportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          update: {
            args: Prisma.RapportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          deleteMany: {
            args: Prisma.RapportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RapportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RapportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>[]
          }
          upsert: {
            args: Prisma.RapportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportPayload>
          }
          aggregate: {
            args: Prisma.RapportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRapport>
          }
          groupBy: {
            args: Prisma.RapportGroupByArgs<ExtArgs>
            result: $Utils.Optional<RapportGroupByOutputType>[]
          }
          count: {
            args: Prisma.RapportCountArgs<ExtArgs>
            result: $Utils.Optional<RapportCountAggregateOutputType> | number
          }
        }
      }
      AlerteStock: {
        payload: Prisma.$AlerteStockPayload<ExtArgs>
        fields: Prisma.AlerteStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlerteStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlerteStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>
          }
          findFirst: {
            args: Prisma.AlerteStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlerteStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>
          }
          findMany: {
            args: Prisma.AlerteStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>[]
          }
          create: {
            args: Prisma.AlerteStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>
          }
          createMany: {
            args: Prisma.AlerteStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlerteStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>[]
          }
          delete: {
            args: Prisma.AlerteStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>
          }
          update: {
            args: Prisma.AlerteStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>
          }
          deleteMany: {
            args: Prisma.AlerteStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlerteStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlerteStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>[]
          }
          upsert: {
            args: Prisma.AlerteStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlerteStockPayload>
          }
          aggregate: {
            args: Prisma.AlerteStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlerteStock>
          }
          groupBy: {
            args: Prisma.AlerteStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlerteStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlerteStockCountArgs<ExtArgs>
            result: $Utils.Optional<AlerteStockCountAggregateOutputType> | number
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
    user?: UserOmit
    produit?: ProduitOmit
    categorie?: CategorieOmit
    commande?: CommandeOmit
    ligneCommande?: LigneCommandeOmit
    livraison?: LivraisonOmit
    rapport?: RapportOmit
    alerteStock?: AlerteStockOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    produits: number
    commandes: number
    livraisons: number
    rapports: number
    alertesGerees: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | UserCountOutputTypeCountProduitsArgs
    commandes?: boolean | UserCountOutputTypeCountCommandesArgs
    livraisons?: boolean | UserCountOutputTypeCountLivraisonsArgs
    rapports?: boolean | UserCountOutputTypeCountRapportsArgs
    alertesGerees?: boolean | UserCountOutputTypeCountAlertesGereesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLivraisonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivraisonWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRapportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RapportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertesGereesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlerteStockWhereInput
  }


  /**
   * Count Type ProduitCountOutputType
   */

  export type ProduitCountOutputType = {
    lignesCommande: number
    alertesStock: number
  }

  export type ProduitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lignesCommande?: boolean | ProduitCountOutputTypeCountLignesCommandeArgs
    alertesStock?: boolean | ProduitCountOutputTypeCountAlertesStockArgs
  }

  // Custom InputTypes
  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduitCountOutputType
     */
    select?: ProduitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountLignesCommandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LigneCommandeWhereInput
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountAlertesStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlerteStockWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    produits: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | CategorieCountOutputTypeCountProduitsArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
  }


  /**
   * Count Type CommandeCountOutputType
   */

  export type CommandeCountOutputType = {
    lignesCommande: number
  }

  export type CommandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lignesCommande?: boolean | CommandeCountOutputTypeCountLignesCommandeArgs
  }

  // Custom InputTypes
  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeCountOutputType
     */
    select?: CommandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeCountLignesCommandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LigneCommandeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    mdp: string | null
    adresse: string | null
    statut: $Enums.Statut | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    mdp: string | null
    adresse: string | null
    statut: $Enums.Statut | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    mdp: number
    adresse: number
    statut: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    mdp?: true
    adresse?: true
    statut?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    mdp?: true
    adresse?: true
    statut?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    mdp?: true
    adresse?: true
    statut?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse: string | null
    statut: $Enums.Statut
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    mdp?: boolean
    adresse?: boolean
    statut?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    produits?: boolean | User$produitsArgs<ExtArgs>
    commandes?: boolean | User$commandesArgs<ExtArgs>
    livraisons?: boolean | User$livraisonsArgs<ExtArgs>
    rapports?: boolean | User$rapportsArgs<ExtArgs>
    alertesGerees?: boolean | User$alertesGereesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    mdp?: boolean
    adresse?: boolean
    statut?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    mdp?: boolean
    adresse?: boolean
    statut?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    mdp?: boolean
    adresse?: boolean
    statut?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "mdp" | "adresse" | "statut" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | User$produitsArgs<ExtArgs>
    commandes?: boolean | User$commandesArgs<ExtArgs>
    livraisons?: boolean | User$livraisonsArgs<ExtArgs>
    rapports?: boolean | User$rapportsArgs<ExtArgs>
    alertesGerees?: boolean | User$alertesGereesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      produits: Prisma.$ProduitPayload<ExtArgs>[]
      commandes: Prisma.$CommandePayload<ExtArgs>[]
      livraisons: Prisma.$LivraisonPayload<ExtArgs>[]
      rapports: Prisma.$RapportPayload<ExtArgs>[]
      alertesGerees: Prisma.$AlerteStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      email: string
      mdp: string
      adresse: string | null
      statut: $Enums.Statut
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produits<T extends User$produitsArgs<ExtArgs> = {}>(args?: Subset<T, User$produitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commandes<T extends User$commandesArgs<ExtArgs> = {}>(args?: Subset<T, User$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    livraisons<T extends User$livraisonsArgs<ExtArgs> = {}>(args?: Subset<T, User$livraisonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rapports<T extends User$rapportsArgs<ExtArgs> = {}>(args?: Subset<T, User$rapportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alertesGerees<T extends User$alertesGereesArgs<ExtArgs> = {}>(args?: Subset<T, User$alertesGereesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly mdp: FieldRef<"User", 'String'>
    readonly adresse: FieldRef<"User", 'String'>
    readonly statut: FieldRef<"User", 'Statut'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.produits
   */
  export type User$produitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    cursor?: ProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * User.commandes
   */
  export type User$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * User.livraisons
   */
  export type User$livraisonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    where?: LivraisonWhereInput
    orderBy?: LivraisonOrderByWithRelationInput | LivraisonOrderByWithRelationInput[]
    cursor?: LivraisonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivraisonScalarFieldEnum | LivraisonScalarFieldEnum[]
  }

  /**
   * User.rapports
   */
  export type User$rapportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    where?: RapportWhereInput
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    cursor?: RapportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RapportScalarFieldEnum | RapportScalarFieldEnum[]
  }

  /**
   * User.alertesGerees
   */
  export type User$alertesGereesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    where?: AlerteStockWhereInput
    orderBy?: AlerteStockOrderByWithRelationInput | AlerteStockOrderByWithRelationInput[]
    cursor?: AlerteStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlerteStockScalarFieldEnum | AlerteStockScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Produit
   */

  export type AggregateProduit = {
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  export type ProduitAvgAggregateOutputType = {
    prix: number | null
    quantiteStock: number | null
  }

  export type ProduitSumAggregateOutputType = {
    prix: number | null
    quantiteStock: number | null
  }

  export type ProduitMinAggregateOutputType = {
    idProduit: string | null
    nom: string | null
    description: string | null
    prix: number | null
    quantiteStock: number | null
    typeProduit: string | null
    imageURL: string | null
    dateAjout: Date | null
    statutProduit: $Enums.StatutProduit | null
    categorieId: string | null
    fournisseurId: string | null
  }

  export type ProduitMaxAggregateOutputType = {
    idProduit: string | null
    nom: string | null
    description: string | null
    prix: number | null
    quantiteStock: number | null
    typeProduit: string | null
    imageURL: string | null
    dateAjout: Date | null
    statutProduit: $Enums.StatutProduit | null
    categorieId: string | null
    fournisseurId: string | null
  }

  export type ProduitCountAggregateOutputType = {
    idProduit: number
    nom: number
    description: number
    prix: number
    quantiteStock: number
    typeProduit: number
    imageURL: number
    dateAjout: number
    statutProduit: number
    categorieId: number
    fournisseurId: number
    _all: number
  }


  export type ProduitAvgAggregateInputType = {
    prix?: true
    quantiteStock?: true
  }

  export type ProduitSumAggregateInputType = {
    prix?: true
    quantiteStock?: true
  }

  export type ProduitMinAggregateInputType = {
    idProduit?: true
    nom?: true
    description?: true
    prix?: true
    quantiteStock?: true
    typeProduit?: true
    imageURL?: true
    dateAjout?: true
    statutProduit?: true
    categorieId?: true
    fournisseurId?: true
  }

  export type ProduitMaxAggregateInputType = {
    idProduit?: true
    nom?: true
    description?: true
    prix?: true
    quantiteStock?: true
    typeProduit?: true
    imageURL?: true
    dateAjout?: true
    statutProduit?: true
    categorieId?: true
    fournisseurId?: true
  }

  export type ProduitCountAggregateInputType = {
    idProduit?: true
    nom?: true
    description?: true
    prix?: true
    quantiteStock?: true
    typeProduit?: true
    imageURL?: true
    dateAjout?: true
    statutProduit?: true
    categorieId?: true
    fournisseurId?: true
    _all?: true
  }

  export type ProduitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit to aggregate.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produits
    **/
    _count?: true | ProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduitMaxAggregateInputType
  }

  export type GetProduitAggregateType<T extends ProduitAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit[P]>
      : GetScalarType<T[P], AggregateProduit[P]>
  }




  export type ProduitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithAggregationInput | ProduitOrderByWithAggregationInput[]
    by: ProduitScalarFieldEnum[] | ProduitScalarFieldEnum
    having?: ProduitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduitCountAggregateInputType | true
    _avg?: ProduitAvgAggregateInputType
    _sum?: ProduitSumAggregateInputType
    _min?: ProduitMinAggregateInputType
    _max?: ProduitMaxAggregateInputType
  }

  export type ProduitGroupByOutputType = {
    idProduit: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout: Date
    statutProduit: $Enums.StatutProduit
    categorieId: string
    fournisseurId: string
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  type GetProduitGroupByPayload<T extends ProduitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduitGroupByOutputType[P]>
            : GetScalarType<T[P], ProduitGroupByOutputType[P]>
        }
      >
    >


  export type ProduitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProduit?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
    quantiteStock?: boolean
    typeProduit?: boolean
    imageURL?: boolean
    dateAjout?: boolean
    statutProduit?: boolean
    categorieId?: boolean
    fournisseurId?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    fournisseur?: boolean | UserDefaultArgs<ExtArgs>
    lignesCommande?: boolean | Produit$lignesCommandeArgs<ExtArgs>
    alertesStock?: boolean | Produit$alertesStockArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProduit?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
    quantiteStock?: boolean
    typeProduit?: boolean
    imageURL?: boolean
    dateAjout?: boolean
    statutProduit?: boolean
    categorieId?: boolean
    fournisseurId?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    fournisseur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idProduit?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
    quantiteStock?: boolean
    typeProduit?: boolean
    imageURL?: boolean
    dateAjout?: boolean
    statutProduit?: boolean
    categorieId?: boolean
    fournisseurId?: boolean
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    fournisseur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectScalar = {
    idProduit?: boolean
    nom?: boolean
    description?: boolean
    prix?: boolean
    quantiteStock?: boolean
    typeProduit?: boolean
    imageURL?: boolean
    dateAjout?: boolean
    statutProduit?: boolean
    categorieId?: boolean
    fournisseurId?: boolean
  }

  export type ProduitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idProduit" | "nom" | "description" | "prix" | "quantiteStock" | "typeProduit" | "imageURL" | "dateAjout" | "statutProduit" | "categorieId" | "fournisseurId", ExtArgs["result"]["produit"]>
  export type ProduitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    fournisseur?: boolean | UserDefaultArgs<ExtArgs>
    lignesCommande?: boolean | Produit$lignesCommandeArgs<ExtArgs>
    alertesStock?: boolean | Produit$alertesStockArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProduitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    fournisseur?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProduitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | CategorieDefaultArgs<ExtArgs>
    fournisseur?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProduitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produit"
    objects: {
      categorie: Prisma.$CategoriePayload<ExtArgs>
      fournisseur: Prisma.$UserPayload<ExtArgs>
      lignesCommande: Prisma.$LigneCommandePayload<ExtArgs>[]
      alertesStock: Prisma.$AlerteStockPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idProduit: string
      nom: string
      description: string
      prix: number
      quantiteStock: number
      typeProduit: string
      imageURL: string
      dateAjout: Date
      statutProduit: $Enums.StatutProduit
      categorieId: string
      fournisseurId: string
    }, ExtArgs["result"]["produit"]>
    composites: {}
  }

  type ProduitGetPayload<S extends boolean | null | undefined | ProduitDefaultArgs> = $Result.GetResult<Prisma.$ProduitPayload, S>

  type ProduitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduitCountAggregateInputType | true
    }

  export interface ProduitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produit'], meta: { name: 'Produit' } }
    /**
     * Find zero or one Produit that matches the filter.
     * @param {ProduitFindUniqueArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduitFindUniqueArgs>(args: SelectSubset<T, ProduitFindUniqueArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProduitFindUniqueOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduitFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduitFindFirstArgs>(args?: SelectSubset<T, ProduitFindFirstArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduitFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produits
     * const produits = await prisma.produit.findMany()
     * 
     * // Get first 10 Produits
     * const produits = await prisma.produit.findMany({ take: 10 })
     * 
     * // Only select the `idProduit`
     * const produitWithIdProduitOnly = await prisma.produit.findMany({ select: { idProduit: true } })
     * 
     */
    findMany<T extends ProduitFindManyArgs>(args?: SelectSubset<T, ProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produit.
     * @param {ProduitCreateArgs} args - Arguments to create a Produit.
     * @example
     * // Create one Produit
     * const Produit = await prisma.produit.create({
     *   data: {
     *     // ... data to create a Produit
     *   }
     * })
     * 
     */
    create<T extends ProduitCreateArgs>(args: SelectSubset<T, ProduitCreateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produits.
     * @param {ProduitCreateManyArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduitCreateManyArgs>(args?: SelectSubset<T, ProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produits and returns the data saved in the database.
     * @param {ProduitCreateManyAndReturnArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produits and only return the `idProduit`
     * const produitWithIdProduitOnly = await prisma.produit.createManyAndReturn({
     *   select: { idProduit: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduitCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produit.
     * @param {ProduitDeleteArgs} args - Arguments to delete one Produit.
     * @example
     * // Delete one Produit
     * const Produit = await prisma.produit.delete({
     *   where: {
     *     // ... filter to delete one Produit
     *   }
     * })
     * 
     */
    delete<T extends ProduitDeleteArgs>(args: SelectSubset<T, ProduitDeleteArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produit.
     * @param {ProduitUpdateArgs} args - Arguments to update one Produit.
     * @example
     * // Update one Produit
     * const produit = await prisma.produit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduitUpdateArgs>(args: SelectSubset<T, ProduitUpdateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produits.
     * @param {ProduitDeleteManyArgs} args - Arguments to filter Produits to delete.
     * @example
     * // Delete a few Produits
     * const { count } = await prisma.produit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduitDeleteManyArgs>(args?: SelectSubset<T, ProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduitUpdateManyArgs>(args: SelectSubset<T, ProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits and returns the data updated in the database.
     * @param {ProduitUpdateManyAndReturnArgs} args - Arguments to update many Produits.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produits and only return the `idProduit`
     * const produitWithIdProduitOnly = await prisma.produit.updateManyAndReturn({
     *   select: { idProduit: true },
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
    updateManyAndReturn<T extends ProduitUpdateManyAndReturnArgs>(args: SelectSubset<T, ProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produit.
     * @param {ProduitUpsertArgs} args - Arguments to update or create a Produit.
     * @example
     * // Update or create a Produit
     * const produit = await prisma.produit.upsert({
     *   create: {
     *     // ... data to create a Produit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit we want to update
     *   }
     * })
     */
    upsert<T extends ProduitUpsertArgs>(args: SelectSubset<T, ProduitUpsertArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitCountArgs} args - Arguments to filter Produits to count.
     * @example
     * // Count the number of Produits
     * const count = await prisma.produit.count({
     *   where: {
     *     // ... the filter for the Produits we want to count
     *   }
     * })
    **/
    count<T extends ProduitCountArgs>(
      args?: Subset<T, ProduitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProduitAggregateArgs>(args: Subset<T, ProduitAggregateArgs>): Prisma.PrismaPromise<GetProduitAggregateType<T>>

    /**
     * Group by Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitGroupByArgs} args - Group by arguments.
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
      T extends ProduitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduitGroupByArgs['orderBy'] }
        : { orderBy?: ProduitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produit model
   */
  readonly fields: ProduitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorie<T extends CategorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategorieDefaultArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fournisseur<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lignesCommande<T extends Produit$lignesCommandeArgs<ExtArgs> = {}>(args?: Subset<T, Produit$lignesCommandeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alertesStock<T extends Produit$alertesStockArgs<ExtArgs> = {}>(args?: Subset<T, Produit$alertesStockArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produit model
   */
  interface ProduitFieldRefs {
    readonly idProduit: FieldRef<"Produit", 'String'>
    readonly nom: FieldRef<"Produit", 'String'>
    readonly description: FieldRef<"Produit", 'String'>
    readonly prix: FieldRef<"Produit", 'Float'>
    readonly quantiteStock: FieldRef<"Produit", 'Int'>
    readonly typeProduit: FieldRef<"Produit", 'String'>
    readonly imageURL: FieldRef<"Produit", 'String'>
    readonly dateAjout: FieldRef<"Produit", 'DateTime'>
    readonly statutProduit: FieldRef<"Produit", 'StatutProduit'>
    readonly categorieId: FieldRef<"Produit", 'String'>
    readonly fournisseurId: FieldRef<"Produit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produit findUnique
   */
  export type ProduitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findUniqueOrThrow
   */
  export type ProduitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findFirst
   */
  export type ProduitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findFirstOrThrow
   */
  export type ProduitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findMany
   */
  export type ProduitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produits to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit create
   */
  export type ProduitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to create a Produit.
     */
    data: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
  }

  /**
   * Produit createMany
   */
  export type ProduitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produit createManyAndReturn
   */
  export type ProduitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit update
   */
  export type ProduitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to update a Produit.
     */
    data: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
    /**
     * Choose, which Produit to update.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit updateMany
   */
  export type ProduitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
  }

  /**
   * Produit updateManyAndReturn
   */
  export type ProduitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit upsert
   */
  export type ProduitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The filter to search for the Produit to update in case it exists.
     */
    where: ProduitWhereUniqueInput
    /**
     * In case the Produit found by the `where` argument doesn't exist, create a new Produit with this data.
     */
    create: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
    /**
     * In case the Produit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
  }

  /**
   * Produit delete
   */
  export type ProduitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter which Produit to delete.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit deleteMany
   */
  export type ProduitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produits to delete
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to delete.
     */
    limit?: number
  }

  /**
   * Produit.lignesCommande
   */
  export type Produit$lignesCommandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    where?: LigneCommandeWhereInput
    orderBy?: LigneCommandeOrderByWithRelationInput | LigneCommandeOrderByWithRelationInput[]
    cursor?: LigneCommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LigneCommandeScalarFieldEnum | LigneCommandeScalarFieldEnum[]
  }

  /**
   * Produit.alertesStock
   */
  export type Produit$alertesStockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    where?: AlerteStockWhereInput
    orderBy?: AlerteStockOrderByWithRelationInput | AlerteStockOrderByWithRelationInput[]
    cursor?: AlerteStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlerteStockScalarFieldEnum | AlerteStockScalarFieldEnum[]
  }

  /**
   * Produit without action
   */
  export type ProduitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieMinAggregateOutputType = {
    idCategorie: string | null
    nomCategorie: string | null
    descriptionCategorie: string | null
    typeCategorie: string | null
    imageCategorie: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    idCategorie: string | null
    nomCategorie: string | null
    descriptionCategorie: string | null
    typeCategorie: string | null
    imageCategorie: string | null
  }

  export type CategorieCountAggregateOutputType = {
    idCategorie: number
    nomCategorie: number
    descriptionCategorie: number
    typeCategorie: number
    imageCategorie: number
    _all: number
  }


  export type CategorieMinAggregateInputType = {
    idCategorie?: true
    nomCategorie?: true
    descriptionCategorie?: true
    typeCategorie?: true
    imageCategorie?: true
  }

  export type CategorieMaxAggregateInputType = {
    idCategorie?: true
    nomCategorie?: true
    descriptionCategorie?: true
    typeCategorie?: true
    imageCategorie?: true
  }

  export type CategorieCountAggregateInputType = {
    idCategorie?: true
    nomCategorie?: true
    descriptionCategorie?: true
    typeCategorie?: true
    imageCategorie?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    idCategorie: string
    nomCategorie: string
    descriptionCategorie: string
    typeCategorie: string
    imageCategorie: string
    _count: CategorieCountAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCategorie?: boolean
    nomCategorie?: boolean
    descriptionCategorie?: boolean
    typeCategorie?: boolean
    imageCategorie?: boolean
    produits?: boolean | Categorie$produitsArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCategorie?: boolean
    nomCategorie?: boolean
    descriptionCategorie?: boolean
    typeCategorie?: boolean
    imageCategorie?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCategorie?: boolean
    nomCategorie?: boolean
    descriptionCategorie?: boolean
    typeCategorie?: boolean
    imageCategorie?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    idCategorie?: boolean
    nomCategorie?: boolean
    descriptionCategorie?: boolean
    typeCategorie?: boolean
    imageCategorie?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCategorie" | "nomCategorie" | "descriptionCategorie" | "typeCategorie" | "imageCategorie", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | Categorie$produitsArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      produits: Prisma.$ProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idCategorie: string
      nomCategorie: string
      descriptionCategorie: string
      typeCategorie: string
      imageCategorie: string
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `idCategorie`
     * const categorieWithIdCategorieOnly = await prisma.categorie.findMany({ select: { idCategorie: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `idCategorie`
     * const categorieWithIdCategorieOnly = await prisma.categorie.createManyAndReturn({
     *   select: { idCategorie: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `idCategorie`
     * const categorieWithIdCategorieOnly = await prisma.categorie.updateManyAndReturn({
     *   select: { idCategorie: true },
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
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
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
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produits<T extends Categorie$produitsArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$produitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly idCategorie: FieldRef<"Categorie", 'String'>
    readonly nomCategorie: FieldRef<"Categorie", 'String'>
    readonly descriptionCategorie: FieldRef<"Categorie", 'String'>
    readonly typeCategorie: FieldRef<"Categorie", 'String'>
    readonly imageCategorie: FieldRef<"Categorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie createManyAndReturn
   */
  export type CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie updateManyAndReturn
   */
  export type CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.produits
   */
  export type Categorie$produitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    cursor?: ProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Commande
   */

  export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  export type CommandeAvgAggregateOutputType = {
    totalCommande: number | null
    taxesAppliquees: number | null
  }

  export type CommandeSumAggregateOutputType = {
    totalCommande: number | null
    taxesAppliquees: number | null
  }

  export type CommandeMinAggregateOutputType = {
    idCommande: string | null
    numeroCommande: string | null
    dateCommande: Date | null
    statutCommande: $Enums.StatutCommande | null
    totalCommande: number | null
    taxesAppliquees: number | null
    adresseLivraison: string | null
    modePaiement: string | null
    datePaiement: Date | null
    clientId: string | null
  }

  export type CommandeMaxAggregateOutputType = {
    idCommande: string | null
    numeroCommande: string | null
    dateCommande: Date | null
    statutCommande: $Enums.StatutCommande | null
    totalCommande: number | null
    taxesAppliquees: number | null
    adresseLivraison: string | null
    modePaiement: string | null
    datePaiement: Date | null
    clientId: string | null
  }

  export type CommandeCountAggregateOutputType = {
    idCommande: number
    numeroCommande: number
    dateCommande: number
    statutCommande: number
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: number
    modePaiement: number
    datePaiement: number
    clientId: number
    _all: number
  }


  export type CommandeAvgAggregateInputType = {
    totalCommande?: true
    taxesAppliquees?: true
  }

  export type CommandeSumAggregateInputType = {
    totalCommande?: true
    taxesAppliquees?: true
  }

  export type CommandeMinAggregateInputType = {
    idCommande?: true
    numeroCommande?: true
    dateCommande?: true
    statutCommande?: true
    totalCommande?: true
    taxesAppliquees?: true
    adresseLivraison?: true
    modePaiement?: true
    datePaiement?: true
    clientId?: true
  }

  export type CommandeMaxAggregateInputType = {
    idCommande?: true
    numeroCommande?: true
    dateCommande?: true
    statutCommande?: true
    totalCommande?: true
    taxesAppliquees?: true
    adresseLivraison?: true
    modePaiement?: true
    datePaiement?: true
    clientId?: true
  }

  export type CommandeCountAggregateInputType = {
    idCommande?: true
    numeroCommande?: true
    dateCommande?: true
    statutCommande?: true
    totalCommande?: true
    taxesAppliquees?: true
    adresseLivraison?: true
    modePaiement?: true
    datePaiement?: true
    clientId?: true
    _all?: true
  }

  export type CommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commande to aggregate.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commandes
    **/
    _count?: true | CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType
  }

  export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommande[P]>
      : GetScalarType<T[P], AggregateCommande[P]>
  }




  export type CommandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithAggregationInput | CommandeOrderByWithAggregationInput[]
    by: CommandeScalarFieldEnum[] | CommandeScalarFieldEnum
    having?: CommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeCountAggregateInputType | true
    _avg?: CommandeAvgAggregateInputType
    _sum?: CommandeSumAggregateInputType
    _min?: CommandeMinAggregateInputType
    _max?: CommandeMaxAggregateInputType
  }

  export type CommandeGroupByOutputType = {
    idCommande: string
    numeroCommande: string
    dateCommande: Date
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement: Date | null
    clientId: string
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeGroupByOutputType[P]>
        }
      >
    >


  export type CommandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCommande?: boolean
    numeroCommande?: boolean
    dateCommande?: boolean
    statutCommande?: boolean
    totalCommande?: boolean
    taxesAppliquees?: boolean
    adresseLivraison?: boolean
    modePaiement?: boolean
    datePaiement?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    lignesCommande?: boolean | Commande$lignesCommandeArgs<ExtArgs>
    livraison?: boolean | Commande$livraisonArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCommande?: boolean
    numeroCommande?: boolean
    dateCommande?: boolean
    statutCommande?: boolean
    totalCommande?: boolean
    taxesAppliquees?: boolean
    adresseLivraison?: boolean
    modePaiement?: boolean
    datePaiement?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCommande?: boolean
    numeroCommande?: boolean
    dateCommande?: boolean
    statutCommande?: boolean
    totalCommande?: boolean
    taxesAppliquees?: boolean
    adresseLivraison?: boolean
    modePaiement?: boolean
    datePaiement?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectScalar = {
    idCommande?: boolean
    numeroCommande?: boolean
    dateCommande?: boolean
    statutCommande?: boolean
    totalCommande?: boolean
    taxesAppliquees?: boolean
    adresseLivraison?: boolean
    modePaiement?: boolean
    datePaiement?: boolean
    clientId?: boolean
  }

  export type CommandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCommande" | "numeroCommande" | "dateCommande" | "statutCommande" | "totalCommande" | "taxesAppliquees" | "adresseLivraison" | "modePaiement" | "datePaiement" | "clientId", ExtArgs["result"]["commande"]>
  export type CommandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    lignesCommande?: boolean | Commande$lignesCommandeArgs<ExtArgs>
    livraison?: boolean | Commande$livraisonArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commande"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      lignesCommande: Prisma.$LigneCommandePayload<ExtArgs>[]
      livraison: Prisma.$LivraisonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      idCommande: string
      numeroCommande: string
      dateCommande: Date
      statutCommande: $Enums.StatutCommande
      totalCommande: number
      taxesAppliquees: number
      adresseLivraison: string
      modePaiement: string
      datePaiement: Date | null
      clientId: string
    }, ExtArgs["result"]["commande"]>
    composites: {}
  }

  type CommandeGetPayload<S extends boolean | null | undefined | CommandeDefaultArgs> = $Result.GetResult<Prisma.$CommandePayload, S>

  type CommandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandeCountAggregateInputType | true
    }

  export interface CommandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commande'], meta: { name: 'Commande' } }
    /**
     * Find zero or one Commande that matches the filter.
     * @param {CommandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeFindUniqueArgs>(args: SelectSubset<T, CommandeFindUniqueArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeFindUniqueOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeFindFirstArgs>(args?: SelectSubset<T, CommandeFindFirstArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     * 
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     * 
     * // Only select the `idCommande`
     * const commandeWithIdCommandeOnly = await prisma.commande.findMany({ select: { idCommande: true } })
     * 
     */
    findMany<T extends CommandeFindManyArgs>(args?: SelectSubset<T, CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commande.
     * @param {CommandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     * 
     */
    create<T extends CommandeCreateArgs>(args: SelectSubset<T, CommandeCreateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commandes.
     * @param {CommandeCreateManyArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandeCreateManyArgs>(args?: SelectSubset<T, CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commandes and returns the data saved in the database.
     * @param {CommandeCreateManyAndReturnArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commandes and only return the `idCommande`
     * const commandeWithIdCommandeOnly = await prisma.commande.createManyAndReturn({
     *   select: { idCommande: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandeCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commande.
     * @param {CommandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     * 
     */
    delete<T extends CommandeDeleteArgs>(args: SelectSubset<T, CommandeDeleteArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commande.
     * @param {CommandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandeUpdateArgs>(args: SelectSubset<T, CommandeUpdateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commandes.
     * @param {CommandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandeDeleteManyArgs>(args?: SelectSubset<T, CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandeUpdateManyArgs>(args: SelectSubset<T, CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes and returns the data updated in the database.
     * @param {CommandeUpdateManyAndReturnArgs} args - Arguments to update many Commandes.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commandes and only return the `idCommande`
     * const commandeWithIdCommandeOnly = await prisma.commande.updateManyAndReturn({
     *   select: { idCommande: true },
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
    updateManyAndReturn<T extends CommandeUpdateManyAndReturnArgs>(args: SelectSubset<T, CommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commande.
     * @param {CommandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
     */
    upsert<T extends CommandeUpsertArgs>(args: SelectSubset<T, CommandeUpsertArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends CommandeCountArgs>(
      args?: Subset<T, CommandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeAggregateArgs>(args: Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>

    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeGroupByArgs} args - Group by arguments.
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
      T extends CommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandeGroupByArgs['orderBy'] }
        : { orderBy?: CommandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commande model
   */
  readonly fields: CommandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lignesCommande<T extends Commande$lignesCommandeArgs<ExtArgs> = {}>(args?: Subset<T, Commande$lignesCommandeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    livraison<T extends Commande$livraisonArgs<ExtArgs> = {}>(args?: Subset<T, Commande$livraisonArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Commande model
   */
  interface CommandeFieldRefs {
    readonly idCommande: FieldRef<"Commande", 'String'>
    readonly numeroCommande: FieldRef<"Commande", 'String'>
    readonly dateCommande: FieldRef<"Commande", 'DateTime'>
    readonly statutCommande: FieldRef<"Commande", 'StatutCommande'>
    readonly totalCommande: FieldRef<"Commande", 'Float'>
    readonly taxesAppliquees: FieldRef<"Commande", 'Float'>
    readonly adresseLivraison: FieldRef<"Commande", 'String'>
    readonly modePaiement: FieldRef<"Commande", 'String'>
    readonly datePaiement: FieldRef<"Commande", 'DateTime'>
    readonly clientId: FieldRef<"Commande", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commande findUnique
   */
  export type CommandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findUniqueOrThrow
   */
  export type CommandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findFirst
   */
  export type CommandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findFirstOrThrow
   */
  export type CommandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findMany
   */
  export type CommandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commandes to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande create
   */
  export type CommandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Commande.
     */
    data: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
  }

  /**
   * Commande createMany
   */
  export type CommandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commande createManyAndReturn
   */
  export type CommandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande update
   */
  export type CommandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Commande.
     */
    data: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
    /**
     * Choose, which Commande to update.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande updateMany
   */
  export type CommandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
  }

  /**
   * Commande updateManyAndReturn
   */
  export type CommandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande upsert
   */
  export type CommandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Commande to update in case it exists.
     */
    where: CommandeWhereUniqueInput
    /**
     * In case the Commande found by the `where` argument doesn't exist, create a new Commande with this data.
     */
    create: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
    /**
     * In case the Commande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
  }

  /**
   * Commande delete
   */
  export type CommandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter which Commande to delete.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande deleteMany
   */
  export type CommandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commandes to delete
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to delete.
     */
    limit?: number
  }

  /**
   * Commande.lignesCommande
   */
  export type Commande$lignesCommandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    where?: LigneCommandeWhereInput
    orderBy?: LigneCommandeOrderByWithRelationInput | LigneCommandeOrderByWithRelationInput[]
    cursor?: LigneCommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LigneCommandeScalarFieldEnum | LigneCommandeScalarFieldEnum[]
  }

  /**
   * Commande.livraison
   */
  export type Commande$livraisonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    where?: LivraisonWhereInput
  }

  /**
   * Commande without action
   */
  export type CommandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
  }


  /**
   * Model LigneCommande
   */

  export type AggregateLigneCommande = {
    _count: LigneCommandeCountAggregateOutputType | null
    _avg: LigneCommandeAvgAggregateOutputType | null
    _sum: LigneCommandeSumAggregateOutputType | null
    _min: LigneCommandeMinAggregateOutputType | null
    _max: LigneCommandeMaxAggregateOutputType | null
  }

  export type LigneCommandeAvgAggregateOutputType = {
    quantite: number | null
    prixUnitaire: number | null
  }

  export type LigneCommandeSumAggregateOutputType = {
    quantite: number | null
    prixUnitaire: number | null
  }

  export type LigneCommandeMinAggregateOutputType = {
    idLigneCommande: string | null
    quantite: number | null
    prixUnitaire: number | null
    commandeId: string | null
    produitId: string | null
  }

  export type LigneCommandeMaxAggregateOutputType = {
    idLigneCommande: string | null
    quantite: number | null
    prixUnitaire: number | null
    commandeId: string | null
    produitId: string | null
  }

  export type LigneCommandeCountAggregateOutputType = {
    idLigneCommande: number
    quantite: number
    prixUnitaire: number
    commandeId: number
    produitId: number
    _all: number
  }


  export type LigneCommandeAvgAggregateInputType = {
    quantite?: true
    prixUnitaire?: true
  }

  export type LigneCommandeSumAggregateInputType = {
    quantite?: true
    prixUnitaire?: true
  }

  export type LigneCommandeMinAggregateInputType = {
    idLigneCommande?: true
    quantite?: true
    prixUnitaire?: true
    commandeId?: true
    produitId?: true
  }

  export type LigneCommandeMaxAggregateInputType = {
    idLigneCommande?: true
    quantite?: true
    prixUnitaire?: true
    commandeId?: true
    produitId?: true
  }

  export type LigneCommandeCountAggregateInputType = {
    idLigneCommande?: true
    quantite?: true
    prixUnitaire?: true
    commandeId?: true
    produitId?: true
    _all?: true
  }

  export type LigneCommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LigneCommande to aggregate.
     */
    where?: LigneCommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LigneCommandes to fetch.
     */
    orderBy?: LigneCommandeOrderByWithRelationInput | LigneCommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LigneCommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LigneCommandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LigneCommandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LigneCommandes
    **/
    _count?: true | LigneCommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LigneCommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LigneCommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LigneCommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LigneCommandeMaxAggregateInputType
  }

  export type GetLigneCommandeAggregateType<T extends LigneCommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateLigneCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLigneCommande[P]>
      : GetScalarType<T[P], AggregateLigneCommande[P]>
  }




  export type LigneCommandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LigneCommandeWhereInput
    orderBy?: LigneCommandeOrderByWithAggregationInput | LigneCommandeOrderByWithAggregationInput[]
    by: LigneCommandeScalarFieldEnum[] | LigneCommandeScalarFieldEnum
    having?: LigneCommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LigneCommandeCountAggregateInputType | true
    _avg?: LigneCommandeAvgAggregateInputType
    _sum?: LigneCommandeSumAggregateInputType
    _min?: LigneCommandeMinAggregateInputType
    _max?: LigneCommandeMaxAggregateInputType
  }

  export type LigneCommandeGroupByOutputType = {
    idLigneCommande: string
    quantite: number
    prixUnitaire: number
    commandeId: string
    produitId: string
    _count: LigneCommandeCountAggregateOutputType | null
    _avg: LigneCommandeAvgAggregateOutputType | null
    _sum: LigneCommandeSumAggregateOutputType | null
    _min: LigneCommandeMinAggregateOutputType | null
    _max: LigneCommandeMaxAggregateOutputType | null
  }

  type GetLigneCommandeGroupByPayload<T extends LigneCommandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LigneCommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LigneCommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LigneCommandeGroupByOutputType[P]>
            : GetScalarType<T[P], LigneCommandeGroupByOutputType[P]>
        }
      >
    >


  export type LigneCommandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLigneCommande?: boolean
    quantite?: boolean
    prixUnitaire?: boolean
    commandeId?: boolean
    produitId?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ligneCommande"]>

  export type LigneCommandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLigneCommande?: boolean
    quantite?: boolean
    prixUnitaire?: boolean
    commandeId?: boolean
    produitId?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ligneCommande"]>

  export type LigneCommandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLigneCommande?: boolean
    quantite?: boolean
    prixUnitaire?: boolean
    commandeId?: boolean
    produitId?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ligneCommande"]>

  export type LigneCommandeSelectScalar = {
    idLigneCommande?: boolean
    quantite?: boolean
    prixUnitaire?: boolean
    commandeId?: boolean
    produitId?: boolean
  }

  export type LigneCommandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idLigneCommande" | "quantite" | "prixUnitaire" | "commandeId" | "produitId", ExtArgs["result"]["ligneCommande"]>
  export type LigneCommandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type LigneCommandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type LigneCommandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }

  export type $LigneCommandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LigneCommande"
    objects: {
      commande: Prisma.$CommandePayload<ExtArgs>
      produit: Prisma.$ProduitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idLigneCommande: string
      quantite: number
      prixUnitaire: number
      commandeId: string
      produitId: string
    }, ExtArgs["result"]["ligneCommande"]>
    composites: {}
  }

  type LigneCommandeGetPayload<S extends boolean | null | undefined | LigneCommandeDefaultArgs> = $Result.GetResult<Prisma.$LigneCommandePayload, S>

  type LigneCommandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LigneCommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LigneCommandeCountAggregateInputType | true
    }

  export interface LigneCommandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LigneCommande'], meta: { name: 'LigneCommande' } }
    /**
     * Find zero or one LigneCommande that matches the filter.
     * @param {LigneCommandeFindUniqueArgs} args - Arguments to find a LigneCommande
     * @example
     * // Get one LigneCommande
     * const ligneCommande = await prisma.ligneCommande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LigneCommandeFindUniqueArgs>(args: SelectSubset<T, LigneCommandeFindUniqueArgs<ExtArgs>>): Prisma__LigneCommandeClient<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LigneCommande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LigneCommandeFindUniqueOrThrowArgs} args - Arguments to find a LigneCommande
     * @example
     * // Get one LigneCommande
     * const ligneCommande = await prisma.ligneCommande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LigneCommandeFindUniqueOrThrowArgs>(args: SelectSubset<T, LigneCommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LigneCommandeClient<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LigneCommande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LigneCommandeFindFirstArgs} args - Arguments to find a LigneCommande
     * @example
     * // Get one LigneCommande
     * const ligneCommande = await prisma.ligneCommande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LigneCommandeFindFirstArgs>(args?: SelectSubset<T, LigneCommandeFindFirstArgs<ExtArgs>>): Prisma__LigneCommandeClient<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LigneCommande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LigneCommandeFindFirstOrThrowArgs} args - Arguments to find a LigneCommande
     * @example
     * // Get one LigneCommande
     * const ligneCommande = await prisma.ligneCommande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LigneCommandeFindFirstOrThrowArgs>(args?: SelectSubset<T, LigneCommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LigneCommandeClient<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LigneCommandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LigneCommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LigneCommandes
     * const ligneCommandes = await prisma.ligneCommande.findMany()
     * 
     * // Get first 10 LigneCommandes
     * const ligneCommandes = await prisma.ligneCommande.findMany({ take: 10 })
     * 
     * // Only select the `idLigneCommande`
     * const ligneCommandeWithIdLigneCommandeOnly = await prisma.ligneCommande.findMany({ select: { idLigneCommande: true } })
     * 
     */
    findMany<T extends LigneCommandeFindManyArgs>(args?: SelectSubset<T, LigneCommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LigneCommande.
     * @param {LigneCommandeCreateArgs} args - Arguments to create a LigneCommande.
     * @example
     * // Create one LigneCommande
     * const LigneCommande = await prisma.ligneCommande.create({
     *   data: {
     *     // ... data to create a LigneCommande
     *   }
     * })
     * 
     */
    create<T extends LigneCommandeCreateArgs>(args: SelectSubset<T, LigneCommandeCreateArgs<ExtArgs>>): Prisma__LigneCommandeClient<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LigneCommandes.
     * @param {LigneCommandeCreateManyArgs} args - Arguments to create many LigneCommandes.
     * @example
     * // Create many LigneCommandes
     * const ligneCommande = await prisma.ligneCommande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LigneCommandeCreateManyArgs>(args?: SelectSubset<T, LigneCommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LigneCommandes and returns the data saved in the database.
     * @param {LigneCommandeCreateManyAndReturnArgs} args - Arguments to create many LigneCommandes.
     * @example
     * // Create many LigneCommandes
     * const ligneCommande = await prisma.ligneCommande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LigneCommandes and only return the `idLigneCommande`
     * const ligneCommandeWithIdLigneCommandeOnly = await prisma.ligneCommande.createManyAndReturn({
     *   select: { idLigneCommande: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LigneCommandeCreateManyAndReturnArgs>(args?: SelectSubset<T, LigneCommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LigneCommande.
     * @param {LigneCommandeDeleteArgs} args - Arguments to delete one LigneCommande.
     * @example
     * // Delete one LigneCommande
     * const LigneCommande = await prisma.ligneCommande.delete({
     *   where: {
     *     // ... filter to delete one LigneCommande
     *   }
     * })
     * 
     */
    delete<T extends LigneCommandeDeleteArgs>(args: SelectSubset<T, LigneCommandeDeleteArgs<ExtArgs>>): Prisma__LigneCommandeClient<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LigneCommande.
     * @param {LigneCommandeUpdateArgs} args - Arguments to update one LigneCommande.
     * @example
     * // Update one LigneCommande
     * const ligneCommande = await prisma.ligneCommande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LigneCommandeUpdateArgs>(args: SelectSubset<T, LigneCommandeUpdateArgs<ExtArgs>>): Prisma__LigneCommandeClient<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LigneCommandes.
     * @param {LigneCommandeDeleteManyArgs} args - Arguments to filter LigneCommandes to delete.
     * @example
     * // Delete a few LigneCommandes
     * const { count } = await prisma.ligneCommande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LigneCommandeDeleteManyArgs>(args?: SelectSubset<T, LigneCommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LigneCommandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LigneCommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LigneCommandes
     * const ligneCommande = await prisma.ligneCommande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LigneCommandeUpdateManyArgs>(args: SelectSubset<T, LigneCommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LigneCommandes and returns the data updated in the database.
     * @param {LigneCommandeUpdateManyAndReturnArgs} args - Arguments to update many LigneCommandes.
     * @example
     * // Update many LigneCommandes
     * const ligneCommande = await prisma.ligneCommande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LigneCommandes and only return the `idLigneCommande`
     * const ligneCommandeWithIdLigneCommandeOnly = await prisma.ligneCommande.updateManyAndReturn({
     *   select: { idLigneCommande: true },
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
    updateManyAndReturn<T extends LigneCommandeUpdateManyAndReturnArgs>(args: SelectSubset<T, LigneCommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LigneCommande.
     * @param {LigneCommandeUpsertArgs} args - Arguments to update or create a LigneCommande.
     * @example
     * // Update or create a LigneCommande
     * const ligneCommande = await prisma.ligneCommande.upsert({
     *   create: {
     *     // ... data to create a LigneCommande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LigneCommande we want to update
     *   }
     * })
     */
    upsert<T extends LigneCommandeUpsertArgs>(args: SelectSubset<T, LigneCommandeUpsertArgs<ExtArgs>>): Prisma__LigneCommandeClient<$Result.GetResult<Prisma.$LigneCommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LigneCommandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LigneCommandeCountArgs} args - Arguments to filter LigneCommandes to count.
     * @example
     * // Count the number of LigneCommandes
     * const count = await prisma.ligneCommande.count({
     *   where: {
     *     // ... the filter for the LigneCommandes we want to count
     *   }
     * })
    **/
    count<T extends LigneCommandeCountArgs>(
      args?: Subset<T, LigneCommandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LigneCommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LigneCommande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LigneCommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LigneCommandeAggregateArgs>(args: Subset<T, LigneCommandeAggregateArgs>): Prisma.PrismaPromise<GetLigneCommandeAggregateType<T>>

    /**
     * Group by LigneCommande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LigneCommandeGroupByArgs} args - Group by arguments.
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
      T extends LigneCommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LigneCommandeGroupByArgs['orderBy'] }
        : { orderBy?: LigneCommandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LigneCommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLigneCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LigneCommande model
   */
  readonly fields: LigneCommandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LigneCommande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LigneCommandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends CommandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandeDefaultArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produit<T extends ProduitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduitDefaultArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LigneCommande model
   */
  interface LigneCommandeFieldRefs {
    readonly idLigneCommande: FieldRef<"LigneCommande", 'String'>
    readonly quantite: FieldRef<"LigneCommande", 'Int'>
    readonly prixUnitaire: FieldRef<"LigneCommande", 'Float'>
    readonly commandeId: FieldRef<"LigneCommande", 'String'>
    readonly produitId: FieldRef<"LigneCommande", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LigneCommande findUnique
   */
  export type LigneCommandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * Filter, which LigneCommande to fetch.
     */
    where: LigneCommandeWhereUniqueInput
  }

  /**
   * LigneCommande findUniqueOrThrow
   */
  export type LigneCommandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * Filter, which LigneCommande to fetch.
     */
    where: LigneCommandeWhereUniqueInput
  }

  /**
   * LigneCommande findFirst
   */
  export type LigneCommandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * Filter, which LigneCommande to fetch.
     */
    where?: LigneCommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LigneCommandes to fetch.
     */
    orderBy?: LigneCommandeOrderByWithRelationInput | LigneCommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LigneCommandes.
     */
    cursor?: LigneCommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LigneCommandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LigneCommandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LigneCommandes.
     */
    distinct?: LigneCommandeScalarFieldEnum | LigneCommandeScalarFieldEnum[]
  }

  /**
   * LigneCommande findFirstOrThrow
   */
  export type LigneCommandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * Filter, which LigneCommande to fetch.
     */
    where?: LigneCommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LigneCommandes to fetch.
     */
    orderBy?: LigneCommandeOrderByWithRelationInput | LigneCommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LigneCommandes.
     */
    cursor?: LigneCommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LigneCommandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LigneCommandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LigneCommandes.
     */
    distinct?: LigneCommandeScalarFieldEnum | LigneCommandeScalarFieldEnum[]
  }

  /**
   * LigneCommande findMany
   */
  export type LigneCommandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * Filter, which LigneCommandes to fetch.
     */
    where?: LigneCommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LigneCommandes to fetch.
     */
    orderBy?: LigneCommandeOrderByWithRelationInput | LigneCommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LigneCommandes.
     */
    cursor?: LigneCommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LigneCommandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LigneCommandes.
     */
    skip?: number
    distinct?: LigneCommandeScalarFieldEnum | LigneCommandeScalarFieldEnum[]
  }

  /**
   * LigneCommande create
   */
  export type LigneCommandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * The data needed to create a LigneCommande.
     */
    data: XOR<LigneCommandeCreateInput, LigneCommandeUncheckedCreateInput>
  }

  /**
   * LigneCommande createMany
   */
  export type LigneCommandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LigneCommandes.
     */
    data: LigneCommandeCreateManyInput | LigneCommandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LigneCommande createManyAndReturn
   */
  export type LigneCommandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * The data used to create many LigneCommandes.
     */
    data: LigneCommandeCreateManyInput | LigneCommandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LigneCommande update
   */
  export type LigneCommandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * The data needed to update a LigneCommande.
     */
    data: XOR<LigneCommandeUpdateInput, LigneCommandeUncheckedUpdateInput>
    /**
     * Choose, which LigneCommande to update.
     */
    where: LigneCommandeWhereUniqueInput
  }

  /**
   * LigneCommande updateMany
   */
  export type LigneCommandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LigneCommandes.
     */
    data: XOR<LigneCommandeUpdateManyMutationInput, LigneCommandeUncheckedUpdateManyInput>
    /**
     * Filter which LigneCommandes to update
     */
    where?: LigneCommandeWhereInput
    /**
     * Limit how many LigneCommandes to update.
     */
    limit?: number
  }

  /**
   * LigneCommande updateManyAndReturn
   */
  export type LigneCommandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * The data used to update LigneCommandes.
     */
    data: XOR<LigneCommandeUpdateManyMutationInput, LigneCommandeUncheckedUpdateManyInput>
    /**
     * Filter which LigneCommandes to update
     */
    where?: LigneCommandeWhereInput
    /**
     * Limit how many LigneCommandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LigneCommande upsert
   */
  export type LigneCommandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * The filter to search for the LigneCommande to update in case it exists.
     */
    where: LigneCommandeWhereUniqueInput
    /**
     * In case the LigneCommande found by the `where` argument doesn't exist, create a new LigneCommande with this data.
     */
    create: XOR<LigneCommandeCreateInput, LigneCommandeUncheckedCreateInput>
    /**
     * In case the LigneCommande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LigneCommandeUpdateInput, LigneCommandeUncheckedUpdateInput>
  }

  /**
   * LigneCommande delete
   */
  export type LigneCommandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
    /**
     * Filter which LigneCommande to delete.
     */
    where: LigneCommandeWhereUniqueInput
  }

  /**
   * LigneCommande deleteMany
   */
  export type LigneCommandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LigneCommandes to delete
     */
    where?: LigneCommandeWhereInput
    /**
     * Limit how many LigneCommandes to delete.
     */
    limit?: number
  }

  /**
   * LigneCommande without action
   */
  export type LigneCommandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LigneCommande
     */
    select?: LigneCommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LigneCommande
     */
    omit?: LigneCommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LigneCommandeInclude<ExtArgs> | null
  }


  /**
   * Model Livraison
   */

  export type AggregateLivraison = {
    _count: LivraisonCountAggregateOutputType | null
    _min: LivraisonMinAggregateOutputType | null
    _max: LivraisonMaxAggregateOutputType | null
  }

  export type LivraisonMinAggregateOutputType = {
    idLivraison: string | null
    dateExpedition: Date | null
    dateLivraisonPrevue: Date | null
    dateLivraisonEffective: Date | null
    statutLivraison: $Enums.StatutLivraison | null
    notesLivreur: string | null
    signatureClient: string | null
    commandeId: string | null
    livreurId: string | null
  }

  export type LivraisonMaxAggregateOutputType = {
    idLivraison: string | null
    dateExpedition: Date | null
    dateLivraisonPrevue: Date | null
    dateLivraisonEffective: Date | null
    statutLivraison: $Enums.StatutLivraison | null
    notesLivreur: string | null
    signatureClient: string | null
    commandeId: string | null
    livreurId: string | null
  }

  export type LivraisonCountAggregateOutputType = {
    idLivraison: number
    dateExpedition: number
    dateLivraisonPrevue: number
    dateLivraisonEffective: number
    statutLivraison: number
    notesLivreur: number
    signatureClient: number
    commandeId: number
    livreurId: number
    _all: number
  }


  export type LivraisonMinAggregateInputType = {
    idLivraison?: true
    dateExpedition?: true
    dateLivraisonPrevue?: true
    dateLivraisonEffective?: true
    statutLivraison?: true
    notesLivreur?: true
    signatureClient?: true
    commandeId?: true
    livreurId?: true
  }

  export type LivraisonMaxAggregateInputType = {
    idLivraison?: true
    dateExpedition?: true
    dateLivraisonPrevue?: true
    dateLivraisonEffective?: true
    statutLivraison?: true
    notesLivreur?: true
    signatureClient?: true
    commandeId?: true
    livreurId?: true
  }

  export type LivraisonCountAggregateInputType = {
    idLivraison?: true
    dateExpedition?: true
    dateLivraisonPrevue?: true
    dateLivraisonEffective?: true
    statutLivraison?: true
    notesLivreur?: true
    signatureClient?: true
    commandeId?: true
    livreurId?: true
    _all?: true
  }

  export type LivraisonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livraison to aggregate.
     */
    where?: LivraisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livraisons to fetch.
     */
    orderBy?: LivraisonOrderByWithRelationInput | LivraisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivraisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livraisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livraisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livraisons
    **/
    _count?: true | LivraisonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivraisonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivraisonMaxAggregateInputType
  }

  export type GetLivraisonAggregateType<T extends LivraisonAggregateArgs> = {
        [P in keyof T & keyof AggregateLivraison]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivraison[P]>
      : GetScalarType<T[P], AggregateLivraison[P]>
  }




  export type LivraisonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivraisonWhereInput
    orderBy?: LivraisonOrderByWithAggregationInput | LivraisonOrderByWithAggregationInput[]
    by: LivraisonScalarFieldEnum[] | LivraisonScalarFieldEnum
    having?: LivraisonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivraisonCountAggregateInputType | true
    _min?: LivraisonMinAggregateInputType
    _max?: LivraisonMaxAggregateInputType
  }

  export type LivraisonGroupByOutputType = {
    idLivraison: string
    dateExpedition: Date
    dateLivraisonPrevue: Date
    dateLivraisonEffective: Date | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur: string | null
    signatureClient: string | null
    commandeId: string
    livreurId: string
    _count: LivraisonCountAggregateOutputType | null
    _min: LivraisonMinAggregateOutputType | null
    _max: LivraisonMaxAggregateOutputType | null
  }

  type GetLivraisonGroupByPayload<T extends LivraisonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivraisonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivraisonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivraisonGroupByOutputType[P]>
            : GetScalarType<T[P], LivraisonGroupByOutputType[P]>
        }
      >
    >


  export type LivraisonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLivraison?: boolean
    dateExpedition?: boolean
    dateLivraisonPrevue?: boolean
    dateLivraisonEffective?: boolean
    statutLivraison?: boolean
    notesLivreur?: boolean
    signatureClient?: boolean
    commandeId?: boolean
    livreurId?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    livreur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livraison"]>

  export type LivraisonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLivraison?: boolean
    dateExpedition?: boolean
    dateLivraisonPrevue?: boolean
    dateLivraisonEffective?: boolean
    statutLivraison?: boolean
    notesLivreur?: boolean
    signatureClient?: boolean
    commandeId?: boolean
    livreurId?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    livreur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livraison"]>

  export type LivraisonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idLivraison?: boolean
    dateExpedition?: boolean
    dateLivraisonPrevue?: boolean
    dateLivraisonEffective?: boolean
    statutLivraison?: boolean
    notesLivreur?: boolean
    signatureClient?: boolean
    commandeId?: boolean
    livreurId?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    livreur?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livraison"]>

  export type LivraisonSelectScalar = {
    idLivraison?: boolean
    dateExpedition?: boolean
    dateLivraisonPrevue?: boolean
    dateLivraisonEffective?: boolean
    statutLivraison?: boolean
    notesLivreur?: boolean
    signatureClient?: boolean
    commandeId?: boolean
    livreurId?: boolean
  }

  export type LivraisonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idLivraison" | "dateExpedition" | "dateLivraisonPrevue" | "dateLivraisonEffective" | "statutLivraison" | "notesLivreur" | "signatureClient" | "commandeId" | "livreurId", ExtArgs["result"]["livraison"]>
  export type LivraisonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    livreur?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LivraisonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    livreur?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LivraisonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    livreur?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LivraisonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livraison"
    objects: {
      commande: Prisma.$CommandePayload<ExtArgs>
      livreur: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idLivraison: string
      dateExpedition: Date
      dateLivraisonPrevue: Date
      dateLivraisonEffective: Date | null
      statutLivraison: $Enums.StatutLivraison
      notesLivreur: string | null
      signatureClient: string | null
      commandeId: string
      livreurId: string
    }, ExtArgs["result"]["livraison"]>
    composites: {}
  }

  type LivraisonGetPayload<S extends boolean | null | undefined | LivraisonDefaultArgs> = $Result.GetResult<Prisma.$LivraisonPayload, S>

  type LivraisonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivraisonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivraisonCountAggregateInputType | true
    }

  export interface LivraisonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livraison'], meta: { name: 'Livraison' } }
    /**
     * Find zero or one Livraison that matches the filter.
     * @param {LivraisonFindUniqueArgs} args - Arguments to find a Livraison
     * @example
     * // Get one Livraison
     * const livraison = await prisma.livraison.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivraisonFindUniqueArgs>(args: SelectSubset<T, LivraisonFindUniqueArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livraison that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivraisonFindUniqueOrThrowArgs} args - Arguments to find a Livraison
     * @example
     * // Get one Livraison
     * const livraison = await prisma.livraison.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivraisonFindUniqueOrThrowArgs>(args: SelectSubset<T, LivraisonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livraison that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivraisonFindFirstArgs} args - Arguments to find a Livraison
     * @example
     * // Get one Livraison
     * const livraison = await prisma.livraison.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivraisonFindFirstArgs>(args?: SelectSubset<T, LivraisonFindFirstArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livraison that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivraisonFindFirstOrThrowArgs} args - Arguments to find a Livraison
     * @example
     * // Get one Livraison
     * const livraison = await prisma.livraison.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivraisonFindFirstOrThrowArgs>(args?: SelectSubset<T, LivraisonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livraisons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivraisonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livraisons
     * const livraisons = await prisma.livraison.findMany()
     * 
     * // Get first 10 Livraisons
     * const livraisons = await prisma.livraison.findMany({ take: 10 })
     * 
     * // Only select the `idLivraison`
     * const livraisonWithIdLivraisonOnly = await prisma.livraison.findMany({ select: { idLivraison: true } })
     * 
     */
    findMany<T extends LivraisonFindManyArgs>(args?: SelectSubset<T, LivraisonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livraison.
     * @param {LivraisonCreateArgs} args - Arguments to create a Livraison.
     * @example
     * // Create one Livraison
     * const Livraison = await prisma.livraison.create({
     *   data: {
     *     // ... data to create a Livraison
     *   }
     * })
     * 
     */
    create<T extends LivraisonCreateArgs>(args: SelectSubset<T, LivraisonCreateArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livraisons.
     * @param {LivraisonCreateManyArgs} args - Arguments to create many Livraisons.
     * @example
     * // Create many Livraisons
     * const livraison = await prisma.livraison.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivraisonCreateManyArgs>(args?: SelectSubset<T, LivraisonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livraisons and returns the data saved in the database.
     * @param {LivraisonCreateManyAndReturnArgs} args - Arguments to create many Livraisons.
     * @example
     * // Create many Livraisons
     * const livraison = await prisma.livraison.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livraisons and only return the `idLivraison`
     * const livraisonWithIdLivraisonOnly = await prisma.livraison.createManyAndReturn({
     *   select: { idLivraison: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivraisonCreateManyAndReturnArgs>(args?: SelectSubset<T, LivraisonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livraison.
     * @param {LivraisonDeleteArgs} args - Arguments to delete one Livraison.
     * @example
     * // Delete one Livraison
     * const Livraison = await prisma.livraison.delete({
     *   where: {
     *     // ... filter to delete one Livraison
     *   }
     * })
     * 
     */
    delete<T extends LivraisonDeleteArgs>(args: SelectSubset<T, LivraisonDeleteArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livraison.
     * @param {LivraisonUpdateArgs} args - Arguments to update one Livraison.
     * @example
     * // Update one Livraison
     * const livraison = await prisma.livraison.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivraisonUpdateArgs>(args: SelectSubset<T, LivraisonUpdateArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livraisons.
     * @param {LivraisonDeleteManyArgs} args - Arguments to filter Livraisons to delete.
     * @example
     * // Delete a few Livraisons
     * const { count } = await prisma.livraison.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivraisonDeleteManyArgs>(args?: SelectSubset<T, LivraisonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livraisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivraisonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livraisons
     * const livraison = await prisma.livraison.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivraisonUpdateManyArgs>(args: SelectSubset<T, LivraisonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livraisons and returns the data updated in the database.
     * @param {LivraisonUpdateManyAndReturnArgs} args - Arguments to update many Livraisons.
     * @example
     * // Update many Livraisons
     * const livraison = await prisma.livraison.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livraisons and only return the `idLivraison`
     * const livraisonWithIdLivraisonOnly = await prisma.livraison.updateManyAndReturn({
     *   select: { idLivraison: true },
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
    updateManyAndReturn<T extends LivraisonUpdateManyAndReturnArgs>(args: SelectSubset<T, LivraisonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livraison.
     * @param {LivraisonUpsertArgs} args - Arguments to update or create a Livraison.
     * @example
     * // Update or create a Livraison
     * const livraison = await prisma.livraison.upsert({
     *   create: {
     *     // ... data to create a Livraison
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livraison we want to update
     *   }
     * })
     */
    upsert<T extends LivraisonUpsertArgs>(args: SelectSubset<T, LivraisonUpsertArgs<ExtArgs>>): Prisma__LivraisonClient<$Result.GetResult<Prisma.$LivraisonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livraisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivraisonCountArgs} args - Arguments to filter Livraisons to count.
     * @example
     * // Count the number of Livraisons
     * const count = await prisma.livraison.count({
     *   where: {
     *     // ... the filter for the Livraisons we want to count
     *   }
     * })
    **/
    count<T extends LivraisonCountArgs>(
      args?: Subset<T, LivraisonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivraisonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livraison.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivraisonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivraisonAggregateArgs>(args: Subset<T, LivraisonAggregateArgs>): Prisma.PrismaPromise<GetLivraisonAggregateType<T>>

    /**
     * Group by Livraison.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivraisonGroupByArgs} args - Group by arguments.
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
      T extends LivraisonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivraisonGroupByArgs['orderBy'] }
        : { orderBy?: LivraisonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LivraisonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivraisonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livraison model
   */
  readonly fields: LivraisonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livraison.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivraisonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends CommandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandeDefaultArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livreur<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Livraison model
   */
  interface LivraisonFieldRefs {
    readonly idLivraison: FieldRef<"Livraison", 'String'>
    readonly dateExpedition: FieldRef<"Livraison", 'DateTime'>
    readonly dateLivraisonPrevue: FieldRef<"Livraison", 'DateTime'>
    readonly dateLivraisonEffective: FieldRef<"Livraison", 'DateTime'>
    readonly statutLivraison: FieldRef<"Livraison", 'StatutLivraison'>
    readonly notesLivreur: FieldRef<"Livraison", 'String'>
    readonly signatureClient: FieldRef<"Livraison", 'String'>
    readonly commandeId: FieldRef<"Livraison", 'String'>
    readonly livreurId: FieldRef<"Livraison", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Livraison findUnique
   */
  export type LivraisonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * Filter, which Livraison to fetch.
     */
    where: LivraisonWhereUniqueInput
  }

  /**
   * Livraison findUniqueOrThrow
   */
  export type LivraisonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * Filter, which Livraison to fetch.
     */
    where: LivraisonWhereUniqueInput
  }

  /**
   * Livraison findFirst
   */
  export type LivraisonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * Filter, which Livraison to fetch.
     */
    where?: LivraisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livraisons to fetch.
     */
    orderBy?: LivraisonOrderByWithRelationInput | LivraisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livraisons.
     */
    cursor?: LivraisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livraisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livraisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livraisons.
     */
    distinct?: LivraisonScalarFieldEnum | LivraisonScalarFieldEnum[]
  }

  /**
   * Livraison findFirstOrThrow
   */
  export type LivraisonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * Filter, which Livraison to fetch.
     */
    where?: LivraisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livraisons to fetch.
     */
    orderBy?: LivraisonOrderByWithRelationInput | LivraisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livraisons.
     */
    cursor?: LivraisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livraisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livraisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livraisons.
     */
    distinct?: LivraisonScalarFieldEnum | LivraisonScalarFieldEnum[]
  }

  /**
   * Livraison findMany
   */
  export type LivraisonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * Filter, which Livraisons to fetch.
     */
    where?: LivraisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livraisons to fetch.
     */
    orderBy?: LivraisonOrderByWithRelationInput | LivraisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livraisons.
     */
    cursor?: LivraisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livraisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livraisons.
     */
    skip?: number
    distinct?: LivraisonScalarFieldEnum | LivraisonScalarFieldEnum[]
  }

  /**
   * Livraison create
   */
  export type LivraisonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * The data needed to create a Livraison.
     */
    data: XOR<LivraisonCreateInput, LivraisonUncheckedCreateInput>
  }

  /**
   * Livraison createMany
   */
  export type LivraisonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livraisons.
     */
    data: LivraisonCreateManyInput | LivraisonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livraison createManyAndReturn
   */
  export type LivraisonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * The data used to create many Livraisons.
     */
    data: LivraisonCreateManyInput | LivraisonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Livraison update
   */
  export type LivraisonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * The data needed to update a Livraison.
     */
    data: XOR<LivraisonUpdateInput, LivraisonUncheckedUpdateInput>
    /**
     * Choose, which Livraison to update.
     */
    where: LivraisonWhereUniqueInput
  }

  /**
   * Livraison updateMany
   */
  export type LivraisonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livraisons.
     */
    data: XOR<LivraisonUpdateManyMutationInput, LivraisonUncheckedUpdateManyInput>
    /**
     * Filter which Livraisons to update
     */
    where?: LivraisonWhereInput
    /**
     * Limit how many Livraisons to update.
     */
    limit?: number
  }

  /**
   * Livraison updateManyAndReturn
   */
  export type LivraisonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * The data used to update Livraisons.
     */
    data: XOR<LivraisonUpdateManyMutationInput, LivraisonUncheckedUpdateManyInput>
    /**
     * Filter which Livraisons to update
     */
    where?: LivraisonWhereInput
    /**
     * Limit how many Livraisons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Livraison upsert
   */
  export type LivraisonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * The filter to search for the Livraison to update in case it exists.
     */
    where: LivraisonWhereUniqueInput
    /**
     * In case the Livraison found by the `where` argument doesn't exist, create a new Livraison with this data.
     */
    create: XOR<LivraisonCreateInput, LivraisonUncheckedCreateInput>
    /**
     * In case the Livraison was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivraisonUpdateInput, LivraisonUncheckedUpdateInput>
  }

  /**
   * Livraison delete
   */
  export type LivraisonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
    /**
     * Filter which Livraison to delete.
     */
    where: LivraisonWhereUniqueInput
  }

  /**
   * Livraison deleteMany
   */
  export type LivraisonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livraisons to delete
     */
    where?: LivraisonWhereInput
    /**
     * Limit how many Livraisons to delete.
     */
    limit?: number
  }

  /**
   * Livraison without action
   */
  export type LivraisonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livraison
     */
    select?: LivraisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livraison
     */
    omit?: LivraisonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivraisonInclude<ExtArgs> | null
  }


  /**
   * Model Rapport
   */

  export type AggregateRapport = {
    _count: RapportCountAggregateOutputType | null
    _min: RapportMinAggregateOutputType | null
    _max: RapportMaxAggregateOutputType | null
  }

  export type RapportMinAggregateOutputType = {
    idRapport: string | null
    typeRapport: string | null
    dateGeneration: Date | null
    periode: string | null
    contenuPDF: string | null
    adminId: string | null
  }

  export type RapportMaxAggregateOutputType = {
    idRapport: string | null
    typeRapport: string | null
    dateGeneration: Date | null
    periode: string | null
    contenuPDF: string | null
    adminId: string | null
  }

  export type RapportCountAggregateOutputType = {
    idRapport: number
    typeRapport: number
    dateGeneration: number
    periode: number
    contenuPDF: number
    adminId: number
    _all: number
  }


  export type RapportMinAggregateInputType = {
    idRapport?: true
    typeRapport?: true
    dateGeneration?: true
    periode?: true
    contenuPDF?: true
    adminId?: true
  }

  export type RapportMaxAggregateInputType = {
    idRapport?: true
    typeRapport?: true
    dateGeneration?: true
    periode?: true
    contenuPDF?: true
    adminId?: true
  }

  export type RapportCountAggregateInputType = {
    idRapport?: true
    typeRapport?: true
    dateGeneration?: true
    periode?: true
    contenuPDF?: true
    adminId?: true
    _all?: true
  }

  export type RapportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rapport to aggregate.
     */
    where?: RapportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rapports to fetch.
     */
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RapportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rapports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rapports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rapports
    **/
    _count?: true | RapportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RapportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RapportMaxAggregateInputType
  }

  export type GetRapportAggregateType<T extends RapportAggregateArgs> = {
        [P in keyof T & keyof AggregateRapport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRapport[P]>
      : GetScalarType<T[P], AggregateRapport[P]>
  }




  export type RapportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RapportWhereInput
    orderBy?: RapportOrderByWithAggregationInput | RapportOrderByWithAggregationInput[]
    by: RapportScalarFieldEnum[] | RapportScalarFieldEnum
    having?: RapportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RapportCountAggregateInputType | true
    _min?: RapportMinAggregateInputType
    _max?: RapportMaxAggregateInputType
  }

  export type RapportGroupByOutputType = {
    idRapport: string
    typeRapport: string
    dateGeneration: Date
    periode: string
    contenuPDF: string
    adminId: string
    _count: RapportCountAggregateOutputType | null
    _min: RapportMinAggregateOutputType | null
    _max: RapportMaxAggregateOutputType | null
  }

  type GetRapportGroupByPayload<T extends RapportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RapportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RapportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RapportGroupByOutputType[P]>
            : GetScalarType<T[P], RapportGroupByOutputType[P]>
        }
      >
    >


  export type RapportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idRapport?: boolean
    typeRapport?: boolean
    dateGeneration?: boolean
    periode?: boolean
    contenuPDF?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rapport"]>

  export type RapportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idRapport?: boolean
    typeRapport?: boolean
    dateGeneration?: boolean
    periode?: boolean
    contenuPDF?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rapport"]>

  export type RapportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idRapport?: boolean
    typeRapport?: boolean
    dateGeneration?: boolean
    periode?: boolean
    contenuPDF?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rapport"]>

  export type RapportSelectScalar = {
    idRapport?: boolean
    typeRapport?: boolean
    dateGeneration?: boolean
    periode?: boolean
    contenuPDF?: boolean
    adminId?: boolean
  }

  export type RapportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idRapport" | "typeRapport" | "dateGeneration" | "periode" | "contenuPDF" | "adminId", ExtArgs["result"]["rapport"]>
  export type RapportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RapportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RapportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RapportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rapport"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idRapport: string
      typeRapport: string
      dateGeneration: Date
      periode: string
      contenuPDF: string
      adminId: string
    }, ExtArgs["result"]["rapport"]>
    composites: {}
  }

  type RapportGetPayload<S extends boolean | null | undefined | RapportDefaultArgs> = $Result.GetResult<Prisma.$RapportPayload, S>

  type RapportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RapportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RapportCountAggregateInputType | true
    }

  export interface RapportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rapport'], meta: { name: 'Rapport' } }
    /**
     * Find zero or one Rapport that matches the filter.
     * @param {RapportFindUniqueArgs} args - Arguments to find a Rapport
     * @example
     * // Get one Rapport
     * const rapport = await prisma.rapport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RapportFindUniqueArgs>(args: SelectSubset<T, RapportFindUniqueArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rapport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RapportFindUniqueOrThrowArgs} args - Arguments to find a Rapport
     * @example
     * // Get one Rapport
     * const rapport = await prisma.rapport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RapportFindUniqueOrThrowArgs>(args: SelectSubset<T, RapportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rapport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportFindFirstArgs} args - Arguments to find a Rapport
     * @example
     * // Get one Rapport
     * const rapport = await prisma.rapport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RapportFindFirstArgs>(args?: SelectSubset<T, RapportFindFirstArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rapport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportFindFirstOrThrowArgs} args - Arguments to find a Rapport
     * @example
     * // Get one Rapport
     * const rapport = await prisma.rapport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RapportFindFirstOrThrowArgs>(args?: SelectSubset<T, RapportFindFirstOrThrowArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rapports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rapports
     * const rapports = await prisma.rapport.findMany()
     * 
     * // Get first 10 Rapports
     * const rapports = await prisma.rapport.findMany({ take: 10 })
     * 
     * // Only select the `idRapport`
     * const rapportWithIdRapportOnly = await prisma.rapport.findMany({ select: { idRapport: true } })
     * 
     */
    findMany<T extends RapportFindManyArgs>(args?: SelectSubset<T, RapportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rapport.
     * @param {RapportCreateArgs} args - Arguments to create a Rapport.
     * @example
     * // Create one Rapport
     * const Rapport = await prisma.rapport.create({
     *   data: {
     *     // ... data to create a Rapport
     *   }
     * })
     * 
     */
    create<T extends RapportCreateArgs>(args: SelectSubset<T, RapportCreateArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rapports.
     * @param {RapportCreateManyArgs} args - Arguments to create many Rapports.
     * @example
     * // Create many Rapports
     * const rapport = await prisma.rapport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RapportCreateManyArgs>(args?: SelectSubset<T, RapportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rapports and returns the data saved in the database.
     * @param {RapportCreateManyAndReturnArgs} args - Arguments to create many Rapports.
     * @example
     * // Create many Rapports
     * const rapport = await prisma.rapport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rapports and only return the `idRapport`
     * const rapportWithIdRapportOnly = await prisma.rapport.createManyAndReturn({
     *   select: { idRapport: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RapportCreateManyAndReturnArgs>(args?: SelectSubset<T, RapportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rapport.
     * @param {RapportDeleteArgs} args - Arguments to delete one Rapport.
     * @example
     * // Delete one Rapport
     * const Rapport = await prisma.rapport.delete({
     *   where: {
     *     // ... filter to delete one Rapport
     *   }
     * })
     * 
     */
    delete<T extends RapportDeleteArgs>(args: SelectSubset<T, RapportDeleteArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rapport.
     * @param {RapportUpdateArgs} args - Arguments to update one Rapport.
     * @example
     * // Update one Rapport
     * const rapport = await prisma.rapport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RapportUpdateArgs>(args: SelectSubset<T, RapportUpdateArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rapports.
     * @param {RapportDeleteManyArgs} args - Arguments to filter Rapports to delete.
     * @example
     * // Delete a few Rapports
     * const { count } = await prisma.rapport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RapportDeleteManyArgs>(args?: SelectSubset<T, RapportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rapports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rapports
     * const rapport = await prisma.rapport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RapportUpdateManyArgs>(args: SelectSubset<T, RapportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rapports and returns the data updated in the database.
     * @param {RapportUpdateManyAndReturnArgs} args - Arguments to update many Rapports.
     * @example
     * // Update many Rapports
     * const rapport = await prisma.rapport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rapports and only return the `idRapport`
     * const rapportWithIdRapportOnly = await prisma.rapport.updateManyAndReturn({
     *   select: { idRapport: true },
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
    updateManyAndReturn<T extends RapportUpdateManyAndReturnArgs>(args: SelectSubset<T, RapportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rapport.
     * @param {RapportUpsertArgs} args - Arguments to update or create a Rapport.
     * @example
     * // Update or create a Rapport
     * const rapport = await prisma.rapport.upsert({
     *   create: {
     *     // ... data to create a Rapport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rapport we want to update
     *   }
     * })
     */
    upsert<T extends RapportUpsertArgs>(args: SelectSubset<T, RapportUpsertArgs<ExtArgs>>): Prisma__RapportClient<$Result.GetResult<Prisma.$RapportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rapports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportCountArgs} args - Arguments to filter Rapports to count.
     * @example
     * // Count the number of Rapports
     * const count = await prisma.rapport.count({
     *   where: {
     *     // ... the filter for the Rapports we want to count
     *   }
     * })
    **/
    count<T extends RapportCountArgs>(
      args?: Subset<T, RapportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RapportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rapport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RapportAggregateArgs>(args: Subset<T, RapportAggregateArgs>): Prisma.PrismaPromise<GetRapportAggregateType<T>>

    /**
     * Group by Rapport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportGroupByArgs} args - Group by arguments.
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
      T extends RapportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RapportGroupByArgs['orderBy'] }
        : { orderBy?: RapportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RapportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRapportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rapport model
   */
  readonly fields: RapportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rapport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RapportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rapport model
   */
  interface RapportFieldRefs {
    readonly idRapport: FieldRef<"Rapport", 'String'>
    readonly typeRapport: FieldRef<"Rapport", 'String'>
    readonly dateGeneration: FieldRef<"Rapport", 'DateTime'>
    readonly periode: FieldRef<"Rapport", 'String'>
    readonly contenuPDF: FieldRef<"Rapport", 'String'>
    readonly adminId: FieldRef<"Rapport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rapport findUnique
   */
  export type RapportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * Filter, which Rapport to fetch.
     */
    where: RapportWhereUniqueInput
  }

  /**
   * Rapport findUniqueOrThrow
   */
  export type RapportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * Filter, which Rapport to fetch.
     */
    where: RapportWhereUniqueInput
  }

  /**
   * Rapport findFirst
   */
  export type RapportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * Filter, which Rapport to fetch.
     */
    where?: RapportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rapports to fetch.
     */
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rapports.
     */
    cursor?: RapportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rapports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rapports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rapports.
     */
    distinct?: RapportScalarFieldEnum | RapportScalarFieldEnum[]
  }

  /**
   * Rapport findFirstOrThrow
   */
  export type RapportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * Filter, which Rapport to fetch.
     */
    where?: RapportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rapports to fetch.
     */
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rapports.
     */
    cursor?: RapportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rapports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rapports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rapports.
     */
    distinct?: RapportScalarFieldEnum | RapportScalarFieldEnum[]
  }

  /**
   * Rapport findMany
   */
  export type RapportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * Filter, which Rapports to fetch.
     */
    where?: RapportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rapports to fetch.
     */
    orderBy?: RapportOrderByWithRelationInput | RapportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rapports.
     */
    cursor?: RapportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rapports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rapports.
     */
    skip?: number
    distinct?: RapportScalarFieldEnum | RapportScalarFieldEnum[]
  }

  /**
   * Rapport create
   */
  export type RapportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * The data needed to create a Rapport.
     */
    data: XOR<RapportCreateInput, RapportUncheckedCreateInput>
  }

  /**
   * Rapport createMany
   */
  export type RapportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rapports.
     */
    data: RapportCreateManyInput | RapportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rapport createManyAndReturn
   */
  export type RapportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * The data used to create many Rapports.
     */
    data: RapportCreateManyInput | RapportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rapport update
   */
  export type RapportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * The data needed to update a Rapport.
     */
    data: XOR<RapportUpdateInput, RapportUncheckedUpdateInput>
    /**
     * Choose, which Rapport to update.
     */
    where: RapportWhereUniqueInput
  }

  /**
   * Rapport updateMany
   */
  export type RapportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rapports.
     */
    data: XOR<RapportUpdateManyMutationInput, RapportUncheckedUpdateManyInput>
    /**
     * Filter which Rapports to update
     */
    where?: RapportWhereInput
    /**
     * Limit how many Rapports to update.
     */
    limit?: number
  }

  /**
   * Rapport updateManyAndReturn
   */
  export type RapportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * The data used to update Rapports.
     */
    data: XOR<RapportUpdateManyMutationInput, RapportUncheckedUpdateManyInput>
    /**
     * Filter which Rapports to update
     */
    where?: RapportWhereInput
    /**
     * Limit how many Rapports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rapport upsert
   */
  export type RapportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * The filter to search for the Rapport to update in case it exists.
     */
    where: RapportWhereUniqueInput
    /**
     * In case the Rapport found by the `where` argument doesn't exist, create a new Rapport with this data.
     */
    create: XOR<RapportCreateInput, RapportUncheckedCreateInput>
    /**
     * In case the Rapport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RapportUpdateInput, RapportUncheckedUpdateInput>
  }

  /**
   * Rapport delete
   */
  export type RapportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
    /**
     * Filter which Rapport to delete.
     */
    where: RapportWhereUniqueInput
  }

  /**
   * Rapport deleteMany
   */
  export type RapportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rapports to delete
     */
    where?: RapportWhereInput
    /**
     * Limit how many Rapports to delete.
     */
    limit?: number
  }

  /**
   * Rapport without action
   */
  export type RapportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rapport
     */
    select?: RapportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rapport
     */
    omit?: RapportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RapportInclude<ExtArgs> | null
  }


  /**
   * Model AlerteStock
   */

  export type AggregateAlerteStock = {
    _count: AlerteStockCountAggregateOutputType | null
    _avg: AlerteStockAvgAggregateOutputType | null
    _sum: AlerteStockSumAggregateOutputType | null
    _min: AlerteStockMinAggregateOutputType | null
    _max: AlerteStockMaxAggregateOutputType | null
  }

  export type AlerteStockAvgAggregateOutputType = {
    seuilMinimum: number | null
  }

  export type AlerteStockSumAggregateOutputType = {
    seuilMinimum: number | null
  }

  export type AlerteStockMinAggregateOutputType = {
    idAlerte: string | null
    seuilMinimum: number | null
    dateAlerte: Date | null
    statutAlerte: $Enums.StatutAlerte | null
    produitId: string | null
    adminId: string | null
  }

  export type AlerteStockMaxAggregateOutputType = {
    idAlerte: string | null
    seuilMinimum: number | null
    dateAlerte: Date | null
    statutAlerte: $Enums.StatutAlerte | null
    produitId: string | null
    adminId: string | null
  }

  export type AlerteStockCountAggregateOutputType = {
    idAlerte: number
    seuilMinimum: number
    dateAlerte: number
    statutAlerte: number
    produitId: number
    adminId: number
    _all: number
  }


  export type AlerteStockAvgAggregateInputType = {
    seuilMinimum?: true
  }

  export type AlerteStockSumAggregateInputType = {
    seuilMinimum?: true
  }

  export type AlerteStockMinAggregateInputType = {
    idAlerte?: true
    seuilMinimum?: true
    dateAlerte?: true
    statutAlerte?: true
    produitId?: true
    adminId?: true
  }

  export type AlerteStockMaxAggregateInputType = {
    idAlerte?: true
    seuilMinimum?: true
    dateAlerte?: true
    statutAlerte?: true
    produitId?: true
    adminId?: true
  }

  export type AlerteStockCountAggregateInputType = {
    idAlerte?: true
    seuilMinimum?: true
    dateAlerte?: true
    statutAlerte?: true
    produitId?: true
    adminId?: true
    _all?: true
  }

  export type AlerteStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlerteStock to aggregate.
     */
    where?: AlerteStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlerteStocks to fetch.
     */
    orderBy?: AlerteStockOrderByWithRelationInput | AlerteStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlerteStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlerteStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlerteStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlerteStocks
    **/
    _count?: true | AlerteStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlerteStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlerteStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlerteStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlerteStockMaxAggregateInputType
  }

  export type GetAlerteStockAggregateType<T extends AlerteStockAggregateArgs> = {
        [P in keyof T & keyof AggregateAlerteStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlerteStock[P]>
      : GetScalarType<T[P], AggregateAlerteStock[P]>
  }




  export type AlerteStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlerteStockWhereInput
    orderBy?: AlerteStockOrderByWithAggregationInput | AlerteStockOrderByWithAggregationInput[]
    by: AlerteStockScalarFieldEnum[] | AlerteStockScalarFieldEnum
    having?: AlerteStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlerteStockCountAggregateInputType | true
    _avg?: AlerteStockAvgAggregateInputType
    _sum?: AlerteStockSumAggregateInputType
    _min?: AlerteStockMinAggregateInputType
    _max?: AlerteStockMaxAggregateInputType
  }

  export type AlerteStockGroupByOutputType = {
    idAlerte: string
    seuilMinimum: number
    dateAlerte: Date
    statutAlerte: $Enums.StatutAlerte
    produitId: string
    adminId: string
    _count: AlerteStockCountAggregateOutputType | null
    _avg: AlerteStockAvgAggregateOutputType | null
    _sum: AlerteStockSumAggregateOutputType | null
    _min: AlerteStockMinAggregateOutputType | null
    _max: AlerteStockMaxAggregateOutputType | null
  }

  type GetAlerteStockGroupByPayload<T extends AlerteStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlerteStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlerteStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlerteStockGroupByOutputType[P]>
            : GetScalarType<T[P], AlerteStockGroupByOutputType[P]>
        }
      >
    >


  export type AlerteStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAlerte?: boolean
    seuilMinimum?: boolean
    dateAlerte?: boolean
    statutAlerte?: boolean
    produitId?: boolean
    adminId?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerteStock"]>

  export type AlerteStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAlerte?: boolean
    seuilMinimum?: boolean
    dateAlerte?: boolean
    statutAlerte?: boolean
    produitId?: boolean
    adminId?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerteStock"]>

  export type AlerteStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idAlerte?: boolean
    seuilMinimum?: boolean
    dateAlerte?: boolean
    statutAlerte?: boolean
    produitId?: boolean
    adminId?: boolean
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerteStock"]>

  export type AlerteStockSelectScalar = {
    idAlerte?: boolean
    seuilMinimum?: boolean
    dateAlerte?: boolean
    statutAlerte?: boolean
    produitId?: boolean
    adminId?: boolean
  }

  export type AlerteStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idAlerte" | "seuilMinimum" | "dateAlerte" | "statutAlerte" | "produitId" | "adminId", ExtArgs["result"]["alerteStock"]>
  export type AlerteStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlerteStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlerteStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlerteStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlerteStock"
    objects: {
      produit: Prisma.$ProduitPayload<ExtArgs>
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idAlerte: string
      seuilMinimum: number
      dateAlerte: Date
      statutAlerte: $Enums.StatutAlerte
      produitId: string
      adminId: string
    }, ExtArgs["result"]["alerteStock"]>
    composites: {}
  }

  type AlerteStockGetPayload<S extends boolean | null | undefined | AlerteStockDefaultArgs> = $Result.GetResult<Prisma.$AlerteStockPayload, S>

  type AlerteStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlerteStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlerteStockCountAggregateInputType | true
    }

  export interface AlerteStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlerteStock'], meta: { name: 'AlerteStock' } }
    /**
     * Find zero or one AlerteStock that matches the filter.
     * @param {AlerteStockFindUniqueArgs} args - Arguments to find a AlerteStock
     * @example
     * // Get one AlerteStock
     * const alerteStock = await prisma.alerteStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlerteStockFindUniqueArgs>(args: SelectSubset<T, AlerteStockFindUniqueArgs<ExtArgs>>): Prisma__AlerteStockClient<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlerteStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlerteStockFindUniqueOrThrowArgs} args - Arguments to find a AlerteStock
     * @example
     * // Get one AlerteStock
     * const alerteStock = await prisma.alerteStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlerteStockFindUniqueOrThrowArgs>(args: SelectSubset<T, AlerteStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlerteStockClient<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlerteStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteStockFindFirstArgs} args - Arguments to find a AlerteStock
     * @example
     * // Get one AlerteStock
     * const alerteStock = await prisma.alerteStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlerteStockFindFirstArgs>(args?: SelectSubset<T, AlerteStockFindFirstArgs<ExtArgs>>): Prisma__AlerteStockClient<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlerteStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteStockFindFirstOrThrowArgs} args - Arguments to find a AlerteStock
     * @example
     * // Get one AlerteStock
     * const alerteStock = await prisma.alerteStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlerteStockFindFirstOrThrowArgs>(args?: SelectSubset<T, AlerteStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlerteStockClient<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlerteStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlerteStocks
     * const alerteStocks = await prisma.alerteStock.findMany()
     * 
     * // Get first 10 AlerteStocks
     * const alerteStocks = await prisma.alerteStock.findMany({ take: 10 })
     * 
     * // Only select the `idAlerte`
     * const alerteStockWithIdAlerteOnly = await prisma.alerteStock.findMany({ select: { idAlerte: true } })
     * 
     */
    findMany<T extends AlerteStockFindManyArgs>(args?: SelectSubset<T, AlerteStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlerteStock.
     * @param {AlerteStockCreateArgs} args - Arguments to create a AlerteStock.
     * @example
     * // Create one AlerteStock
     * const AlerteStock = await prisma.alerteStock.create({
     *   data: {
     *     // ... data to create a AlerteStock
     *   }
     * })
     * 
     */
    create<T extends AlerteStockCreateArgs>(args: SelectSubset<T, AlerteStockCreateArgs<ExtArgs>>): Prisma__AlerteStockClient<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlerteStocks.
     * @param {AlerteStockCreateManyArgs} args - Arguments to create many AlerteStocks.
     * @example
     * // Create many AlerteStocks
     * const alerteStock = await prisma.alerteStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlerteStockCreateManyArgs>(args?: SelectSubset<T, AlerteStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlerteStocks and returns the data saved in the database.
     * @param {AlerteStockCreateManyAndReturnArgs} args - Arguments to create many AlerteStocks.
     * @example
     * // Create many AlerteStocks
     * const alerteStock = await prisma.alerteStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlerteStocks and only return the `idAlerte`
     * const alerteStockWithIdAlerteOnly = await prisma.alerteStock.createManyAndReturn({
     *   select: { idAlerte: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlerteStockCreateManyAndReturnArgs>(args?: SelectSubset<T, AlerteStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlerteStock.
     * @param {AlerteStockDeleteArgs} args - Arguments to delete one AlerteStock.
     * @example
     * // Delete one AlerteStock
     * const AlerteStock = await prisma.alerteStock.delete({
     *   where: {
     *     // ... filter to delete one AlerteStock
     *   }
     * })
     * 
     */
    delete<T extends AlerteStockDeleteArgs>(args: SelectSubset<T, AlerteStockDeleteArgs<ExtArgs>>): Prisma__AlerteStockClient<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlerteStock.
     * @param {AlerteStockUpdateArgs} args - Arguments to update one AlerteStock.
     * @example
     * // Update one AlerteStock
     * const alerteStock = await prisma.alerteStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlerteStockUpdateArgs>(args: SelectSubset<T, AlerteStockUpdateArgs<ExtArgs>>): Prisma__AlerteStockClient<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlerteStocks.
     * @param {AlerteStockDeleteManyArgs} args - Arguments to filter AlerteStocks to delete.
     * @example
     * // Delete a few AlerteStocks
     * const { count } = await prisma.alerteStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlerteStockDeleteManyArgs>(args?: SelectSubset<T, AlerteStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlerteStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlerteStocks
     * const alerteStock = await prisma.alerteStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlerteStockUpdateManyArgs>(args: SelectSubset<T, AlerteStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlerteStocks and returns the data updated in the database.
     * @param {AlerteStockUpdateManyAndReturnArgs} args - Arguments to update many AlerteStocks.
     * @example
     * // Update many AlerteStocks
     * const alerteStock = await prisma.alerteStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlerteStocks and only return the `idAlerte`
     * const alerteStockWithIdAlerteOnly = await prisma.alerteStock.updateManyAndReturn({
     *   select: { idAlerte: true },
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
    updateManyAndReturn<T extends AlerteStockUpdateManyAndReturnArgs>(args: SelectSubset<T, AlerteStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlerteStock.
     * @param {AlerteStockUpsertArgs} args - Arguments to update or create a AlerteStock.
     * @example
     * // Update or create a AlerteStock
     * const alerteStock = await prisma.alerteStock.upsert({
     *   create: {
     *     // ... data to create a AlerteStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlerteStock we want to update
     *   }
     * })
     */
    upsert<T extends AlerteStockUpsertArgs>(args: SelectSubset<T, AlerteStockUpsertArgs<ExtArgs>>): Prisma__AlerteStockClient<$Result.GetResult<Prisma.$AlerteStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlerteStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteStockCountArgs} args - Arguments to filter AlerteStocks to count.
     * @example
     * // Count the number of AlerteStocks
     * const count = await prisma.alerteStock.count({
     *   where: {
     *     // ... the filter for the AlerteStocks we want to count
     *   }
     * })
    **/
    count<T extends AlerteStockCountArgs>(
      args?: Subset<T, AlerteStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlerteStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlerteStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlerteStockAggregateArgs>(args: Subset<T, AlerteStockAggregateArgs>): Prisma.PrismaPromise<GetAlerteStockAggregateType<T>>

    /**
     * Group by AlerteStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlerteStockGroupByArgs} args - Group by arguments.
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
      T extends AlerteStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlerteStockGroupByArgs['orderBy'] }
        : { orderBy?: AlerteStockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlerteStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlerteStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlerteStock model
   */
  readonly fields: AlerteStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlerteStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlerteStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produit<T extends ProduitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduitDefaultArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AlerteStock model
   */
  interface AlerteStockFieldRefs {
    readonly idAlerte: FieldRef<"AlerteStock", 'String'>
    readonly seuilMinimum: FieldRef<"AlerteStock", 'Int'>
    readonly dateAlerte: FieldRef<"AlerteStock", 'DateTime'>
    readonly statutAlerte: FieldRef<"AlerteStock", 'StatutAlerte'>
    readonly produitId: FieldRef<"AlerteStock", 'String'>
    readonly adminId: FieldRef<"AlerteStock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AlerteStock findUnique
   */
  export type AlerteStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * Filter, which AlerteStock to fetch.
     */
    where: AlerteStockWhereUniqueInput
  }

  /**
   * AlerteStock findUniqueOrThrow
   */
  export type AlerteStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * Filter, which AlerteStock to fetch.
     */
    where: AlerteStockWhereUniqueInput
  }

  /**
   * AlerteStock findFirst
   */
  export type AlerteStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * Filter, which AlerteStock to fetch.
     */
    where?: AlerteStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlerteStocks to fetch.
     */
    orderBy?: AlerteStockOrderByWithRelationInput | AlerteStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlerteStocks.
     */
    cursor?: AlerteStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlerteStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlerteStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlerteStocks.
     */
    distinct?: AlerteStockScalarFieldEnum | AlerteStockScalarFieldEnum[]
  }

  /**
   * AlerteStock findFirstOrThrow
   */
  export type AlerteStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * Filter, which AlerteStock to fetch.
     */
    where?: AlerteStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlerteStocks to fetch.
     */
    orderBy?: AlerteStockOrderByWithRelationInput | AlerteStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlerteStocks.
     */
    cursor?: AlerteStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlerteStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlerteStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlerteStocks.
     */
    distinct?: AlerteStockScalarFieldEnum | AlerteStockScalarFieldEnum[]
  }

  /**
   * AlerteStock findMany
   */
  export type AlerteStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * Filter, which AlerteStocks to fetch.
     */
    where?: AlerteStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlerteStocks to fetch.
     */
    orderBy?: AlerteStockOrderByWithRelationInput | AlerteStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlerteStocks.
     */
    cursor?: AlerteStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlerteStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlerteStocks.
     */
    skip?: number
    distinct?: AlerteStockScalarFieldEnum | AlerteStockScalarFieldEnum[]
  }

  /**
   * AlerteStock create
   */
  export type AlerteStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * The data needed to create a AlerteStock.
     */
    data: XOR<AlerteStockCreateInput, AlerteStockUncheckedCreateInput>
  }

  /**
   * AlerteStock createMany
   */
  export type AlerteStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlerteStocks.
     */
    data: AlerteStockCreateManyInput | AlerteStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlerteStock createManyAndReturn
   */
  export type AlerteStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * The data used to create many AlerteStocks.
     */
    data: AlerteStockCreateManyInput | AlerteStockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlerteStock update
   */
  export type AlerteStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * The data needed to update a AlerteStock.
     */
    data: XOR<AlerteStockUpdateInput, AlerteStockUncheckedUpdateInput>
    /**
     * Choose, which AlerteStock to update.
     */
    where: AlerteStockWhereUniqueInput
  }

  /**
   * AlerteStock updateMany
   */
  export type AlerteStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlerteStocks.
     */
    data: XOR<AlerteStockUpdateManyMutationInput, AlerteStockUncheckedUpdateManyInput>
    /**
     * Filter which AlerteStocks to update
     */
    where?: AlerteStockWhereInput
    /**
     * Limit how many AlerteStocks to update.
     */
    limit?: number
  }

  /**
   * AlerteStock updateManyAndReturn
   */
  export type AlerteStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * The data used to update AlerteStocks.
     */
    data: XOR<AlerteStockUpdateManyMutationInput, AlerteStockUncheckedUpdateManyInput>
    /**
     * Filter which AlerteStocks to update
     */
    where?: AlerteStockWhereInput
    /**
     * Limit how many AlerteStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlerteStock upsert
   */
  export type AlerteStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * The filter to search for the AlerteStock to update in case it exists.
     */
    where: AlerteStockWhereUniqueInput
    /**
     * In case the AlerteStock found by the `where` argument doesn't exist, create a new AlerteStock with this data.
     */
    create: XOR<AlerteStockCreateInput, AlerteStockUncheckedCreateInput>
    /**
     * In case the AlerteStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlerteStockUpdateInput, AlerteStockUncheckedUpdateInput>
  }

  /**
   * AlerteStock delete
   */
  export type AlerteStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
    /**
     * Filter which AlerteStock to delete.
     */
    where: AlerteStockWhereUniqueInput
  }

  /**
   * AlerteStock deleteMany
   */
  export type AlerteStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlerteStocks to delete
     */
    where?: AlerteStockWhereInput
    /**
     * Limit how many AlerteStocks to delete.
     */
    limit?: number
  }

  /**
   * AlerteStock without action
   */
  export type AlerteStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlerteStock
     */
    select?: AlerteStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlerteStock
     */
    omit?: AlerteStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlerteStockInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    mdp: 'mdp',
    adresse: 'adresse',
    statut: 'statut',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProduitScalarFieldEnum: {
    idProduit: 'idProduit',
    nom: 'nom',
    description: 'description',
    prix: 'prix',
    quantiteStock: 'quantiteStock',
    typeProduit: 'typeProduit',
    imageURL: 'imageURL',
    dateAjout: 'dateAjout',
    statutProduit: 'statutProduit',
    categorieId: 'categorieId',
    fournisseurId: 'fournisseurId'
  };

  export type ProduitScalarFieldEnum = (typeof ProduitScalarFieldEnum)[keyof typeof ProduitScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    idCategorie: 'idCategorie',
    nomCategorie: 'nomCategorie',
    descriptionCategorie: 'descriptionCategorie',
    typeCategorie: 'typeCategorie',
    imageCategorie: 'imageCategorie'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const CommandeScalarFieldEnum: {
    idCommande: 'idCommande',
    numeroCommande: 'numeroCommande',
    dateCommande: 'dateCommande',
    statutCommande: 'statutCommande',
    totalCommande: 'totalCommande',
    taxesAppliquees: 'taxesAppliquees',
    adresseLivraison: 'adresseLivraison',
    modePaiement: 'modePaiement',
    datePaiement: 'datePaiement',
    clientId: 'clientId'
  };

  export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum]


  export const LigneCommandeScalarFieldEnum: {
    idLigneCommande: 'idLigneCommande',
    quantite: 'quantite',
    prixUnitaire: 'prixUnitaire',
    commandeId: 'commandeId',
    produitId: 'produitId'
  };

  export type LigneCommandeScalarFieldEnum = (typeof LigneCommandeScalarFieldEnum)[keyof typeof LigneCommandeScalarFieldEnum]


  export const LivraisonScalarFieldEnum: {
    idLivraison: 'idLivraison',
    dateExpedition: 'dateExpedition',
    dateLivraisonPrevue: 'dateLivraisonPrevue',
    dateLivraisonEffective: 'dateLivraisonEffective',
    statutLivraison: 'statutLivraison',
    notesLivreur: 'notesLivreur',
    signatureClient: 'signatureClient',
    commandeId: 'commandeId',
    livreurId: 'livreurId'
  };

  export type LivraisonScalarFieldEnum = (typeof LivraisonScalarFieldEnum)[keyof typeof LivraisonScalarFieldEnum]


  export const RapportScalarFieldEnum: {
    idRapport: 'idRapport',
    typeRapport: 'typeRapport',
    dateGeneration: 'dateGeneration',
    periode: 'periode',
    contenuPDF: 'contenuPDF',
    adminId: 'adminId'
  };

  export type RapportScalarFieldEnum = (typeof RapportScalarFieldEnum)[keyof typeof RapportScalarFieldEnum]


  export const AlerteStockScalarFieldEnum: {
    idAlerte: 'idAlerte',
    seuilMinimum: 'seuilMinimum',
    dateAlerte: 'dateAlerte',
    statutAlerte: 'statutAlerte',
    produitId: 'produitId',
    adminId: 'adminId'
  };

  export type AlerteStockScalarFieldEnum = (typeof AlerteStockScalarFieldEnum)[keyof typeof AlerteStockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Statut'
   */
  export type EnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut'>
    


  /**
   * Reference to a field of type 'Statut[]'
   */
  export type ListEnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatutProduit'
   */
  export type EnumStatutProduitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutProduit'>
    


  /**
   * Reference to a field of type 'StatutProduit[]'
   */
  export type ListEnumStatutProduitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutProduit[]'>
    


  /**
   * Reference to a field of type 'StatutCommande'
   */
  export type EnumStatutCommandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutCommande'>
    


  /**
   * Reference to a field of type 'StatutCommande[]'
   */
  export type ListEnumStatutCommandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutCommande[]'>
    


  /**
   * Reference to a field of type 'StatutLivraison'
   */
  export type EnumStatutLivraisonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutLivraison'>
    


  /**
   * Reference to a field of type 'StatutLivraison[]'
   */
  export type ListEnumStatutLivraisonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutLivraison[]'>
    


  /**
   * Reference to a field of type 'StatutAlerte'
   */
  export type EnumStatutAlerteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAlerte'>
    


  /**
   * Reference to a field of type 'StatutAlerte[]'
   */
  export type ListEnumStatutAlerteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutAlerte[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    mdp?: StringFilter<"User"> | string
    adresse?: StringNullableFilter<"User"> | string | null
    statut?: EnumStatutFilter<"User"> | $Enums.Statut
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    produits?: ProduitListRelationFilter
    commandes?: CommandeListRelationFilter
    livraisons?: LivraisonListRelationFilter
    rapports?: RapportListRelationFilter
    alertesGerees?: AlerteStockListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    adresse?: SortOrderInput | SortOrder
    statut?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    produits?: ProduitOrderByRelationAggregateInput
    commandes?: CommandeOrderByRelationAggregateInput
    livraisons?: LivraisonOrderByRelationAggregateInput
    rapports?: RapportOrderByRelationAggregateInput
    alertesGerees?: AlerteStockOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    mdp?: StringFilter<"User"> | string
    adresse?: StringNullableFilter<"User"> | string | null
    statut?: EnumStatutFilter<"User"> | $Enums.Statut
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    produits?: ProduitListRelationFilter
    commandes?: CommandeListRelationFilter
    livraisons?: LivraisonListRelationFilter
    rapports?: RapportListRelationFilter
    alertesGerees?: AlerteStockListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    adresse?: SortOrderInput | SortOrder
    statut?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nom?: StringWithAggregatesFilter<"User"> | string
    prenom?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    mdp?: StringWithAggregatesFilter<"User"> | string
    adresse?: StringNullableWithAggregatesFilter<"User"> | string | null
    statut?: EnumStatutWithAggregatesFilter<"User"> | $Enums.Statut
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProduitWhereInput = {
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    idProduit?: StringFilter<"Produit"> | string
    nom?: StringFilter<"Produit"> | string
    description?: StringFilter<"Produit"> | string
    prix?: FloatFilter<"Produit"> | number
    quantiteStock?: IntFilter<"Produit"> | number
    typeProduit?: StringFilter<"Produit"> | string
    imageURL?: StringFilter<"Produit"> | string
    dateAjout?: DateTimeFilter<"Produit"> | Date | string
    statutProduit?: EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit
    categorieId?: StringFilter<"Produit"> | string
    fournisseurId?: StringFilter<"Produit"> | string
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    fournisseur?: XOR<UserScalarRelationFilter, UserWhereInput>
    lignesCommande?: LigneCommandeListRelationFilter
    alertesStock?: AlerteStockListRelationFilter
  }

  export type ProduitOrderByWithRelationInput = {
    idProduit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    quantiteStock?: SortOrder
    typeProduit?: SortOrder
    imageURL?: SortOrder
    dateAjout?: SortOrder
    statutProduit?: SortOrder
    categorieId?: SortOrder
    fournisseurId?: SortOrder
    categorie?: CategorieOrderByWithRelationInput
    fournisseur?: UserOrderByWithRelationInput
    lignesCommande?: LigneCommandeOrderByRelationAggregateInput
    alertesStock?: AlerteStockOrderByRelationAggregateInput
  }

  export type ProduitWhereUniqueInput = Prisma.AtLeast<{
    idProduit?: string
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    nom?: StringFilter<"Produit"> | string
    description?: StringFilter<"Produit"> | string
    prix?: FloatFilter<"Produit"> | number
    quantiteStock?: IntFilter<"Produit"> | number
    typeProduit?: StringFilter<"Produit"> | string
    imageURL?: StringFilter<"Produit"> | string
    dateAjout?: DateTimeFilter<"Produit"> | Date | string
    statutProduit?: EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit
    categorieId?: StringFilter<"Produit"> | string
    fournisseurId?: StringFilter<"Produit"> | string
    categorie?: XOR<CategorieScalarRelationFilter, CategorieWhereInput>
    fournisseur?: XOR<UserScalarRelationFilter, UserWhereInput>
    lignesCommande?: LigneCommandeListRelationFilter
    alertesStock?: AlerteStockListRelationFilter
  }, "idProduit">

  export type ProduitOrderByWithAggregationInput = {
    idProduit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    quantiteStock?: SortOrder
    typeProduit?: SortOrder
    imageURL?: SortOrder
    dateAjout?: SortOrder
    statutProduit?: SortOrder
    categorieId?: SortOrder
    fournisseurId?: SortOrder
    _count?: ProduitCountOrderByAggregateInput
    _avg?: ProduitAvgOrderByAggregateInput
    _max?: ProduitMaxOrderByAggregateInput
    _min?: ProduitMinOrderByAggregateInput
    _sum?: ProduitSumOrderByAggregateInput
  }

  export type ProduitScalarWhereWithAggregatesInput = {
    AND?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    OR?: ProduitScalarWhereWithAggregatesInput[]
    NOT?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    idProduit?: StringWithAggregatesFilter<"Produit"> | string
    nom?: StringWithAggregatesFilter<"Produit"> | string
    description?: StringWithAggregatesFilter<"Produit"> | string
    prix?: FloatWithAggregatesFilter<"Produit"> | number
    quantiteStock?: IntWithAggregatesFilter<"Produit"> | number
    typeProduit?: StringWithAggregatesFilter<"Produit"> | string
    imageURL?: StringWithAggregatesFilter<"Produit"> | string
    dateAjout?: DateTimeWithAggregatesFilter<"Produit"> | Date | string
    statutProduit?: EnumStatutProduitWithAggregatesFilter<"Produit"> | $Enums.StatutProduit
    categorieId?: StringWithAggregatesFilter<"Produit"> | string
    fournisseurId?: StringWithAggregatesFilter<"Produit"> | string
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    idCategorie?: StringFilter<"Categorie"> | string
    nomCategorie?: StringFilter<"Categorie"> | string
    descriptionCategorie?: StringFilter<"Categorie"> | string
    typeCategorie?: StringFilter<"Categorie"> | string
    imageCategorie?: StringFilter<"Categorie"> | string
    produits?: ProduitListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    idCategorie?: SortOrder
    nomCategorie?: SortOrder
    descriptionCategorie?: SortOrder
    typeCategorie?: SortOrder
    imageCategorie?: SortOrder
    produits?: ProduitOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    idCategorie?: string
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    nomCategorie?: StringFilter<"Categorie"> | string
    descriptionCategorie?: StringFilter<"Categorie"> | string
    typeCategorie?: StringFilter<"Categorie"> | string
    imageCategorie?: StringFilter<"Categorie"> | string
    produits?: ProduitListRelationFilter
  }, "idCategorie">

  export type CategorieOrderByWithAggregationInput = {
    idCategorie?: SortOrder
    nomCategorie?: SortOrder
    descriptionCategorie?: SortOrder
    typeCategorie?: SortOrder
    imageCategorie?: SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    idCategorie?: StringWithAggregatesFilter<"Categorie"> | string
    nomCategorie?: StringWithAggregatesFilter<"Categorie"> | string
    descriptionCategorie?: StringWithAggregatesFilter<"Categorie"> | string
    typeCategorie?: StringWithAggregatesFilter<"Categorie"> | string
    imageCategorie?: StringWithAggregatesFilter<"Categorie"> | string
  }

  export type CommandeWhereInput = {
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    idCommande?: StringFilter<"Commande"> | string
    numeroCommande?: StringFilter<"Commande"> | string
    dateCommande?: DateTimeFilter<"Commande"> | Date | string
    statutCommande?: EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande
    totalCommande?: FloatFilter<"Commande"> | number
    taxesAppliquees?: FloatFilter<"Commande"> | number
    adresseLivraison?: StringFilter<"Commande"> | string
    modePaiement?: StringFilter<"Commande"> | string
    datePaiement?: DateTimeNullableFilter<"Commande"> | Date | string | null
    clientId?: StringFilter<"Commande"> | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    lignesCommande?: LigneCommandeListRelationFilter
    livraison?: XOR<LivraisonNullableScalarRelationFilter, LivraisonWhereInput> | null
  }

  export type CommandeOrderByWithRelationInput = {
    idCommande?: SortOrder
    numeroCommande?: SortOrder
    dateCommande?: SortOrder
    statutCommande?: SortOrder
    totalCommande?: SortOrder
    taxesAppliquees?: SortOrder
    adresseLivraison?: SortOrder
    modePaiement?: SortOrder
    datePaiement?: SortOrderInput | SortOrder
    clientId?: SortOrder
    client?: UserOrderByWithRelationInput
    lignesCommande?: LigneCommandeOrderByRelationAggregateInput
    livraison?: LivraisonOrderByWithRelationInput
  }

  export type CommandeWhereUniqueInput = Prisma.AtLeast<{
    idCommande?: string
    numeroCommande?: string
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    dateCommande?: DateTimeFilter<"Commande"> | Date | string
    statutCommande?: EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande
    totalCommande?: FloatFilter<"Commande"> | number
    taxesAppliquees?: FloatFilter<"Commande"> | number
    adresseLivraison?: StringFilter<"Commande"> | string
    modePaiement?: StringFilter<"Commande"> | string
    datePaiement?: DateTimeNullableFilter<"Commande"> | Date | string | null
    clientId?: StringFilter<"Commande"> | string
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    lignesCommande?: LigneCommandeListRelationFilter
    livraison?: XOR<LivraisonNullableScalarRelationFilter, LivraisonWhereInput> | null
  }, "idCommande" | "numeroCommande">

  export type CommandeOrderByWithAggregationInput = {
    idCommande?: SortOrder
    numeroCommande?: SortOrder
    dateCommande?: SortOrder
    statutCommande?: SortOrder
    totalCommande?: SortOrder
    taxesAppliquees?: SortOrder
    adresseLivraison?: SortOrder
    modePaiement?: SortOrder
    datePaiement?: SortOrderInput | SortOrder
    clientId?: SortOrder
    _count?: CommandeCountOrderByAggregateInput
    _avg?: CommandeAvgOrderByAggregateInput
    _max?: CommandeMaxOrderByAggregateInput
    _min?: CommandeMinOrderByAggregateInput
    _sum?: CommandeSumOrderByAggregateInput
  }

  export type CommandeScalarWhereWithAggregatesInput = {
    AND?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    OR?: CommandeScalarWhereWithAggregatesInput[]
    NOT?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    idCommande?: StringWithAggregatesFilter<"Commande"> | string
    numeroCommande?: StringWithAggregatesFilter<"Commande"> | string
    dateCommande?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
    statutCommande?: EnumStatutCommandeWithAggregatesFilter<"Commande"> | $Enums.StatutCommande
    totalCommande?: FloatWithAggregatesFilter<"Commande"> | number
    taxesAppliquees?: FloatWithAggregatesFilter<"Commande"> | number
    adresseLivraison?: StringWithAggregatesFilter<"Commande"> | string
    modePaiement?: StringWithAggregatesFilter<"Commande"> | string
    datePaiement?: DateTimeNullableWithAggregatesFilter<"Commande"> | Date | string | null
    clientId?: StringWithAggregatesFilter<"Commande"> | string
  }

  export type LigneCommandeWhereInput = {
    AND?: LigneCommandeWhereInput | LigneCommandeWhereInput[]
    OR?: LigneCommandeWhereInput[]
    NOT?: LigneCommandeWhereInput | LigneCommandeWhereInput[]
    idLigneCommande?: StringFilter<"LigneCommande"> | string
    quantite?: IntFilter<"LigneCommande"> | number
    prixUnitaire?: FloatFilter<"LigneCommande"> | number
    commandeId?: StringFilter<"LigneCommande"> | string
    produitId?: StringFilter<"LigneCommande"> | string
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }

  export type LigneCommandeOrderByWithRelationInput = {
    idLigneCommande?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
    commande?: CommandeOrderByWithRelationInput
    produit?: ProduitOrderByWithRelationInput
  }

  export type LigneCommandeWhereUniqueInput = Prisma.AtLeast<{
    idLigneCommande?: string
    AND?: LigneCommandeWhereInput | LigneCommandeWhereInput[]
    OR?: LigneCommandeWhereInput[]
    NOT?: LigneCommandeWhereInput | LigneCommandeWhereInput[]
    quantite?: IntFilter<"LigneCommande"> | number
    prixUnitaire?: FloatFilter<"LigneCommande"> | number
    commandeId?: StringFilter<"LigneCommande"> | string
    produitId?: StringFilter<"LigneCommande"> | string
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }, "idLigneCommande">

  export type LigneCommandeOrderByWithAggregationInput = {
    idLigneCommande?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
    _count?: LigneCommandeCountOrderByAggregateInput
    _avg?: LigneCommandeAvgOrderByAggregateInput
    _max?: LigneCommandeMaxOrderByAggregateInput
    _min?: LigneCommandeMinOrderByAggregateInput
    _sum?: LigneCommandeSumOrderByAggregateInput
  }

  export type LigneCommandeScalarWhereWithAggregatesInput = {
    AND?: LigneCommandeScalarWhereWithAggregatesInput | LigneCommandeScalarWhereWithAggregatesInput[]
    OR?: LigneCommandeScalarWhereWithAggregatesInput[]
    NOT?: LigneCommandeScalarWhereWithAggregatesInput | LigneCommandeScalarWhereWithAggregatesInput[]
    idLigneCommande?: StringWithAggregatesFilter<"LigneCommande"> | string
    quantite?: IntWithAggregatesFilter<"LigneCommande"> | number
    prixUnitaire?: FloatWithAggregatesFilter<"LigneCommande"> | number
    commandeId?: StringWithAggregatesFilter<"LigneCommande"> | string
    produitId?: StringWithAggregatesFilter<"LigneCommande"> | string
  }

  export type LivraisonWhereInput = {
    AND?: LivraisonWhereInput | LivraisonWhereInput[]
    OR?: LivraisonWhereInput[]
    NOT?: LivraisonWhereInput | LivraisonWhereInput[]
    idLivraison?: StringFilter<"Livraison"> | string
    dateExpedition?: DateTimeFilter<"Livraison"> | Date | string
    dateLivraisonPrevue?: DateTimeFilter<"Livraison"> | Date | string
    dateLivraisonEffective?: DateTimeNullableFilter<"Livraison"> | Date | string | null
    statutLivraison?: EnumStatutLivraisonFilter<"Livraison"> | $Enums.StatutLivraison
    notesLivreur?: StringNullableFilter<"Livraison"> | string | null
    signatureClient?: StringNullableFilter<"Livraison"> | string | null
    commandeId?: StringFilter<"Livraison"> | string
    livreurId?: StringFilter<"Livraison"> | string
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    livreur?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LivraisonOrderByWithRelationInput = {
    idLivraison?: SortOrder
    dateExpedition?: SortOrder
    dateLivraisonPrevue?: SortOrder
    dateLivraisonEffective?: SortOrderInput | SortOrder
    statutLivraison?: SortOrder
    notesLivreur?: SortOrderInput | SortOrder
    signatureClient?: SortOrderInput | SortOrder
    commandeId?: SortOrder
    livreurId?: SortOrder
    commande?: CommandeOrderByWithRelationInput
    livreur?: UserOrderByWithRelationInput
  }

  export type LivraisonWhereUniqueInput = Prisma.AtLeast<{
    idLivraison?: string
    commandeId?: string
    AND?: LivraisonWhereInput | LivraisonWhereInput[]
    OR?: LivraisonWhereInput[]
    NOT?: LivraisonWhereInput | LivraisonWhereInput[]
    dateExpedition?: DateTimeFilter<"Livraison"> | Date | string
    dateLivraisonPrevue?: DateTimeFilter<"Livraison"> | Date | string
    dateLivraisonEffective?: DateTimeNullableFilter<"Livraison"> | Date | string | null
    statutLivraison?: EnumStatutLivraisonFilter<"Livraison"> | $Enums.StatutLivraison
    notesLivreur?: StringNullableFilter<"Livraison"> | string | null
    signatureClient?: StringNullableFilter<"Livraison"> | string | null
    livreurId?: StringFilter<"Livraison"> | string
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    livreur?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "idLivraison" | "commandeId">

  export type LivraisonOrderByWithAggregationInput = {
    idLivraison?: SortOrder
    dateExpedition?: SortOrder
    dateLivraisonPrevue?: SortOrder
    dateLivraisonEffective?: SortOrderInput | SortOrder
    statutLivraison?: SortOrder
    notesLivreur?: SortOrderInput | SortOrder
    signatureClient?: SortOrderInput | SortOrder
    commandeId?: SortOrder
    livreurId?: SortOrder
    _count?: LivraisonCountOrderByAggregateInput
    _max?: LivraisonMaxOrderByAggregateInput
    _min?: LivraisonMinOrderByAggregateInput
  }

  export type LivraisonScalarWhereWithAggregatesInput = {
    AND?: LivraisonScalarWhereWithAggregatesInput | LivraisonScalarWhereWithAggregatesInput[]
    OR?: LivraisonScalarWhereWithAggregatesInput[]
    NOT?: LivraisonScalarWhereWithAggregatesInput | LivraisonScalarWhereWithAggregatesInput[]
    idLivraison?: StringWithAggregatesFilter<"Livraison"> | string
    dateExpedition?: DateTimeWithAggregatesFilter<"Livraison"> | Date | string
    dateLivraisonPrevue?: DateTimeWithAggregatesFilter<"Livraison"> | Date | string
    dateLivraisonEffective?: DateTimeNullableWithAggregatesFilter<"Livraison"> | Date | string | null
    statutLivraison?: EnumStatutLivraisonWithAggregatesFilter<"Livraison"> | $Enums.StatutLivraison
    notesLivreur?: StringNullableWithAggregatesFilter<"Livraison"> | string | null
    signatureClient?: StringNullableWithAggregatesFilter<"Livraison"> | string | null
    commandeId?: StringWithAggregatesFilter<"Livraison"> | string
    livreurId?: StringWithAggregatesFilter<"Livraison"> | string
  }

  export type RapportWhereInput = {
    AND?: RapportWhereInput | RapportWhereInput[]
    OR?: RapportWhereInput[]
    NOT?: RapportWhereInput | RapportWhereInput[]
    idRapport?: StringFilter<"Rapport"> | string
    typeRapport?: StringFilter<"Rapport"> | string
    dateGeneration?: DateTimeFilter<"Rapport"> | Date | string
    periode?: StringFilter<"Rapport"> | string
    contenuPDF?: StringFilter<"Rapport"> | string
    adminId?: StringFilter<"Rapport"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RapportOrderByWithRelationInput = {
    idRapport?: SortOrder
    typeRapport?: SortOrder
    dateGeneration?: SortOrder
    periode?: SortOrder
    contenuPDF?: SortOrder
    adminId?: SortOrder
    admin?: UserOrderByWithRelationInput
  }

  export type RapportWhereUniqueInput = Prisma.AtLeast<{
    idRapport?: string
    AND?: RapportWhereInput | RapportWhereInput[]
    OR?: RapportWhereInput[]
    NOT?: RapportWhereInput | RapportWhereInput[]
    typeRapport?: StringFilter<"Rapport"> | string
    dateGeneration?: DateTimeFilter<"Rapport"> | Date | string
    periode?: StringFilter<"Rapport"> | string
    contenuPDF?: StringFilter<"Rapport"> | string
    adminId?: StringFilter<"Rapport"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "idRapport">

  export type RapportOrderByWithAggregationInput = {
    idRapport?: SortOrder
    typeRapport?: SortOrder
    dateGeneration?: SortOrder
    periode?: SortOrder
    contenuPDF?: SortOrder
    adminId?: SortOrder
    _count?: RapportCountOrderByAggregateInput
    _max?: RapportMaxOrderByAggregateInput
    _min?: RapportMinOrderByAggregateInput
  }

  export type RapportScalarWhereWithAggregatesInput = {
    AND?: RapportScalarWhereWithAggregatesInput | RapportScalarWhereWithAggregatesInput[]
    OR?: RapportScalarWhereWithAggregatesInput[]
    NOT?: RapportScalarWhereWithAggregatesInput | RapportScalarWhereWithAggregatesInput[]
    idRapport?: StringWithAggregatesFilter<"Rapport"> | string
    typeRapport?: StringWithAggregatesFilter<"Rapport"> | string
    dateGeneration?: DateTimeWithAggregatesFilter<"Rapport"> | Date | string
    periode?: StringWithAggregatesFilter<"Rapport"> | string
    contenuPDF?: StringWithAggregatesFilter<"Rapport"> | string
    adminId?: StringWithAggregatesFilter<"Rapport"> | string
  }

  export type AlerteStockWhereInput = {
    AND?: AlerteStockWhereInput | AlerteStockWhereInput[]
    OR?: AlerteStockWhereInput[]
    NOT?: AlerteStockWhereInput | AlerteStockWhereInput[]
    idAlerte?: StringFilter<"AlerteStock"> | string
    seuilMinimum?: IntFilter<"AlerteStock"> | number
    dateAlerte?: DateTimeFilter<"AlerteStock"> | Date | string
    statutAlerte?: EnumStatutAlerteFilter<"AlerteStock"> | $Enums.StatutAlerte
    produitId?: StringFilter<"AlerteStock"> | string
    adminId?: StringFilter<"AlerteStock"> | string
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AlerteStockOrderByWithRelationInput = {
    idAlerte?: SortOrder
    seuilMinimum?: SortOrder
    dateAlerte?: SortOrder
    statutAlerte?: SortOrder
    produitId?: SortOrder
    adminId?: SortOrder
    produit?: ProduitOrderByWithRelationInput
    admin?: UserOrderByWithRelationInput
  }

  export type AlerteStockWhereUniqueInput = Prisma.AtLeast<{
    idAlerte?: string
    AND?: AlerteStockWhereInput | AlerteStockWhereInput[]
    OR?: AlerteStockWhereInput[]
    NOT?: AlerteStockWhereInput | AlerteStockWhereInput[]
    seuilMinimum?: IntFilter<"AlerteStock"> | number
    dateAlerte?: DateTimeFilter<"AlerteStock"> | Date | string
    statutAlerte?: EnumStatutAlerteFilter<"AlerteStock"> | $Enums.StatutAlerte
    produitId?: StringFilter<"AlerteStock"> | string
    adminId?: StringFilter<"AlerteStock"> | string
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "idAlerte">

  export type AlerteStockOrderByWithAggregationInput = {
    idAlerte?: SortOrder
    seuilMinimum?: SortOrder
    dateAlerte?: SortOrder
    statutAlerte?: SortOrder
    produitId?: SortOrder
    adminId?: SortOrder
    _count?: AlerteStockCountOrderByAggregateInput
    _avg?: AlerteStockAvgOrderByAggregateInput
    _max?: AlerteStockMaxOrderByAggregateInput
    _min?: AlerteStockMinOrderByAggregateInput
    _sum?: AlerteStockSumOrderByAggregateInput
  }

  export type AlerteStockScalarWhereWithAggregatesInput = {
    AND?: AlerteStockScalarWhereWithAggregatesInput | AlerteStockScalarWhereWithAggregatesInput[]
    OR?: AlerteStockScalarWhereWithAggregatesInput[]
    NOT?: AlerteStockScalarWhereWithAggregatesInput | AlerteStockScalarWhereWithAggregatesInput[]
    idAlerte?: StringWithAggregatesFilter<"AlerteStock"> | string
    seuilMinimum?: IntWithAggregatesFilter<"AlerteStock"> | number
    dateAlerte?: DateTimeWithAggregatesFilter<"AlerteStock"> | Date | string
    statutAlerte?: EnumStatutAlerteWithAggregatesFilter<"AlerteStock"> | $Enums.StatutAlerte
    produitId?: StringWithAggregatesFilter<"AlerteStock"> | string
    adminId?: StringWithAggregatesFilter<"AlerteStock"> | string
  }

  export type UserCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitCreateNestedManyWithoutFournisseurInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
    livraisons?: LivraisonCreateNestedManyWithoutLivreurInput
    rapports?: RapportCreateNestedManyWithoutAdminInput
    alertesGerees?: AlerteStockCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitUncheckedCreateNestedManyWithoutFournisseurInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    livraisons?: LivraisonUncheckedCreateNestedManyWithoutLivreurInput
    rapports?: RapportUncheckedCreateNestedManyWithoutAdminInput
    alertesGerees?: AlerteStockUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUpdateManyWithoutFournisseurNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    livraisons?: LivraisonUpdateManyWithoutLivreurNestedInput
    rapports?: RapportUpdateManyWithoutAdminNestedInput
    alertesGerees?: AlerteStockUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUncheckedUpdateManyWithoutFournisseurNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    livraisons?: LivraisonUncheckedUpdateManyWithoutLivreurNestedInput
    rapports?: RapportUncheckedUpdateManyWithoutAdminNestedInput
    alertesGerees?: AlerteStockUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduitCreateInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorie: CategorieCreateNestedOneWithoutProduitsInput
    fournisseur: UserCreateNestedOneWithoutProduitsInput
    lignesCommande?: LigneCommandeCreateNestedManyWithoutProduitInput
    alertesStock?: AlerteStockCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorieId: string
    fournisseurId: string
    lignesCommande?: LigneCommandeUncheckedCreateNestedManyWithoutProduitInput
    alertesStock?: AlerteStockUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitUpdateInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorie?: CategorieUpdateOneRequiredWithoutProduitsNestedInput
    fournisseur?: UserUpdateOneRequiredWithoutProduitsNestedInput
    lignesCommande?: LigneCommandeUpdateManyWithoutProduitNestedInput
    alertesStock?: AlerteStockUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorieId?: StringFieldUpdateOperationsInput | string
    fournisseurId?: StringFieldUpdateOperationsInput | string
    lignesCommande?: LigneCommandeUncheckedUpdateManyWithoutProduitNestedInput
    alertesStock?: AlerteStockUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitCreateManyInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorieId: string
    fournisseurId: string
  }

  export type ProduitUpdateManyMutationInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
  }

  export type ProduitUncheckedUpdateManyInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorieId?: StringFieldUpdateOperationsInput | string
    fournisseurId?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieCreateInput = {
    idCategorie?: string
    nomCategorie: string
    descriptionCategorie: string
    typeCategorie: string
    imageCategorie: string
    produits?: ProduitCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    idCategorie?: string
    nomCategorie: string
    descriptionCategorie: string
    typeCategorie: string
    imageCategorie: string
    produits?: ProduitUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    idCategorie?: StringFieldUpdateOperationsInput | string
    nomCategorie?: StringFieldUpdateOperationsInput | string
    descriptionCategorie?: StringFieldUpdateOperationsInput | string
    typeCategorie?: StringFieldUpdateOperationsInput | string
    imageCategorie?: StringFieldUpdateOperationsInput | string
    produits?: ProduitUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    idCategorie?: StringFieldUpdateOperationsInput | string
    nomCategorie?: StringFieldUpdateOperationsInput | string
    descriptionCategorie?: StringFieldUpdateOperationsInput | string
    typeCategorie?: StringFieldUpdateOperationsInput | string
    imageCategorie?: StringFieldUpdateOperationsInput | string
    produits?: ProduitUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieCreateManyInput = {
    idCategorie?: string
    nomCategorie: string
    descriptionCategorie: string
    typeCategorie: string
    imageCategorie: string
  }

  export type CategorieUpdateManyMutationInput = {
    idCategorie?: StringFieldUpdateOperationsInput | string
    nomCategorie?: StringFieldUpdateOperationsInput | string
    descriptionCategorie?: StringFieldUpdateOperationsInput | string
    typeCategorie?: StringFieldUpdateOperationsInput | string
    imageCategorie?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateManyInput = {
    idCategorie?: StringFieldUpdateOperationsInput | string
    nomCategorie?: StringFieldUpdateOperationsInput | string
    descriptionCategorie?: StringFieldUpdateOperationsInput | string
    typeCategorie?: StringFieldUpdateOperationsInput | string
    imageCategorie?: StringFieldUpdateOperationsInput | string
  }

  export type CommandeCreateInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    client: UserCreateNestedOneWithoutCommandesInput
    lignesCommande?: LigneCommandeCreateNestedManyWithoutCommandeInput
    livraison?: LivraisonCreateNestedOneWithoutCommandeInput
  }

  export type CommandeUncheckedCreateInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    clientId: string
    lignesCommande?: LigneCommandeUncheckedCreateNestedManyWithoutCommandeInput
    livraison?: LivraisonUncheckedCreateNestedOneWithoutCommandeInput
  }

  export type CommandeUpdateInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: UserUpdateOneRequiredWithoutCommandesNestedInput
    lignesCommande?: LigneCommandeUpdateManyWithoutCommandeNestedInput
    livraison?: LivraisonUpdateOneWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    lignesCommande?: LigneCommandeUncheckedUpdateManyWithoutCommandeNestedInput
    livraison?: LivraisonUncheckedUpdateOneWithoutCommandeNestedInput
  }

  export type CommandeCreateManyInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    clientId: string
  }

  export type CommandeUpdateManyMutationInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommandeUncheckedUpdateManyInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type LigneCommandeCreateInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    commande: CommandeCreateNestedOneWithoutLignesCommandeInput
    produit: ProduitCreateNestedOneWithoutLignesCommandeInput
  }

  export type LigneCommandeUncheckedCreateInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    commandeId: string
    produitId: string
  }

  export type LigneCommandeUpdateInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    commande?: CommandeUpdateOneRequiredWithoutLignesCommandeNestedInput
    produit?: ProduitUpdateOneRequiredWithoutLignesCommandeNestedInput
  }

  export type LigneCommandeUncheckedUpdateInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    commandeId?: StringFieldUpdateOperationsInput | string
    produitId?: StringFieldUpdateOperationsInput | string
  }

  export type LigneCommandeCreateManyInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    commandeId: string
    produitId: string
  }

  export type LigneCommandeUpdateManyMutationInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
  }

  export type LigneCommandeUncheckedUpdateManyInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    commandeId?: StringFieldUpdateOperationsInput | string
    produitId?: StringFieldUpdateOperationsInput | string
  }

  export type LivraisonCreateInput = {
    idLivraison?: string
    dateExpedition: Date | string
    dateLivraisonPrevue: Date | string
    dateLivraisonEffective?: Date | string | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur?: string | null
    signatureClient?: string | null
    commande: CommandeCreateNestedOneWithoutLivraisonInput
    livreur: UserCreateNestedOneWithoutLivraisonsInput
  }

  export type LivraisonUncheckedCreateInput = {
    idLivraison?: string
    dateExpedition: Date | string
    dateLivraisonPrevue: Date | string
    dateLivraisonEffective?: Date | string | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur?: string | null
    signatureClient?: string | null
    commandeId: string
    livreurId: string
  }

  export type LivraisonUpdateInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
    commande?: CommandeUpdateOneRequiredWithoutLivraisonNestedInput
    livreur?: UserUpdateOneRequiredWithoutLivraisonsNestedInput
  }

  export type LivraisonUncheckedUpdateInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
    commandeId?: StringFieldUpdateOperationsInput | string
    livreurId?: StringFieldUpdateOperationsInput | string
  }

  export type LivraisonCreateManyInput = {
    idLivraison?: string
    dateExpedition: Date | string
    dateLivraisonPrevue: Date | string
    dateLivraisonEffective?: Date | string | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur?: string | null
    signatureClient?: string | null
    commandeId: string
    livreurId: string
  }

  export type LivraisonUpdateManyMutationInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LivraisonUncheckedUpdateManyInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
    commandeId?: StringFieldUpdateOperationsInput | string
    livreurId?: StringFieldUpdateOperationsInput | string
  }

  export type RapportCreateInput = {
    idRapport?: string
    typeRapport: string
    dateGeneration?: Date | string
    periode: string
    contenuPDF: string
    admin: UserCreateNestedOneWithoutRapportsInput
  }

  export type RapportUncheckedCreateInput = {
    idRapport?: string
    typeRapport: string
    dateGeneration?: Date | string
    periode: string
    contenuPDF: string
    adminId: string
  }

  export type RapportUpdateInput = {
    idRapport?: StringFieldUpdateOperationsInput | string
    typeRapport?: StringFieldUpdateOperationsInput | string
    dateGeneration?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: StringFieldUpdateOperationsInput | string
    contenuPDF?: StringFieldUpdateOperationsInput | string
    admin?: UserUpdateOneRequiredWithoutRapportsNestedInput
  }

  export type RapportUncheckedUpdateInput = {
    idRapport?: StringFieldUpdateOperationsInput | string
    typeRapport?: StringFieldUpdateOperationsInput | string
    dateGeneration?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: StringFieldUpdateOperationsInput | string
    contenuPDF?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type RapportCreateManyInput = {
    idRapport?: string
    typeRapport: string
    dateGeneration?: Date | string
    periode: string
    contenuPDF: string
    adminId: string
  }

  export type RapportUpdateManyMutationInput = {
    idRapport?: StringFieldUpdateOperationsInput | string
    typeRapport?: StringFieldUpdateOperationsInput | string
    dateGeneration?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: StringFieldUpdateOperationsInput | string
    contenuPDF?: StringFieldUpdateOperationsInput | string
  }

  export type RapportUncheckedUpdateManyInput = {
    idRapport?: StringFieldUpdateOperationsInput | string
    typeRapport?: StringFieldUpdateOperationsInput | string
    dateGeneration?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: StringFieldUpdateOperationsInput | string
    contenuPDF?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type AlerteStockCreateInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    produit: ProduitCreateNestedOneWithoutAlertesStockInput
    admin: UserCreateNestedOneWithoutAlertesGereesInput
  }

  export type AlerteStockUncheckedCreateInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    produitId: string
    adminId: string
  }

  export type AlerteStockUpdateInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    produit?: ProduitUpdateOneRequiredWithoutAlertesStockNestedInput
    admin?: UserUpdateOneRequiredWithoutAlertesGereesNestedInput
  }

  export type AlerteStockUncheckedUpdateInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    produitId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type AlerteStockCreateManyInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    produitId: string
    adminId: string
  }

  export type AlerteStockUpdateManyMutationInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
  }

  export type AlerteStockUncheckedUpdateManyInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    produitId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProduitListRelationFilter = {
    every?: ProduitWhereInput
    some?: ProduitWhereInput
    none?: ProduitWhereInput
  }

  export type CommandeListRelationFilter = {
    every?: CommandeWhereInput
    some?: CommandeWhereInput
    none?: CommandeWhereInput
  }

  export type LivraisonListRelationFilter = {
    every?: LivraisonWhereInput
    some?: LivraisonWhereInput
    none?: LivraisonWhereInput
  }

  export type RapportListRelationFilter = {
    every?: RapportWhereInput
    some?: RapportWhereInput
    none?: RapportWhereInput
  }

  export type AlerteStockListRelationFilter = {
    every?: AlerteStockWhereInput
    some?: AlerteStockWhereInput
    none?: AlerteStockWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProduitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LivraisonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RapportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlerteStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    mdp?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatutProduitFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProduit | EnumStatutProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutProduitFilter<$PrismaModel> | $Enums.StatutProduit
  }

  export type CategorieScalarRelationFilter = {
    is?: CategorieWhereInput
    isNot?: CategorieWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LigneCommandeListRelationFilter = {
    every?: LigneCommandeWhereInput
    some?: LigneCommandeWhereInput
    none?: LigneCommandeWhereInput
  }

  export type LigneCommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProduitCountOrderByAggregateInput = {
    idProduit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    quantiteStock?: SortOrder
    typeProduit?: SortOrder
    imageURL?: SortOrder
    dateAjout?: SortOrder
    statutProduit?: SortOrder
    categorieId?: SortOrder
    fournisseurId?: SortOrder
  }

  export type ProduitAvgOrderByAggregateInput = {
    prix?: SortOrder
    quantiteStock?: SortOrder
  }

  export type ProduitMaxOrderByAggregateInput = {
    idProduit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    quantiteStock?: SortOrder
    typeProduit?: SortOrder
    imageURL?: SortOrder
    dateAjout?: SortOrder
    statutProduit?: SortOrder
    categorieId?: SortOrder
    fournisseurId?: SortOrder
  }

  export type ProduitMinOrderByAggregateInput = {
    idProduit?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    quantiteStock?: SortOrder
    typeProduit?: SortOrder
    imageURL?: SortOrder
    dateAjout?: SortOrder
    statutProduit?: SortOrder
    categorieId?: SortOrder
    fournisseurId?: SortOrder
  }

  export type ProduitSumOrderByAggregateInput = {
    prix?: SortOrder
    quantiteStock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatutProduitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProduit | EnumStatutProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutProduitWithAggregatesFilter<$PrismaModel> | $Enums.StatutProduit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutProduitFilter<$PrismaModel>
    _max?: NestedEnumStatutProduitFilter<$PrismaModel>
  }

  export type CategorieCountOrderByAggregateInput = {
    idCategorie?: SortOrder
    nomCategorie?: SortOrder
    descriptionCategorie?: SortOrder
    typeCategorie?: SortOrder
    imageCategorie?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    idCategorie?: SortOrder
    nomCategorie?: SortOrder
    descriptionCategorie?: SortOrder
    typeCategorie?: SortOrder
    imageCategorie?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    idCategorie?: SortOrder
    nomCategorie?: SortOrder
    descriptionCategorie?: SortOrder
    typeCategorie?: SortOrder
    imageCategorie?: SortOrder
  }

  export type EnumStatutCommandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCommande | EnumStatutCommandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutCommandeFilter<$PrismaModel> | $Enums.StatutCommande
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LivraisonNullableScalarRelationFilter = {
    is?: LivraisonWhereInput | null
    isNot?: LivraisonWhereInput | null
  }

  export type CommandeCountOrderByAggregateInput = {
    idCommande?: SortOrder
    numeroCommande?: SortOrder
    dateCommande?: SortOrder
    statutCommande?: SortOrder
    totalCommande?: SortOrder
    taxesAppliquees?: SortOrder
    adresseLivraison?: SortOrder
    modePaiement?: SortOrder
    datePaiement?: SortOrder
    clientId?: SortOrder
  }

  export type CommandeAvgOrderByAggregateInput = {
    totalCommande?: SortOrder
    taxesAppliquees?: SortOrder
  }

  export type CommandeMaxOrderByAggregateInput = {
    idCommande?: SortOrder
    numeroCommande?: SortOrder
    dateCommande?: SortOrder
    statutCommande?: SortOrder
    totalCommande?: SortOrder
    taxesAppliquees?: SortOrder
    adresseLivraison?: SortOrder
    modePaiement?: SortOrder
    datePaiement?: SortOrder
    clientId?: SortOrder
  }

  export type CommandeMinOrderByAggregateInput = {
    idCommande?: SortOrder
    numeroCommande?: SortOrder
    dateCommande?: SortOrder
    statutCommande?: SortOrder
    totalCommande?: SortOrder
    taxesAppliquees?: SortOrder
    adresseLivraison?: SortOrder
    modePaiement?: SortOrder
    datePaiement?: SortOrder
    clientId?: SortOrder
  }

  export type CommandeSumOrderByAggregateInput = {
    totalCommande?: SortOrder
    taxesAppliquees?: SortOrder
  }

  export type EnumStatutCommandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCommande | EnumStatutCommandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutCommandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutCommande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutCommandeFilter<$PrismaModel>
    _max?: NestedEnumStatutCommandeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CommandeScalarRelationFilter = {
    is?: CommandeWhereInput
    isNot?: CommandeWhereInput
  }

  export type ProduitScalarRelationFilter = {
    is?: ProduitWhereInput
    isNot?: ProduitWhereInput
  }

  export type LigneCommandeCountOrderByAggregateInput = {
    idLigneCommande?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
  }

  export type LigneCommandeAvgOrderByAggregateInput = {
    quantite?: SortOrder
    prixUnitaire?: SortOrder
  }

  export type LigneCommandeMaxOrderByAggregateInput = {
    idLigneCommande?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
  }

  export type LigneCommandeMinOrderByAggregateInput = {
    idLigneCommande?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
  }

  export type LigneCommandeSumOrderByAggregateInput = {
    quantite?: SortOrder
    prixUnitaire?: SortOrder
  }

  export type EnumStatutLivraisonFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutLivraison | EnumStatutLivraisonFieldRefInput<$PrismaModel>
    in?: $Enums.StatutLivraison[] | ListEnumStatutLivraisonFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutLivraison[] | ListEnumStatutLivraisonFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutLivraisonFilter<$PrismaModel> | $Enums.StatutLivraison
  }

  export type LivraisonCountOrderByAggregateInput = {
    idLivraison?: SortOrder
    dateExpedition?: SortOrder
    dateLivraisonPrevue?: SortOrder
    dateLivraisonEffective?: SortOrder
    statutLivraison?: SortOrder
    notesLivreur?: SortOrder
    signatureClient?: SortOrder
    commandeId?: SortOrder
    livreurId?: SortOrder
  }

  export type LivraisonMaxOrderByAggregateInput = {
    idLivraison?: SortOrder
    dateExpedition?: SortOrder
    dateLivraisonPrevue?: SortOrder
    dateLivraisonEffective?: SortOrder
    statutLivraison?: SortOrder
    notesLivreur?: SortOrder
    signatureClient?: SortOrder
    commandeId?: SortOrder
    livreurId?: SortOrder
  }

  export type LivraisonMinOrderByAggregateInput = {
    idLivraison?: SortOrder
    dateExpedition?: SortOrder
    dateLivraisonPrevue?: SortOrder
    dateLivraisonEffective?: SortOrder
    statutLivraison?: SortOrder
    notesLivreur?: SortOrder
    signatureClient?: SortOrder
    commandeId?: SortOrder
    livreurId?: SortOrder
  }

  export type EnumStatutLivraisonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutLivraison | EnumStatutLivraisonFieldRefInput<$PrismaModel>
    in?: $Enums.StatutLivraison[] | ListEnumStatutLivraisonFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutLivraison[] | ListEnumStatutLivraisonFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutLivraisonWithAggregatesFilter<$PrismaModel> | $Enums.StatutLivraison
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutLivraisonFilter<$PrismaModel>
    _max?: NestedEnumStatutLivraisonFilter<$PrismaModel>
  }

  export type RapportCountOrderByAggregateInput = {
    idRapport?: SortOrder
    typeRapport?: SortOrder
    dateGeneration?: SortOrder
    periode?: SortOrder
    contenuPDF?: SortOrder
    adminId?: SortOrder
  }

  export type RapportMaxOrderByAggregateInput = {
    idRapport?: SortOrder
    typeRapport?: SortOrder
    dateGeneration?: SortOrder
    periode?: SortOrder
    contenuPDF?: SortOrder
    adminId?: SortOrder
  }

  export type RapportMinOrderByAggregateInput = {
    idRapport?: SortOrder
    typeRapport?: SortOrder
    dateGeneration?: SortOrder
    periode?: SortOrder
    contenuPDF?: SortOrder
    adminId?: SortOrder
  }

  export type EnumStatutAlerteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAlerte | EnumStatutAlerteFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAlerte[] | ListEnumStatutAlerteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutAlerte[] | ListEnumStatutAlerteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutAlerteFilter<$PrismaModel> | $Enums.StatutAlerte
  }

  export type AlerteStockCountOrderByAggregateInput = {
    idAlerte?: SortOrder
    seuilMinimum?: SortOrder
    dateAlerte?: SortOrder
    statutAlerte?: SortOrder
    produitId?: SortOrder
    adminId?: SortOrder
  }

  export type AlerteStockAvgOrderByAggregateInput = {
    seuilMinimum?: SortOrder
  }

  export type AlerteStockMaxOrderByAggregateInput = {
    idAlerte?: SortOrder
    seuilMinimum?: SortOrder
    dateAlerte?: SortOrder
    statutAlerte?: SortOrder
    produitId?: SortOrder
    adminId?: SortOrder
  }

  export type AlerteStockMinOrderByAggregateInput = {
    idAlerte?: SortOrder
    seuilMinimum?: SortOrder
    dateAlerte?: SortOrder
    statutAlerte?: SortOrder
    produitId?: SortOrder
    adminId?: SortOrder
  }

  export type AlerteStockSumOrderByAggregateInput = {
    seuilMinimum?: SortOrder
  }

  export type EnumStatutAlerteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAlerte | EnumStatutAlerteFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAlerte[] | ListEnumStatutAlerteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutAlerte[] | ListEnumStatutAlerteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutAlerteWithAggregatesFilter<$PrismaModel> | $Enums.StatutAlerte
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutAlerteFilter<$PrismaModel>
    _max?: NestedEnumStatutAlerteFilter<$PrismaModel>
  }

  export type ProduitCreateNestedManyWithoutFournisseurInput = {
    create?: XOR<ProduitCreateWithoutFournisseurInput, ProduitUncheckedCreateWithoutFournisseurInput> | ProduitCreateWithoutFournisseurInput[] | ProduitUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutFournisseurInput | ProduitCreateOrConnectWithoutFournisseurInput[]
    createMany?: ProduitCreateManyFournisseurInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type CommandeCreateNestedManyWithoutClientInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type LivraisonCreateNestedManyWithoutLivreurInput = {
    create?: XOR<LivraisonCreateWithoutLivreurInput, LivraisonUncheckedCreateWithoutLivreurInput> | LivraisonCreateWithoutLivreurInput[] | LivraisonUncheckedCreateWithoutLivreurInput[]
    connectOrCreate?: LivraisonCreateOrConnectWithoutLivreurInput | LivraisonCreateOrConnectWithoutLivreurInput[]
    createMany?: LivraisonCreateManyLivreurInputEnvelope
    connect?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
  }

  export type RapportCreateNestedManyWithoutAdminInput = {
    create?: XOR<RapportCreateWithoutAdminInput, RapportUncheckedCreateWithoutAdminInput> | RapportCreateWithoutAdminInput[] | RapportUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RapportCreateOrConnectWithoutAdminInput | RapportCreateOrConnectWithoutAdminInput[]
    createMany?: RapportCreateManyAdminInputEnvelope
    connect?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
  }

  export type AlerteStockCreateNestedManyWithoutAdminInput = {
    create?: XOR<AlerteStockCreateWithoutAdminInput, AlerteStockUncheckedCreateWithoutAdminInput> | AlerteStockCreateWithoutAdminInput[] | AlerteStockUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AlerteStockCreateOrConnectWithoutAdminInput | AlerteStockCreateOrConnectWithoutAdminInput[]
    createMany?: AlerteStockCreateManyAdminInputEnvelope
    connect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
  }

  export type ProduitUncheckedCreateNestedManyWithoutFournisseurInput = {
    create?: XOR<ProduitCreateWithoutFournisseurInput, ProduitUncheckedCreateWithoutFournisseurInput> | ProduitCreateWithoutFournisseurInput[] | ProduitUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutFournisseurInput | ProduitCreateOrConnectWithoutFournisseurInput[]
    createMany?: ProduitCreateManyFournisseurInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type LivraisonUncheckedCreateNestedManyWithoutLivreurInput = {
    create?: XOR<LivraisonCreateWithoutLivreurInput, LivraisonUncheckedCreateWithoutLivreurInput> | LivraisonCreateWithoutLivreurInput[] | LivraisonUncheckedCreateWithoutLivreurInput[]
    connectOrCreate?: LivraisonCreateOrConnectWithoutLivreurInput | LivraisonCreateOrConnectWithoutLivreurInput[]
    createMany?: LivraisonCreateManyLivreurInputEnvelope
    connect?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
  }

  export type RapportUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<RapportCreateWithoutAdminInput, RapportUncheckedCreateWithoutAdminInput> | RapportCreateWithoutAdminInput[] | RapportUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RapportCreateOrConnectWithoutAdminInput | RapportCreateOrConnectWithoutAdminInput[]
    createMany?: RapportCreateManyAdminInputEnvelope
    connect?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
  }

  export type AlerteStockUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AlerteStockCreateWithoutAdminInput, AlerteStockUncheckedCreateWithoutAdminInput> | AlerteStockCreateWithoutAdminInput[] | AlerteStockUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AlerteStockCreateOrConnectWithoutAdminInput | AlerteStockCreateOrConnectWithoutAdminInput[]
    createMany?: AlerteStockCreateManyAdminInputEnvelope
    connect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatutFieldUpdateOperationsInput = {
    set?: $Enums.Statut
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProduitUpdateManyWithoutFournisseurNestedInput = {
    create?: XOR<ProduitCreateWithoutFournisseurInput, ProduitUncheckedCreateWithoutFournisseurInput> | ProduitCreateWithoutFournisseurInput[] | ProduitUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutFournisseurInput | ProduitCreateOrConnectWithoutFournisseurInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutFournisseurInput | ProduitUpsertWithWhereUniqueWithoutFournisseurInput[]
    createMany?: ProduitCreateManyFournisseurInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutFournisseurInput | ProduitUpdateWithWhereUniqueWithoutFournisseurInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutFournisseurInput | ProduitUpdateManyWithWhereWithoutFournisseurInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type CommandeUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutClientInput | CommandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutClientInput | CommandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutClientInput | CommandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type LivraisonUpdateManyWithoutLivreurNestedInput = {
    create?: XOR<LivraisonCreateWithoutLivreurInput, LivraisonUncheckedCreateWithoutLivreurInput> | LivraisonCreateWithoutLivreurInput[] | LivraisonUncheckedCreateWithoutLivreurInput[]
    connectOrCreate?: LivraisonCreateOrConnectWithoutLivreurInput | LivraisonCreateOrConnectWithoutLivreurInput[]
    upsert?: LivraisonUpsertWithWhereUniqueWithoutLivreurInput | LivraisonUpsertWithWhereUniqueWithoutLivreurInput[]
    createMany?: LivraisonCreateManyLivreurInputEnvelope
    set?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
    disconnect?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
    delete?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
    connect?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
    update?: LivraisonUpdateWithWhereUniqueWithoutLivreurInput | LivraisonUpdateWithWhereUniqueWithoutLivreurInput[]
    updateMany?: LivraisonUpdateManyWithWhereWithoutLivreurInput | LivraisonUpdateManyWithWhereWithoutLivreurInput[]
    deleteMany?: LivraisonScalarWhereInput | LivraisonScalarWhereInput[]
  }

  export type RapportUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RapportCreateWithoutAdminInput, RapportUncheckedCreateWithoutAdminInput> | RapportCreateWithoutAdminInput[] | RapportUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RapportCreateOrConnectWithoutAdminInput | RapportCreateOrConnectWithoutAdminInput[]
    upsert?: RapportUpsertWithWhereUniqueWithoutAdminInput | RapportUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RapportCreateManyAdminInputEnvelope
    set?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
    disconnect?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
    delete?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
    connect?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
    update?: RapportUpdateWithWhereUniqueWithoutAdminInput | RapportUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RapportUpdateManyWithWhereWithoutAdminInput | RapportUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RapportScalarWhereInput | RapportScalarWhereInput[]
  }

  export type AlerteStockUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AlerteStockCreateWithoutAdminInput, AlerteStockUncheckedCreateWithoutAdminInput> | AlerteStockCreateWithoutAdminInput[] | AlerteStockUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AlerteStockCreateOrConnectWithoutAdminInput | AlerteStockCreateOrConnectWithoutAdminInput[]
    upsert?: AlerteStockUpsertWithWhereUniqueWithoutAdminInput | AlerteStockUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AlerteStockCreateManyAdminInputEnvelope
    set?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    disconnect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    delete?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    connect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    update?: AlerteStockUpdateWithWhereUniqueWithoutAdminInput | AlerteStockUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AlerteStockUpdateManyWithWhereWithoutAdminInput | AlerteStockUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AlerteStockScalarWhereInput | AlerteStockScalarWhereInput[]
  }

  export type ProduitUncheckedUpdateManyWithoutFournisseurNestedInput = {
    create?: XOR<ProduitCreateWithoutFournisseurInput, ProduitUncheckedCreateWithoutFournisseurInput> | ProduitCreateWithoutFournisseurInput[] | ProduitUncheckedCreateWithoutFournisseurInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutFournisseurInput | ProduitCreateOrConnectWithoutFournisseurInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutFournisseurInput | ProduitUpsertWithWhereUniqueWithoutFournisseurInput[]
    createMany?: ProduitCreateManyFournisseurInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutFournisseurInput | ProduitUpdateWithWhereUniqueWithoutFournisseurInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutFournisseurInput | ProduitUpdateManyWithWhereWithoutFournisseurInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutClientInput | CommandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutClientInput | CommandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutClientInput | CommandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type LivraisonUncheckedUpdateManyWithoutLivreurNestedInput = {
    create?: XOR<LivraisonCreateWithoutLivreurInput, LivraisonUncheckedCreateWithoutLivreurInput> | LivraisonCreateWithoutLivreurInput[] | LivraisonUncheckedCreateWithoutLivreurInput[]
    connectOrCreate?: LivraisonCreateOrConnectWithoutLivreurInput | LivraisonCreateOrConnectWithoutLivreurInput[]
    upsert?: LivraisonUpsertWithWhereUniqueWithoutLivreurInput | LivraisonUpsertWithWhereUniqueWithoutLivreurInput[]
    createMany?: LivraisonCreateManyLivreurInputEnvelope
    set?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
    disconnect?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
    delete?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
    connect?: LivraisonWhereUniqueInput | LivraisonWhereUniqueInput[]
    update?: LivraisonUpdateWithWhereUniqueWithoutLivreurInput | LivraisonUpdateWithWhereUniqueWithoutLivreurInput[]
    updateMany?: LivraisonUpdateManyWithWhereWithoutLivreurInput | LivraisonUpdateManyWithWhereWithoutLivreurInput[]
    deleteMany?: LivraisonScalarWhereInput | LivraisonScalarWhereInput[]
  }

  export type RapportUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RapportCreateWithoutAdminInput, RapportUncheckedCreateWithoutAdminInput> | RapportCreateWithoutAdminInput[] | RapportUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RapportCreateOrConnectWithoutAdminInput | RapportCreateOrConnectWithoutAdminInput[]
    upsert?: RapportUpsertWithWhereUniqueWithoutAdminInput | RapportUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RapportCreateManyAdminInputEnvelope
    set?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
    disconnect?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
    delete?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
    connect?: RapportWhereUniqueInput | RapportWhereUniqueInput[]
    update?: RapportUpdateWithWhereUniqueWithoutAdminInput | RapportUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RapportUpdateManyWithWhereWithoutAdminInput | RapportUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RapportScalarWhereInput | RapportScalarWhereInput[]
  }

  export type AlerteStockUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AlerteStockCreateWithoutAdminInput, AlerteStockUncheckedCreateWithoutAdminInput> | AlerteStockCreateWithoutAdminInput[] | AlerteStockUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AlerteStockCreateOrConnectWithoutAdminInput | AlerteStockCreateOrConnectWithoutAdminInput[]
    upsert?: AlerteStockUpsertWithWhereUniqueWithoutAdminInput | AlerteStockUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AlerteStockCreateManyAdminInputEnvelope
    set?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    disconnect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    delete?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    connect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    update?: AlerteStockUpdateWithWhereUniqueWithoutAdminInput | AlerteStockUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AlerteStockUpdateManyWithWhereWithoutAdminInput | AlerteStockUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AlerteStockScalarWhereInput | AlerteStockScalarWhereInput[]
  }

  export type CategorieCreateNestedOneWithoutProduitsInput = {
    create?: XOR<CategorieCreateWithoutProduitsInput, CategorieUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutProduitsInput
    connect?: CategorieWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProduitsInput = {
    create?: XOR<UserCreateWithoutProduitsInput, UserUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProduitsInput
    connect?: UserWhereUniqueInput
  }

  export type LigneCommandeCreateNestedManyWithoutProduitInput = {
    create?: XOR<LigneCommandeCreateWithoutProduitInput, LigneCommandeUncheckedCreateWithoutProduitInput> | LigneCommandeCreateWithoutProduitInput[] | LigneCommandeUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: LigneCommandeCreateOrConnectWithoutProduitInput | LigneCommandeCreateOrConnectWithoutProduitInput[]
    createMany?: LigneCommandeCreateManyProduitInputEnvelope
    connect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
  }

  export type AlerteStockCreateNestedManyWithoutProduitInput = {
    create?: XOR<AlerteStockCreateWithoutProduitInput, AlerteStockUncheckedCreateWithoutProduitInput> | AlerteStockCreateWithoutProduitInput[] | AlerteStockUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: AlerteStockCreateOrConnectWithoutProduitInput | AlerteStockCreateOrConnectWithoutProduitInput[]
    createMany?: AlerteStockCreateManyProduitInputEnvelope
    connect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
  }

  export type LigneCommandeUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<LigneCommandeCreateWithoutProduitInput, LigneCommandeUncheckedCreateWithoutProduitInput> | LigneCommandeCreateWithoutProduitInput[] | LigneCommandeUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: LigneCommandeCreateOrConnectWithoutProduitInput | LigneCommandeCreateOrConnectWithoutProduitInput[]
    createMany?: LigneCommandeCreateManyProduitInputEnvelope
    connect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
  }

  export type AlerteStockUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<AlerteStockCreateWithoutProduitInput, AlerteStockUncheckedCreateWithoutProduitInput> | AlerteStockCreateWithoutProduitInput[] | AlerteStockUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: AlerteStockCreateOrConnectWithoutProduitInput | AlerteStockCreateOrConnectWithoutProduitInput[]
    createMany?: AlerteStockCreateManyProduitInputEnvelope
    connect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatutProduitFieldUpdateOperationsInput = {
    set?: $Enums.StatutProduit
  }

  export type CategorieUpdateOneRequiredWithoutProduitsNestedInput = {
    create?: XOR<CategorieCreateWithoutProduitsInput, CategorieUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutProduitsInput
    upsert?: CategorieUpsertWithoutProduitsInput
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutProduitsInput, CategorieUpdateWithoutProduitsInput>, CategorieUncheckedUpdateWithoutProduitsInput>
  }

  export type UserUpdateOneRequiredWithoutProduitsNestedInput = {
    create?: XOR<UserCreateWithoutProduitsInput, UserUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProduitsInput
    upsert?: UserUpsertWithoutProduitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProduitsInput, UserUpdateWithoutProduitsInput>, UserUncheckedUpdateWithoutProduitsInput>
  }

  export type LigneCommandeUpdateManyWithoutProduitNestedInput = {
    create?: XOR<LigneCommandeCreateWithoutProduitInput, LigneCommandeUncheckedCreateWithoutProduitInput> | LigneCommandeCreateWithoutProduitInput[] | LigneCommandeUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: LigneCommandeCreateOrConnectWithoutProduitInput | LigneCommandeCreateOrConnectWithoutProduitInput[]
    upsert?: LigneCommandeUpsertWithWhereUniqueWithoutProduitInput | LigneCommandeUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: LigneCommandeCreateManyProduitInputEnvelope
    set?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    disconnect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    delete?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    connect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    update?: LigneCommandeUpdateWithWhereUniqueWithoutProduitInput | LigneCommandeUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: LigneCommandeUpdateManyWithWhereWithoutProduitInput | LigneCommandeUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: LigneCommandeScalarWhereInput | LigneCommandeScalarWhereInput[]
  }

  export type AlerteStockUpdateManyWithoutProduitNestedInput = {
    create?: XOR<AlerteStockCreateWithoutProduitInput, AlerteStockUncheckedCreateWithoutProduitInput> | AlerteStockCreateWithoutProduitInput[] | AlerteStockUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: AlerteStockCreateOrConnectWithoutProduitInput | AlerteStockCreateOrConnectWithoutProduitInput[]
    upsert?: AlerteStockUpsertWithWhereUniqueWithoutProduitInput | AlerteStockUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: AlerteStockCreateManyProduitInputEnvelope
    set?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    disconnect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    delete?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    connect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    update?: AlerteStockUpdateWithWhereUniqueWithoutProduitInput | AlerteStockUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: AlerteStockUpdateManyWithWhereWithoutProduitInput | AlerteStockUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: AlerteStockScalarWhereInput | AlerteStockScalarWhereInput[]
  }

  export type LigneCommandeUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<LigneCommandeCreateWithoutProduitInput, LigneCommandeUncheckedCreateWithoutProduitInput> | LigneCommandeCreateWithoutProduitInput[] | LigneCommandeUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: LigneCommandeCreateOrConnectWithoutProduitInput | LigneCommandeCreateOrConnectWithoutProduitInput[]
    upsert?: LigneCommandeUpsertWithWhereUniqueWithoutProduitInput | LigneCommandeUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: LigneCommandeCreateManyProduitInputEnvelope
    set?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    disconnect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    delete?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    connect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    update?: LigneCommandeUpdateWithWhereUniqueWithoutProduitInput | LigneCommandeUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: LigneCommandeUpdateManyWithWhereWithoutProduitInput | LigneCommandeUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: LigneCommandeScalarWhereInput | LigneCommandeScalarWhereInput[]
  }

  export type AlerteStockUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<AlerteStockCreateWithoutProduitInput, AlerteStockUncheckedCreateWithoutProduitInput> | AlerteStockCreateWithoutProduitInput[] | AlerteStockUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: AlerteStockCreateOrConnectWithoutProduitInput | AlerteStockCreateOrConnectWithoutProduitInput[]
    upsert?: AlerteStockUpsertWithWhereUniqueWithoutProduitInput | AlerteStockUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: AlerteStockCreateManyProduitInputEnvelope
    set?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    disconnect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    delete?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    connect?: AlerteStockWhereUniqueInput | AlerteStockWhereUniqueInput[]
    update?: AlerteStockUpdateWithWhereUniqueWithoutProduitInput | AlerteStockUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: AlerteStockUpdateManyWithWhereWithoutProduitInput | AlerteStockUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: AlerteStockScalarWhereInput | AlerteStockScalarWhereInput[]
  }

  export type ProduitCreateNestedManyWithoutCategorieInput = {
    create?: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput> | ProduitCreateWithoutCategorieInput[] | ProduitUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCategorieInput | ProduitCreateOrConnectWithoutCategorieInput[]
    createMany?: ProduitCreateManyCategorieInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ProduitUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput> | ProduitCreateWithoutCategorieInput[] | ProduitUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCategorieInput | ProduitCreateOrConnectWithoutCategorieInput[]
    createMany?: ProduitCreateManyCategorieInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ProduitUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput> | ProduitCreateWithoutCategorieInput[] | ProduitUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCategorieInput | ProduitCreateOrConnectWithoutCategorieInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutCategorieInput | ProduitUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: ProduitCreateManyCategorieInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutCategorieInput | ProduitUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutCategorieInput | ProduitUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type ProduitUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput> | ProduitCreateWithoutCategorieInput[] | ProduitUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCategorieInput | ProduitCreateOrConnectWithoutCategorieInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutCategorieInput | ProduitUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: ProduitCreateManyCategorieInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutCategorieInput | ProduitUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutCategorieInput | ProduitUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommandesInput = {
    create?: XOR<UserCreateWithoutCommandesInput, UserUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommandesInput
    connect?: UserWhereUniqueInput
  }

  export type LigneCommandeCreateNestedManyWithoutCommandeInput = {
    create?: XOR<LigneCommandeCreateWithoutCommandeInput, LigneCommandeUncheckedCreateWithoutCommandeInput> | LigneCommandeCreateWithoutCommandeInput[] | LigneCommandeUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: LigneCommandeCreateOrConnectWithoutCommandeInput | LigneCommandeCreateOrConnectWithoutCommandeInput[]
    createMany?: LigneCommandeCreateManyCommandeInputEnvelope
    connect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
  }

  export type LivraisonCreateNestedOneWithoutCommandeInput = {
    create?: XOR<LivraisonCreateWithoutCommandeInput, LivraisonUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: LivraisonCreateOrConnectWithoutCommandeInput
    connect?: LivraisonWhereUniqueInput
  }

  export type LigneCommandeUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: XOR<LigneCommandeCreateWithoutCommandeInput, LigneCommandeUncheckedCreateWithoutCommandeInput> | LigneCommandeCreateWithoutCommandeInput[] | LigneCommandeUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: LigneCommandeCreateOrConnectWithoutCommandeInput | LigneCommandeCreateOrConnectWithoutCommandeInput[]
    createMany?: LigneCommandeCreateManyCommandeInputEnvelope
    connect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
  }

  export type LivraisonUncheckedCreateNestedOneWithoutCommandeInput = {
    create?: XOR<LivraisonCreateWithoutCommandeInput, LivraisonUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: LivraisonCreateOrConnectWithoutCommandeInput
    connect?: LivraisonWhereUniqueInput
  }

  export type EnumStatutCommandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutCommande
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: XOR<UserCreateWithoutCommandesInput, UserUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommandesInput
    upsert?: UserUpsertWithoutCommandesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommandesInput, UserUpdateWithoutCommandesInput>, UserUncheckedUpdateWithoutCommandesInput>
  }

  export type LigneCommandeUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<LigneCommandeCreateWithoutCommandeInput, LigneCommandeUncheckedCreateWithoutCommandeInput> | LigneCommandeCreateWithoutCommandeInput[] | LigneCommandeUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: LigneCommandeCreateOrConnectWithoutCommandeInput | LigneCommandeCreateOrConnectWithoutCommandeInput[]
    upsert?: LigneCommandeUpsertWithWhereUniqueWithoutCommandeInput | LigneCommandeUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: LigneCommandeCreateManyCommandeInputEnvelope
    set?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    disconnect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    delete?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    connect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    update?: LigneCommandeUpdateWithWhereUniqueWithoutCommandeInput | LigneCommandeUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: LigneCommandeUpdateManyWithWhereWithoutCommandeInput | LigneCommandeUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: LigneCommandeScalarWhereInput | LigneCommandeScalarWhereInput[]
  }

  export type LivraisonUpdateOneWithoutCommandeNestedInput = {
    create?: XOR<LivraisonCreateWithoutCommandeInput, LivraisonUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: LivraisonCreateOrConnectWithoutCommandeInput
    upsert?: LivraisonUpsertWithoutCommandeInput
    disconnect?: LivraisonWhereInput | boolean
    delete?: LivraisonWhereInput | boolean
    connect?: LivraisonWhereUniqueInput
    update?: XOR<XOR<LivraisonUpdateToOneWithWhereWithoutCommandeInput, LivraisonUpdateWithoutCommandeInput>, LivraisonUncheckedUpdateWithoutCommandeInput>
  }

  export type LigneCommandeUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<LigneCommandeCreateWithoutCommandeInput, LigneCommandeUncheckedCreateWithoutCommandeInput> | LigneCommandeCreateWithoutCommandeInput[] | LigneCommandeUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: LigneCommandeCreateOrConnectWithoutCommandeInput | LigneCommandeCreateOrConnectWithoutCommandeInput[]
    upsert?: LigneCommandeUpsertWithWhereUniqueWithoutCommandeInput | LigneCommandeUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: LigneCommandeCreateManyCommandeInputEnvelope
    set?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    disconnect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    delete?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    connect?: LigneCommandeWhereUniqueInput | LigneCommandeWhereUniqueInput[]
    update?: LigneCommandeUpdateWithWhereUniqueWithoutCommandeInput | LigneCommandeUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: LigneCommandeUpdateManyWithWhereWithoutCommandeInput | LigneCommandeUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: LigneCommandeScalarWhereInput | LigneCommandeScalarWhereInput[]
  }

  export type LivraisonUncheckedUpdateOneWithoutCommandeNestedInput = {
    create?: XOR<LivraisonCreateWithoutCommandeInput, LivraisonUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: LivraisonCreateOrConnectWithoutCommandeInput
    upsert?: LivraisonUpsertWithoutCommandeInput
    disconnect?: LivraisonWhereInput | boolean
    delete?: LivraisonWhereInput | boolean
    connect?: LivraisonWhereUniqueInput
    update?: XOR<XOR<LivraisonUpdateToOneWithWhereWithoutCommandeInput, LivraisonUpdateWithoutCommandeInput>, LivraisonUncheckedUpdateWithoutCommandeInput>
  }

  export type CommandeCreateNestedOneWithoutLignesCommandeInput = {
    create?: XOR<CommandeCreateWithoutLignesCommandeInput, CommandeUncheckedCreateWithoutLignesCommandeInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutLignesCommandeInput
    connect?: CommandeWhereUniqueInput
  }

  export type ProduitCreateNestedOneWithoutLignesCommandeInput = {
    create?: XOR<ProduitCreateWithoutLignesCommandeInput, ProduitUncheckedCreateWithoutLignesCommandeInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutLignesCommandeInput
    connect?: ProduitWhereUniqueInput
  }

  export type CommandeUpdateOneRequiredWithoutLignesCommandeNestedInput = {
    create?: XOR<CommandeCreateWithoutLignesCommandeInput, CommandeUncheckedCreateWithoutLignesCommandeInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutLignesCommandeInput
    upsert?: CommandeUpsertWithoutLignesCommandeInput
    connect?: CommandeWhereUniqueInput
    update?: XOR<XOR<CommandeUpdateToOneWithWhereWithoutLignesCommandeInput, CommandeUpdateWithoutLignesCommandeInput>, CommandeUncheckedUpdateWithoutLignesCommandeInput>
  }

  export type ProduitUpdateOneRequiredWithoutLignesCommandeNestedInput = {
    create?: XOR<ProduitCreateWithoutLignesCommandeInput, ProduitUncheckedCreateWithoutLignesCommandeInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutLignesCommandeInput
    upsert?: ProduitUpsertWithoutLignesCommandeInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<XOR<ProduitUpdateToOneWithWhereWithoutLignesCommandeInput, ProduitUpdateWithoutLignesCommandeInput>, ProduitUncheckedUpdateWithoutLignesCommandeInput>
  }

  export type CommandeCreateNestedOneWithoutLivraisonInput = {
    create?: XOR<CommandeCreateWithoutLivraisonInput, CommandeUncheckedCreateWithoutLivraisonInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutLivraisonInput
    connect?: CommandeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLivraisonsInput = {
    create?: XOR<UserCreateWithoutLivraisonsInput, UserUncheckedCreateWithoutLivraisonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLivraisonsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatutLivraisonFieldUpdateOperationsInput = {
    set?: $Enums.StatutLivraison
  }

  export type CommandeUpdateOneRequiredWithoutLivraisonNestedInput = {
    create?: XOR<CommandeCreateWithoutLivraisonInput, CommandeUncheckedCreateWithoutLivraisonInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutLivraisonInput
    upsert?: CommandeUpsertWithoutLivraisonInput
    connect?: CommandeWhereUniqueInput
    update?: XOR<XOR<CommandeUpdateToOneWithWhereWithoutLivraisonInput, CommandeUpdateWithoutLivraisonInput>, CommandeUncheckedUpdateWithoutLivraisonInput>
  }

  export type UserUpdateOneRequiredWithoutLivraisonsNestedInput = {
    create?: XOR<UserCreateWithoutLivraisonsInput, UserUncheckedCreateWithoutLivraisonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLivraisonsInput
    upsert?: UserUpsertWithoutLivraisonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLivraisonsInput, UserUpdateWithoutLivraisonsInput>, UserUncheckedUpdateWithoutLivraisonsInput>
  }

  export type UserCreateNestedOneWithoutRapportsInput = {
    create?: XOR<UserCreateWithoutRapportsInput, UserUncheckedCreateWithoutRapportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRapportsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRapportsNestedInput = {
    create?: XOR<UserCreateWithoutRapportsInput, UserUncheckedCreateWithoutRapportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRapportsInput
    upsert?: UserUpsertWithoutRapportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRapportsInput, UserUpdateWithoutRapportsInput>, UserUncheckedUpdateWithoutRapportsInput>
  }

  export type ProduitCreateNestedOneWithoutAlertesStockInput = {
    create?: XOR<ProduitCreateWithoutAlertesStockInput, ProduitUncheckedCreateWithoutAlertesStockInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutAlertesStockInput
    connect?: ProduitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAlertesGereesInput = {
    create?: XOR<UserCreateWithoutAlertesGereesInput, UserUncheckedCreateWithoutAlertesGereesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertesGereesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatutAlerteFieldUpdateOperationsInput = {
    set?: $Enums.StatutAlerte
  }

  export type ProduitUpdateOneRequiredWithoutAlertesStockNestedInput = {
    create?: XOR<ProduitCreateWithoutAlertesStockInput, ProduitUncheckedCreateWithoutAlertesStockInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutAlertesStockInput
    upsert?: ProduitUpsertWithoutAlertesStockInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<XOR<ProduitUpdateToOneWithWhereWithoutAlertesStockInput, ProduitUpdateWithoutAlertesStockInput>, ProduitUncheckedUpdateWithoutAlertesStockInput>
  }

  export type UserUpdateOneRequiredWithoutAlertesGereesNestedInput = {
    create?: XOR<UserCreateWithoutAlertesGereesInput, UserUncheckedCreateWithoutAlertesGereesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertesGereesInput
    upsert?: UserUpsertWithoutAlertesGereesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertesGereesInput, UserUpdateWithoutAlertesGereesInput>, UserUncheckedUpdateWithoutAlertesGereesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    notIn?: $Enums.Statut[] | ListEnumStatutFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStatutProduitFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProduit | EnumStatutProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutProduitFilter<$PrismaModel> | $Enums.StatutProduit
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumStatutProduitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProduit | EnumStatutProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutProduitWithAggregatesFilter<$PrismaModel> | $Enums.StatutProduit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutProduitFilter<$PrismaModel>
    _max?: NestedEnumStatutProduitFilter<$PrismaModel>
  }

  export type NestedEnumStatutCommandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCommande | EnumStatutCommandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutCommandeFilter<$PrismaModel> | $Enums.StatutCommande
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatutCommandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCommande | EnumStatutCommandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutCommandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutCommande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutCommandeFilter<$PrismaModel>
    _max?: NestedEnumStatutCommandeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutLivraisonFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutLivraison | EnumStatutLivraisonFieldRefInput<$PrismaModel>
    in?: $Enums.StatutLivraison[] | ListEnumStatutLivraisonFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutLivraison[] | ListEnumStatutLivraisonFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutLivraisonFilter<$PrismaModel> | $Enums.StatutLivraison
  }

  export type NestedEnumStatutLivraisonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutLivraison | EnumStatutLivraisonFieldRefInput<$PrismaModel>
    in?: $Enums.StatutLivraison[] | ListEnumStatutLivraisonFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutLivraison[] | ListEnumStatutLivraisonFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutLivraisonWithAggregatesFilter<$PrismaModel> | $Enums.StatutLivraison
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutLivraisonFilter<$PrismaModel>
    _max?: NestedEnumStatutLivraisonFilter<$PrismaModel>
  }

  export type NestedEnumStatutAlerteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAlerte | EnumStatutAlerteFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAlerte[] | ListEnumStatutAlerteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutAlerte[] | ListEnumStatutAlerteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutAlerteFilter<$PrismaModel> | $Enums.StatutAlerte
  }

  export type NestedEnumStatutAlerteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutAlerte | EnumStatutAlerteFieldRefInput<$PrismaModel>
    in?: $Enums.StatutAlerte[] | ListEnumStatutAlerteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutAlerte[] | ListEnumStatutAlerteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutAlerteWithAggregatesFilter<$PrismaModel> | $Enums.StatutAlerte
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutAlerteFilter<$PrismaModel>
    _max?: NestedEnumStatutAlerteFilter<$PrismaModel>
  }

  export type ProduitCreateWithoutFournisseurInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorie: CategorieCreateNestedOneWithoutProduitsInput
    lignesCommande?: LigneCommandeCreateNestedManyWithoutProduitInput
    alertesStock?: AlerteStockCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutFournisseurInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorieId: string
    lignesCommande?: LigneCommandeUncheckedCreateNestedManyWithoutProduitInput
    alertesStock?: AlerteStockUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutFournisseurInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutFournisseurInput, ProduitUncheckedCreateWithoutFournisseurInput>
  }

  export type ProduitCreateManyFournisseurInputEnvelope = {
    data: ProduitCreateManyFournisseurInput | ProduitCreateManyFournisseurInput[]
    skipDuplicates?: boolean
  }

  export type CommandeCreateWithoutClientInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    lignesCommande?: LigneCommandeCreateNestedManyWithoutCommandeInput
    livraison?: LivraisonCreateNestedOneWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutClientInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    lignesCommande?: LigneCommandeUncheckedCreateNestedManyWithoutCommandeInput
    livraison?: LivraisonUncheckedCreateNestedOneWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutClientInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeCreateManyClientInputEnvelope = {
    data: CommandeCreateManyClientInput | CommandeCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type LivraisonCreateWithoutLivreurInput = {
    idLivraison?: string
    dateExpedition: Date | string
    dateLivraisonPrevue: Date | string
    dateLivraisonEffective?: Date | string | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur?: string | null
    signatureClient?: string | null
    commande: CommandeCreateNestedOneWithoutLivraisonInput
  }

  export type LivraisonUncheckedCreateWithoutLivreurInput = {
    idLivraison?: string
    dateExpedition: Date | string
    dateLivraisonPrevue: Date | string
    dateLivraisonEffective?: Date | string | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur?: string | null
    signatureClient?: string | null
    commandeId: string
  }

  export type LivraisonCreateOrConnectWithoutLivreurInput = {
    where: LivraisonWhereUniqueInput
    create: XOR<LivraisonCreateWithoutLivreurInput, LivraisonUncheckedCreateWithoutLivreurInput>
  }

  export type LivraisonCreateManyLivreurInputEnvelope = {
    data: LivraisonCreateManyLivreurInput | LivraisonCreateManyLivreurInput[]
    skipDuplicates?: boolean
  }

  export type RapportCreateWithoutAdminInput = {
    idRapport?: string
    typeRapport: string
    dateGeneration?: Date | string
    periode: string
    contenuPDF: string
  }

  export type RapportUncheckedCreateWithoutAdminInput = {
    idRapport?: string
    typeRapport: string
    dateGeneration?: Date | string
    periode: string
    contenuPDF: string
  }

  export type RapportCreateOrConnectWithoutAdminInput = {
    where: RapportWhereUniqueInput
    create: XOR<RapportCreateWithoutAdminInput, RapportUncheckedCreateWithoutAdminInput>
  }

  export type RapportCreateManyAdminInputEnvelope = {
    data: RapportCreateManyAdminInput | RapportCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AlerteStockCreateWithoutAdminInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    produit: ProduitCreateNestedOneWithoutAlertesStockInput
  }

  export type AlerteStockUncheckedCreateWithoutAdminInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    produitId: string
  }

  export type AlerteStockCreateOrConnectWithoutAdminInput = {
    where: AlerteStockWhereUniqueInput
    create: XOR<AlerteStockCreateWithoutAdminInput, AlerteStockUncheckedCreateWithoutAdminInput>
  }

  export type AlerteStockCreateManyAdminInputEnvelope = {
    data: AlerteStockCreateManyAdminInput | AlerteStockCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ProduitUpsertWithWhereUniqueWithoutFournisseurInput = {
    where: ProduitWhereUniqueInput
    update: XOR<ProduitUpdateWithoutFournisseurInput, ProduitUncheckedUpdateWithoutFournisseurInput>
    create: XOR<ProduitCreateWithoutFournisseurInput, ProduitUncheckedCreateWithoutFournisseurInput>
  }

  export type ProduitUpdateWithWhereUniqueWithoutFournisseurInput = {
    where: ProduitWhereUniqueInput
    data: XOR<ProduitUpdateWithoutFournisseurInput, ProduitUncheckedUpdateWithoutFournisseurInput>
  }

  export type ProduitUpdateManyWithWhereWithoutFournisseurInput = {
    where: ProduitScalarWhereInput
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyWithoutFournisseurInput>
  }

  export type ProduitScalarWhereInput = {
    AND?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    OR?: ProduitScalarWhereInput[]
    NOT?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    idProduit?: StringFilter<"Produit"> | string
    nom?: StringFilter<"Produit"> | string
    description?: StringFilter<"Produit"> | string
    prix?: FloatFilter<"Produit"> | number
    quantiteStock?: IntFilter<"Produit"> | number
    typeProduit?: StringFilter<"Produit"> | string
    imageURL?: StringFilter<"Produit"> | string
    dateAjout?: DateTimeFilter<"Produit"> | Date | string
    statutProduit?: EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit
    categorieId?: StringFilter<"Produit"> | string
    fournisseurId?: StringFilter<"Produit"> | string
  }

  export type CommandeUpsertWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
  }

  export type CommandeUpdateManyWithWhereWithoutClientInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutClientInput>
  }

  export type CommandeScalarWhereInput = {
    AND?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    OR?: CommandeScalarWhereInput[]
    NOT?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    idCommande?: StringFilter<"Commande"> | string
    numeroCommande?: StringFilter<"Commande"> | string
    dateCommande?: DateTimeFilter<"Commande"> | Date | string
    statutCommande?: EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande
    totalCommande?: FloatFilter<"Commande"> | number
    taxesAppliquees?: FloatFilter<"Commande"> | number
    adresseLivraison?: StringFilter<"Commande"> | string
    modePaiement?: StringFilter<"Commande"> | string
    datePaiement?: DateTimeNullableFilter<"Commande"> | Date | string | null
    clientId?: StringFilter<"Commande"> | string
  }

  export type LivraisonUpsertWithWhereUniqueWithoutLivreurInput = {
    where: LivraisonWhereUniqueInput
    update: XOR<LivraisonUpdateWithoutLivreurInput, LivraisonUncheckedUpdateWithoutLivreurInput>
    create: XOR<LivraisonCreateWithoutLivreurInput, LivraisonUncheckedCreateWithoutLivreurInput>
  }

  export type LivraisonUpdateWithWhereUniqueWithoutLivreurInput = {
    where: LivraisonWhereUniqueInput
    data: XOR<LivraisonUpdateWithoutLivreurInput, LivraisonUncheckedUpdateWithoutLivreurInput>
  }

  export type LivraisonUpdateManyWithWhereWithoutLivreurInput = {
    where: LivraisonScalarWhereInput
    data: XOR<LivraisonUpdateManyMutationInput, LivraisonUncheckedUpdateManyWithoutLivreurInput>
  }

  export type LivraisonScalarWhereInput = {
    AND?: LivraisonScalarWhereInput | LivraisonScalarWhereInput[]
    OR?: LivraisonScalarWhereInput[]
    NOT?: LivraisonScalarWhereInput | LivraisonScalarWhereInput[]
    idLivraison?: StringFilter<"Livraison"> | string
    dateExpedition?: DateTimeFilter<"Livraison"> | Date | string
    dateLivraisonPrevue?: DateTimeFilter<"Livraison"> | Date | string
    dateLivraisonEffective?: DateTimeNullableFilter<"Livraison"> | Date | string | null
    statutLivraison?: EnumStatutLivraisonFilter<"Livraison"> | $Enums.StatutLivraison
    notesLivreur?: StringNullableFilter<"Livraison"> | string | null
    signatureClient?: StringNullableFilter<"Livraison"> | string | null
    commandeId?: StringFilter<"Livraison"> | string
    livreurId?: StringFilter<"Livraison"> | string
  }

  export type RapportUpsertWithWhereUniqueWithoutAdminInput = {
    where: RapportWhereUniqueInput
    update: XOR<RapportUpdateWithoutAdminInput, RapportUncheckedUpdateWithoutAdminInput>
    create: XOR<RapportCreateWithoutAdminInput, RapportUncheckedCreateWithoutAdminInput>
  }

  export type RapportUpdateWithWhereUniqueWithoutAdminInput = {
    where: RapportWhereUniqueInput
    data: XOR<RapportUpdateWithoutAdminInput, RapportUncheckedUpdateWithoutAdminInput>
  }

  export type RapportUpdateManyWithWhereWithoutAdminInput = {
    where: RapportScalarWhereInput
    data: XOR<RapportUpdateManyMutationInput, RapportUncheckedUpdateManyWithoutAdminInput>
  }

  export type RapportScalarWhereInput = {
    AND?: RapportScalarWhereInput | RapportScalarWhereInput[]
    OR?: RapportScalarWhereInput[]
    NOT?: RapportScalarWhereInput | RapportScalarWhereInput[]
    idRapport?: StringFilter<"Rapport"> | string
    typeRapport?: StringFilter<"Rapport"> | string
    dateGeneration?: DateTimeFilter<"Rapport"> | Date | string
    periode?: StringFilter<"Rapport"> | string
    contenuPDF?: StringFilter<"Rapport"> | string
    adminId?: StringFilter<"Rapport"> | string
  }

  export type AlerteStockUpsertWithWhereUniqueWithoutAdminInput = {
    where: AlerteStockWhereUniqueInput
    update: XOR<AlerteStockUpdateWithoutAdminInput, AlerteStockUncheckedUpdateWithoutAdminInput>
    create: XOR<AlerteStockCreateWithoutAdminInput, AlerteStockUncheckedCreateWithoutAdminInput>
  }

  export type AlerteStockUpdateWithWhereUniqueWithoutAdminInput = {
    where: AlerteStockWhereUniqueInput
    data: XOR<AlerteStockUpdateWithoutAdminInput, AlerteStockUncheckedUpdateWithoutAdminInput>
  }

  export type AlerteStockUpdateManyWithWhereWithoutAdminInput = {
    where: AlerteStockScalarWhereInput
    data: XOR<AlerteStockUpdateManyMutationInput, AlerteStockUncheckedUpdateManyWithoutAdminInput>
  }

  export type AlerteStockScalarWhereInput = {
    AND?: AlerteStockScalarWhereInput | AlerteStockScalarWhereInput[]
    OR?: AlerteStockScalarWhereInput[]
    NOT?: AlerteStockScalarWhereInput | AlerteStockScalarWhereInput[]
    idAlerte?: StringFilter<"AlerteStock"> | string
    seuilMinimum?: IntFilter<"AlerteStock"> | number
    dateAlerte?: DateTimeFilter<"AlerteStock"> | Date | string
    statutAlerte?: EnumStatutAlerteFilter<"AlerteStock"> | $Enums.StatutAlerte
    produitId?: StringFilter<"AlerteStock"> | string
    adminId?: StringFilter<"AlerteStock"> | string
  }

  export type CategorieCreateWithoutProduitsInput = {
    idCategorie?: string
    nomCategorie: string
    descriptionCategorie: string
    typeCategorie: string
    imageCategorie: string
  }

  export type CategorieUncheckedCreateWithoutProduitsInput = {
    idCategorie?: string
    nomCategorie: string
    descriptionCategorie: string
    typeCategorie: string
    imageCategorie: string
  }

  export type CategorieCreateOrConnectWithoutProduitsInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutProduitsInput, CategorieUncheckedCreateWithoutProduitsInput>
  }

  export type UserCreateWithoutProduitsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    commandes?: CommandeCreateNestedManyWithoutClientInput
    livraisons?: LivraisonCreateNestedManyWithoutLivreurInput
    rapports?: RapportCreateNestedManyWithoutAdminInput
    alertesGerees?: AlerteStockCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutProduitsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    livraisons?: LivraisonUncheckedCreateNestedManyWithoutLivreurInput
    rapports?: RapportUncheckedCreateNestedManyWithoutAdminInput
    alertesGerees?: AlerteStockUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutProduitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProduitsInput, UserUncheckedCreateWithoutProduitsInput>
  }

  export type LigneCommandeCreateWithoutProduitInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    commande: CommandeCreateNestedOneWithoutLignesCommandeInput
  }

  export type LigneCommandeUncheckedCreateWithoutProduitInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    commandeId: string
  }

  export type LigneCommandeCreateOrConnectWithoutProduitInput = {
    where: LigneCommandeWhereUniqueInput
    create: XOR<LigneCommandeCreateWithoutProduitInput, LigneCommandeUncheckedCreateWithoutProduitInput>
  }

  export type LigneCommandeCreateManyProduitInputEnvelope = {
    data: LigneCommandeCreateManyProduitInput | LigneCommandeCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type AlerteStockCreateWithoutProduitInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    admin: UserCreateNestedOneWithoutAlertesGereesInput
  }

  export type AlerteStockUncheckedCreateWithoutProduitInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    adminId: string
  }

  export type AlerteStockCreateOrConnectWithoutProduitInput = {
    where: AlerteStockWhereUniqueInput
    create: XOR<AlerteStockCreateWithoutProduitInput, AlerteStockUncheckedCreateWithoutProduitInput>
  }

  export type AlerteStockCreateManyProduitInputEnvelope = {
    data: AlerteStockCreateManyProduitInput | AlerteStockCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type CategorieUpsertWithoutProduitsInput = {
    update: XOR<CategorieUpdateWithoutProduitsInput, CategorieUncheckedUpdateWithoutProduitsInput>
    create: XOR<CategorieCreateWithoutProduitsInput, CategorieUncheckedCreateWithoutProduitsInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutProduitsInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutProduitsInput, CategorieUncheckedUpdateWithoutProduitsInput>
  }

  export type CategorieUpdateWithoutProduitsInput = {
    idCategorie?: StringFieldUpdateOperationsInput | string
    nomCategorie?: StringFieldUpdateOperationsInput | string
    descriptionCategorie?: StringFieldUpdateOperationsInput | string
    typeCategorie?: StringFieldUpdateOperationsInput | string
    imageCategorie?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieUncheckedUpdateWithoutProduitsInput = {
    idCategorie?: StringFieldUpdateOperationsInput | string
    nomCategorie?: StringFieldUpdateOperationsInput | string
    descriptionCategorie?: StringFieldUpdateOperationsInput | string
    typeCategorie?: StringFieldUpdateOperationsInput | string
    imageCategorie?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutProduitsInput = {
    update: XOR<UserUpdateWithoutProduitsInput, UserUncheckedUpdateWithoutProduitsInput>
    create: XOR<UserCreateWithoutProduitsInput, UserUncheckedCreateWithoutProduitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProduitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProduitsInput, UserUncheckedUpdateWithoutProduitsInput>
  }

  export type UserUpdateWithoutProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    livraisons?: LivraisonUpdateManyWithoutLivreurNestedInput
    rapports?: RapportUpdateManyWithoutAdminNestedInput
    alertesGerees?: AlerteStockUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    livraisons?: LivraisonUncheckedUpdateManyWithoutLivreurNestedInput
    rapports?: RapportUncheckedUpdateManyWithoutAdminNestedInput
    alertesGerees?: AlerteStockUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type LigneCommandeUpsertWithWhereUniqueWithoutProduitInput = {
    where: LigneCommandeWhereUniqueInput
    update: XOR<LigneCommandeUpdateWithoutProduitInput, LigneCommandeUncheckedUpdateWithoutProduitInput>
    create: XOR<LigneCommandeCreateWithoutProduitInput, LigneCommandeUncheckedCreateWithoutProduitInput>
  }

  export type LigneCommandeUpdateWithWhereUniqueWithoutProduitInput = {
    where: LigneCommandeWhereUniqueInput
    data: XOR<LigneCommandeUpdateWithoutProduitInput, LigneCommandeUncheckedUpdateWithoutProduitInput>
  }

  export type LigneCommandeUpdateManyWithWhereWithoutProduitInput = {
    where: LigneCommandeScalarWhereInput
    data: XOR<LigneCommandeUpdateManyMutationInput, LigneCommandeUncheckedUpdateManyWithoutProduitInput>
  }

  export type LigneCommandeScalarWhereInput = {
    AND?: LigneCommandeScalarWhereInput | LigneCommandeScalarWhereInput[]
    OR?: LigneCommandeScalarWhereInput[]
    NOT?: LigneCommandeScalarWhereInput | LigneCommandeScalarWhereInput[]
    idLigneCommande?: StringFilter<"LigneCommande"> | string
    quantite?: IntFilter<"LigneCommande"> | number
    prixUnitaire?: FloatFilter<"LigneCommande"> | number
    commandeId?: StringFilter<"LigneCommande"> | string
    produitId?: StringFilter<"LigneCommande"> | string
  }

  export type AlerteStockUpsertWithWhereUniqueWithoutProduitInput = {
    where: AlerteStockWhereUniqueInput
    update: XOR<AlerteStockUpdateWithoutProduitInput, AlerteStockUncheckedUpdateWithoutProduitInput>
    create: XOR<AlerteStockCreateWithoutProduitInput, AlerteStockUncheckedCreateWithoutProduitInput>
  }

  export type AlerteStockUpdateWithWhereUniqueWithoutProduitInput = {
    where: AlerteStockWhereUniqueInput
    data: XOR<AlerteStockUpdateWithoutProduitInput, AlerteStockUncheckedUpdateWithoutProduitInput>
  }

  export type AlerteStockUpdateManyWithWhereWithoutProduitInput = {
    where: AlerteStockScalarWhereInput
    data: XOR<AlerteStockUpdateManyMutationInput, AlerteStockUncheckedUpdateManyWithoutProduitInput>
  }

  export type ProduitCreateWithoutCategorieInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    fournisseur: UserCreateNestedOneWithoutProduitsInput
    lignesCommande?: LigneCommandeCreateNestedManyWithoutProduitInput
    alertesStock?: AlerteStockCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutCategorieInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    fournisseurId: string
    lignesCommande?: LigneCommandeUncheckedCreateNestedManyWithoutProduitInput
    alertesStock?: AlerteStockUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutCategorieInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput>
  }

  export type ProduitCreateManyCategorieInputEnvelope = {
    data: ProduitCreateManyCategorieInput | ProduitCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type ProduitUpsertWithWhereUniqueWithoutCategorieInput = {
    where: ProduitWhereUniqueInput
    update: XOR<ProduitUpdateWithoutCategorieInput, ProduitUncheckedUpdateWithoutCategorieInput>
    create: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput>
  }

  export type ProduitUpdateWithWhereUniqueWithoutCategorieInput = {
    where: ProduitWhereUniqueInput
    data: XOR<ProduitUpdateWithoutCategorieInput, ProduitUncheckedUpdateWithoutCategorieInput>
  }

  export type ProduitUpdateManyWithWhereWithoutCategorieInput = {
    where: ProduitScalarWhereInput
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyWithoutCategorieInput>
  }

  export type UserCreateWithoutCommandesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitCreateNestedManyWithoutFournisseurInput
    livraisons?: LivraisonCreateNestedManyWithoutLivreurInput
    rapports?: RapportCreateNestedManyWithoutAdminInput
    alertesGerees?: AlerteStockCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutCommandesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitUncheckedCreateNestedManyWithoutFournisseurInput
    livraisons?: LivraisonUncheckedCreateNestedManyWithoutLivreurInput
    rapports?: RapportUncheckedCreateNestedManyWithoutAdminInput
    alertesGerees?: AlerteStockUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutCommandesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommandesInput, UserUncheckedCreateWithoutCommandesInput>
  }

  export type LigneCommandeCreateWithoutCommandeInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    produit: ProduitCreateNestedOneWithoutLignesCommandeInput
  }

  export type LigneCommandeUncheckedCreateWithoutCommandeInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    produitId: string
  }

  export type LigneCommandeCreateOrConnectWithoutCommandeInput = {
    where: LigneCommandeWhereUniqueInput
    create: XOR<LigneCommandeCreateWithoutCommandeInput, LigneCommandeUncheckedCreateWithoutCommandeInput>
  }

  export type LigneCommandeCreateManyCommandeInputEnvelope = {
    data: LigneCommandeCreateManyCommandeInput | LigneCommandeCreateManyCommandeInput[]
    skipDuplicates?: boolean
  }

  export type LivraisonCreateWithoutCommandeInput = {
    idLivraison?: string
    dateExpedition: Date | string
    dateLivraisonPrevue: Date | string
    dateLivraisonEffective?: Date | string | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur?: string | null
    signatureClient?: string | null
    livreur: UserCreateNestedOneWithoutLivraisonsInput
  }

  export type LivraisonUncheckedCreateWithoutCommandeInput = {
    idLivraison?: string
    dateExpedition: Date | string
    dateLivraisonPrevue: Date | string
    dateLivraisonEffective?: Date | string | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur?: string | null
    signatureClient?: string | null
    livreurId: string
  }

  export type LivraisonCreateOrConnectWithoutCommandeInput = {
    where: LivraisonWhereUniqueInput
    create: XOR<LivraisonCreateWithoutCommandeInput, LivraisonUncheckedCreateWithoutCommandeInput>
  }

  export type UserUpsertWithoutCommandesInput = {
    update: XOR<UserUpdateWithoutCommandesInput, UserUncheckedUpdateWithoutCommandesInput>
    create: XOR<UserCreateWithoutCommandesInput, UserUncheckedCreateWithoutCommandesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommandesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommandesInput, UserUncheckedUpdateWithoutCommandesInput>
  }

  export type UserUpdateWithoutCommandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUpdateManyWithoutFournisseurNestedInput
    livraisons?: LivraisonUpdateManyWithoutLivreurNestedInput
    rapports?: RapportUpdateManyWithoutAdminNestedInput
    alertesGerees?: AlerteStockUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutCommandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUncheckedUpdateManyWithoutFournisseurNestedInput
    livraisons?: LivraisonUncheckedUpdateManyWithoutLivreurNestedInput
    rapports?: RapportUncheckedUpdateManyWithoutAdminNestedInput
    alertesGerees?: AlerteStockUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type LigneCommandeUpsertWithWhereUniqueWithoutCommandeInput = {
    where: LigneCommandeWhereUniqueInput
    update: XOR<LigneCommandeUpdateWithoutCommandeInput, LigneCommandeUncheckedUpdateWithoutCommandeInput>
    create: XOR<LigneCommandeCreateWithoutCommandeInput, LigneCommandeUncheckedCreateWithoutCommandeInput>
  }

  export type LigneCommandeUpdateWithWhereUniqueWithoutCommandeInput = {
    where: LigneCommandeWhereUniqueInput
    data: XOR<LigneCommandeUpdateWithoutCommandeInput, LigneCommandeUncheckedUpdateWithoutCommandeInput>
  }

  export type LigneCommandeUpdateManyWithWhereWithoutCommandeInput = {
    where: LigneCommandeScalarWhereInput
    data: XOR<LigneCommandeUpdateManyMutationInput, LigneCommandeUncheckedUpdateManyWithoutCommandeInput>
  }

  export type LivraisonUpsertWithoutCommandeInput = {
    update: XOR<LivraisonUpdateWithoutCommandeInput, LivraisonUncheckedUpdateWithoutCommandeInput>
    create: XOR<LivraisonCreateWithoutCommandeInput, LivraisonUncheckedCreateWithoutCommandeInput>
    where?: LivraisonWhereInput
  }

  export type LivraisonUpdateToOneWithWhereWithoutCommandeInput = {
    where?: LivraisonWhereInput
    data: XOR<LivraisonUpdateWithoutCommandeInput, LivraisonUncheckedUpdateWithoutCommandeInput>
  }

  export type LivraisonUpdateWithoutCommandeInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
    livreur?: UserUpdateOneRequiredWithoutLivraisonsNestedInput
  }

  export type LivraisonUncheckedUpdateWithoutCommandeInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
    livreurId?: StringFieldUpdateOperationsInput | string
  }

  export type CommandeCreateWithoutLignesCommandeInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    client: UserCreateNestedOneWithoutCommandesInput
    livraison?: LivraisonCreateNestedOneWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutLignesCommandeInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    clientId: string
    livraison?: LivraisonUncheckedCreateNestedOneWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutLignesCommandeInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutLignesCommandeInput, CommandeUncheckedCreateWithoutLignesCommandeInput>
  }

  export type ProduitCreateWithoutLignesCommandeInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorie: CategorieCreateNestedOneWithoutProduitsInput
    fournisseur: UserCreateNestedOneWithoutProduitsInput
    alertesStock?: AlerteStockCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutLignesCommandeInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorieId: string
    fournisseurId: string
    alertesStock?: AlerteStockUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutLignesCommandeInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutLignesCommandeInput, ProduitUncheckedCreateWithoutLignesCommandeInput>
  }

  export type CommandeUpsertWithoutLignesCommandeInput = {
    update: XOR<CommandeUpdateWithoutLignesCommandeInput, CommandeUncheckedUpdateWithoutLignesCommandeInput>
    create: XOR<CommandeCreateWithoutLignesCommandeInput, CommandeUncheckedCreateWithoutLignesCommandeInput>
    where?: CommandeWhereInput
  }

  export type CommandeUpdateToOneWithWhereWithoutLignesCommandeInput = {
    where?: CommandeWhereInput
    data: XOR<CommandeUpdateWithoutLignesCommandeInput, CommandeUncheckedUpdateWithoutLignesCommandeInput>
  }

  export type CommandeUpdateWithoutLignesCommandeInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: UserUpdateOneRequiredWithoutCommandesNestedInput
    livraison?: LivraisonUpdateOneWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutLignesCommandeInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    livraison?: LivraisonUncheckedUpdateOneWithoutCommandeNestedInput
  }

  export type ProduitUpsertWithoutLignesCommandeInput = {
    update: XOR<ProduitUpdateWithoutLignesCommandeInput, ProduitUncheckedUpdateWithoutLignesCommandeInput>
    create: XOR<ProduitCreateWithoutLignesCommandeInput, ProduitUncheckedCreateWithoutLignesCommandeInput>
    where?: ProduitWhereInput
  }

  export type ProduitUpdateToOneWithWhereWithoutLignesCommandeInput = {
    where?: ProduitWhereInput
    data: XOR<ProduitUpdateWithoutLignesCommandeInput, ProduitUncheckedUpdateWithoutLignesCommandeInput>
  }

  export type ProduitUpdateWithoutLignesCommandeInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorie?: CategorieUpdateOneRequiredWithoutProduitsNestedInput
    fournisseur?: UserUpdateOneRequiredWithoutProduitsNestedInput
    alertesStock?: AlerteStockUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutLignesCommandeInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorieId?: StringFieldUpdateOperationsInput | string
    fournisseurId?: StringFieldUpdateOperationsInput | string
    alertesStock?: AlerteStockUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type CommandeCreateWithoutLivraisonInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    client: UserCreateNestedOneWithoutCommandesInput
    lignesCommande?: LigneCommandeCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutLivraisonInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
    clientId: string
    lignesCommande?: LigneCommandeUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutLivraisonInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutLivraisonInput, CommandeUncheckedCreateWithoutLivraisonInput>
  }

  export type UserCreateWithoutLivraisonsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitCreateNestedManyWithoutFournisseurInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
    rapports?: RapportCreateNestedManyWithoutAdminInput
    alertesGerees?: AlerteStockCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutLivraisonsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitUncheckedCreateNestedManyWithoutFournisseurInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    rapports?: RapportUncheckedCreateNestedManyWithoutAdminInput
    alertesGerees?: AlerteStockUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutLivraisonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLivraisonsInput, UserUncheckedCreateWithoutLivraisonsInput>
  }

  export type CommandeUpsertWithoutLivraisonInput = {
    update: XOR<CommandeUpdateWithoutLivraisonInput, CommandeUncheckedUpdateWithoutLivraisonInput>
    create: XOR<CommandeCreateWithoutLivraisonInput, CommandeUncheckedCreateWithoutLivraisonInput>
    where?: CommandeWhereInput
  }

  export type CommandeUpdateToOneWithWhereWithoutLivraisonInput = {
    where?: CommandeWhereInput
    data: XOR<CommandeUpdateWithoutLivraisonInput, CommandeUncheckedUpdateWithoutLivraisonInput>
  }

  export type CommandeUpdateWithoutLivraisonInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: UserUpdateOneRequiredWithoutCommandesNestedInput
    lignesCommande?: LigneCommandeUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutLivraisonInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    lignesCommande?: LigneCommandeUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type UserUpsertWithoutLivraisonsInput = {
    update: XOR<UserUpdateWithoutLivraisonsInput, UserUncheckedUpdateWithoutLivraisonsInput>
    create: XOR<UserCreateWithoutLivraisonsInput, UserUncheckedCreateWithoutLivraisonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLivraisonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLivraisonsInput, UserUncheckedUpdateWithoutLivraisonsInput>
  }

  export type UserUpdateWithoutLivraisonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUpdateManyWithoutFournisseurNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    rapports?: RapportUpdateManyWithoutAdminNestedInput
    alertesGerees?: AlerteStockUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutLivraisonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUncheckedUpdateManyWithoutFournisseurNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    rapports?: RapportUncheckedUpdateManyWithoutAdminNestedInput
    alertesGerees?: AlerteStockUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserCreateWithoutRapportsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitCreateNestedManyWithoutFournisseurInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
    livraisons?: LivraisonCreateNestedManyWithoutLivreurInput
    alertesGerees?: AlerteStockCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutRapportsInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitUncheckedCreateNestedManyWithoutFournisseurInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    livraisons?: LivraisonUncheckedCreateNestedManyWithoutLivreurInput
    alertesGerees?: AlerteStockUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutRapportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRapportsInput, UserUncheckedCreateWithoutRapportsInput>
  }

  export type UserUpsertWithoutRapportsInput = {
    update: XOR<UserUpdateWithoutRapportsInput, UserUncheckedUpdateWithoutRapportsInput>
    create: XOR<UserCreateWithoutRapportsInput, UserUncheckedCreateWithoutRapportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRapportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRapportsInput, UserUncheckedUpdateWithoutRapportsInput>
  }

  export type UserUpdateWithoutRapportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUpdateManyWithoutFournisseurNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    livraisons?: LivraisonUpdateManyWithoutLivreurNestedInput
    alertesGerees?: AlerteStockUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutRapportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUncheckedUpdateManyWithoutFournisseurNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    livraisons?: LivraisonUncheckedUpdateManyWithoutLivreurNestedInput
    alertesGerees?: AlerteStockUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProduitCreateWithoutAlertesStockInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorie: CategorieCreateNestedOneWithoutProduitsInput
    fournisseur: UserCreateNestedOneWithoutProduitsInput
    lignesCommande?: LigneCommandeCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutAlertesStockInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorieId: string
    fournisseurId: string
    lignesCommande?: LigneCommandeUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutAlertesStockInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutAlertesStockInput, ProduitUncheckedCreateWithoutAlertesStockInput>
  }

  export type UserCreateWithoutAlertesGereesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitCreateNestedManyWithoutFournisseurInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
    livraisons?: LivraisonCreateNestedManyWithoutLivreurInput
    rapports?: RapportCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutAlertesGereesInput = {
    id?: string
    nom: string
    prenom: string
    email: string
    mdp: string
    adresse?: string | null
    statut?: $Enums.Statut
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    produits?: ProduitUncheckedCreateNestedManyWithoutFournisseurInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    livraisons?: LivraisonUncheckedCreateNestedManyWithoutLivreurInput
    rapports?: RapportUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutAlertesGereesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertesGereesInput, UserUncheckedCreateWithoutAlertesGereesInput>
  }

  export type ProduitUpsertWithoutAlertesStockInput = {
    update: XOR<ProduitUpdateWithoutAlertesStockInput, ProduitUncheckedUpdateWithoutAlertesStockInput>
    create: XOR<ProduitCreateWithoutAlertesStockInput, ProduitUncheckedCreateWithoutAlertesStockInput>
    where?: ProduitWhereInput
  }

  export type ProduitUpdateToOneWithWhereWithoutAlertesStockInput = {
    where?: ProduitWhereInput
    data: XOR<ProduitUpdateWithoutAlertesStockInput, ProduitUncheckedUpdateWithoutAlertesStockInput>
  }

  export type ProduitUpdateWithoutAlertesStockInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorie?: CategorieUpdateOneRequiredWithoutProduitsNestedInput
    fournisseur?: UserUpdateOneRequiredWithoutProduitsNestedInput
    lignesCommande?: LigneCommandeUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutAlertesStockInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorieId?: StringFieldUpdateOperationsInput | string
    fournisseurId?: StringFieldUpdateOperationsInput | string
    lignesCommande?: LigneCommandeUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type UserUpsertWithoutAlertesGereesInput = {
    update: XOR<UserUpdateWithoutAlertesGereesInput, UserUncheckedUpdateWithoutAlertesGereesInput>
    create: XOR<UserCreateWithoutAlertesGereesInput, UserUncheckedCreateWithoutAlertesGereesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertesGereesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertesGereesInput, UserUncheckedUpdateWithoutAlertesGereesInput>
  }

  export type UserUpdateWithoutAlertesGereesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUpdateManyWithoutFournisseurNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    livraisons?: LivraisonUpdateManyWithoutLivreurNestedInput
    rapports?: RapportUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertesGereesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mdp?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produits?: ProduitUncheckedUpdateManyWithoutFournisseurNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    livraisons?: LivraisonUncheckedUpdateManyWithoutLivreurNestedInput
    rapports?: RapportUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ProduitCreateManyFournisseurInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    categorieId: string
  }

  export type CommandeCreateManyClientInput = {
    idCommande?: string
    numeroCommande: string
    dateCommande?: Date | string
    statutCommande: $Enums.StatutCommande
    totalCommande: number
    taxesAppliquees: number
    adresseLivraison: string
    modePaiement: string
    datePaiement?: Date | string | null
  }

  export type LivraisonCreateManyLivreurInput = {
    idLivraison?: string
    dateExpedition: Date | string
    dateLivraisonPrevue: Date | string
    dateLivraisonEffective?: Date | string | null
    statutLivraison: $Enums.StatutLivraison
    notesLivreur?: string | null
    signatureClient?: string | null
    commandeId: string
  }

  export type RapportCreateManyAdminInput = {
    idRapport?: string
    typeRapport: string
    dateGeneration?: Date | string
    periode: string
    contenuPDF: string
  }

  export type AlerteStockCreateManyAdminInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    produitId: string
  }

  export type ProduitUpdateWithoutFournisseurInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorie?: CategorieUpdateOneRequiredWithoutProduitsNestedInput
    lignesCommande?: LigneCommandeUpdateManyWithoutProduitNestedInput
    alertesStock?: AlerteStockUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutFournisseurInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorieId?: StringFieldUpdateOperationsInput | string
    lignesCommande?: LigneCommandeUncheckedUpdateManyWithoutProduitNestedInput
    alertesStock?: AlerteStockUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateManyWithoutFournisseurInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    categorieId?: StringFieldUpdateOperationsInput | string
  }

  export type CommandeUpdateWithoutClientInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lignesCommande?: LigneCommandeUpdateManyWithoutCommandeNestedInput
    livraison?: LivraisonUpdateOneWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutClientInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lignesCommande?: LigneCommandeUncheckedUpdateManyWithoutCommandeNestedInput
    livraison?: LivraisonUncheckedUpdateOneWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutClientInput = {
    idCommande?: StringFieldUpdateOperationsInput | string
    numeroCommande?: StringFieldUpdateOperationsInput | string
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    statutCommande?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    totalCommande?: FloatFieldUpdateOperationsInput | number
    taxesAppliquees?: FloatFieldUpdateOperationsInput | number
    adresseLivraison?: StringFieldUpdateOperationsInput | string
    modePaiement?: StringFieldUpdateOperationsInput | string
    datePaiement?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LivraisonUpdateWithoutLivreurInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
    commande?: CommandeUpdateOneRequiredWithoutLivraisonNestedInput
  }

  export type LivraisonUncheckedUpdateWithoutLivreurInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
    commandeId?: StringFieldUpdateOperationsInput | string
  }

  export type LivraisonUncheckedUpdateManyWithoutLivreurInput = {
    idLivraison?: StringFieldUpdateOperationsInput | string
    dateExpedition?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonPrevue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraisonEffective?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statutLivraison?: EnumStatutLivraisonFieldUpdateOperationsInput | $Enums.StatutLivraison
    notesLivreur?: NullableStringFieldUpdateOperationsInput | string | null
    signatureClient?: NullableStringFieldUpdateOperationsInput | string | null
    commandeId?: StringFieldUpdateOperationsInput | string
  }

  export type RapportUpdateWithoutAdminInput = {
    idRapport?: StringFieldUpdateOperationsInput | string
    typeRapport?: StringFieldUpdateOperationsInput | string
    dateGeneration?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: StringFieldUpdateOperationsInput | string
    contenuPDF?: StringFieldUpdateOperationsInput | string
  }

  export type RapportUncheckedUpdateWithoutAdminInput = {
    idRapport?: StringFieldUpdateOperationsInput | string
    typeRapport?: StringFieldUpdateOperationsInput | string
    dateGeneration?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: StringFieldUpdateOperationsInput | string
    contenuPDF?: StringFieldUpdateOperationsInput | string
  }

  export type RapportUncheckedUpdateManyWithoutAdminInput = {
    idRapport?: StringFieldUpdateOperationsInput | string
    typeRapport?: StringFieldUpdateOperationsInput | string
    dateGeneration?: DateTimeFieldUpdateOperationsInput | Date | string
    periode?: StringFieldUpdateOperationsInput | string
    contenuPDF?: StringFieldUpdateOperationsInput | string
  }

  export type AlerteStockUpdateWithoutAdminInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    produit?: ProduitUpdateOneRequiredWithoutAlertesStockNestedInput
  }

  export type AlerteStockUncheckedUpdateWithoutAdminInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    produitId?: StringFieldUpdateOperationsInput | string
  }

  export type AlerteStockUncheckedUpdateManyWithoutAdminInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    produitId?: StringFieldUpdateOperationsInput | string
  }

  export type LigneCommandeCreateManyProduitInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    commandeId: string
  }

  export type AlerteStockCreateManyProduitInput = {
    idAlerte?: string
    seuilMinimum: number
    dateAlerte?: Date | string
    statutAlerte: $Enums.StatutAlerte
    adminId: string
  }

  export type LigneCommandeUpdateWithoutProduitInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    commande?: CommandeUpdateOneRequiredWithoutLignesCommandeNestedInput
  }

  export type LigneCommandeUncheckedUpdateWithoutProduitInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    commandeId?: StringFieldUpdateOperationsInput | string
  }

  export type LigneCommandeUncheckedUpdateManyWithoutProduitInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    commandeId?: StringFieldUpdateOperationsInput | string
  }

  export type AlerteStockUpdateWithoutProduitInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    admin?: UserUpdateOneRequiredWithoutAlertesGereesNestedInput
  }

  export type AlerteStockUncheckedUpdateWithoutProduitInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type AlerteStockUncheckedUpdateManyWithoutProduitInput = {
    idAlerte?: StringFieldUpdateOperationsInput | string
    seuilMinimum?: IntFieldUpdateOperationsInput | number
    dateAlerte?: DateTimeFieldUpdateOperationsInput | Date | string
    statutAlerte?: EnumStatutAlerteFieldUpdateOperationsInput | $Enums.StatutAlerte
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type ProduitCreateManyCategorieInput = {
    idProduit?: string
    nom: string
    description: string
    prix: number
    quantiteStock: number
    typeProduit: string
    imageURL: string
    dateAjout?: Date | string
    statutProduit: $Enums.StatutProduit
    fournisseurId: string
  }

  export type ProduitUpdateWithoutCategorieInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    fournisseur?: UserUpdateOneRequiredWithoutProduitsNestedInput
    lignesCommande?: LigneCommandeUpdateManyWithoutProduitNestedInput
    alertesStock?: AlerteStockUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutCategorieInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    fournisseurId?: StringFieldUpdateOperationsInput | string
    lignesCommande?: LigneCommandeUncheckedUpdateManyWithoutProduitNestedInput
    alertesStock?: AlerteStockUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateManyWithoutCategorieInput = {
    idProduit?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    prix?: FloatFieldUpdateOperationsInput | number
    quantiteStock?: IntFieldUpdateOperationsInput | number
    typeProduit?: StringFieldUpdateOperationsInput | string
    imageURL?: StringFieldUpdateOperationsInput | string
    dateAjout?: DateTimeFieldUpdateOperationsInput | Date | string
    statutProduit?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    fournisseurId?: StringFieldUpdateOperationsInput | string
  }

  export type LigneCommandeCreateManyCommandeInput = {
    idLigneCommande?: string
    quantite: number
    prixUnitaire: number
    produitId: string
  }

  export type LigneCommandeUpdateWithoutCommandeInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    produit?: ProduitUpdateOneRequiredWithoutLignesCommandeNestedInput
  }

  export type LigneCommandeUncheckedUpdateWithoutCommandeInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    produitId?: StringFieldUpdateOperationsInput | string
  }

  export type LigneCommandeUncheckedUpdateManyWithoutCommandeInput = {
    idLigneCommande?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    produitId?: StringFieldUpdateOperationsInput | string
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