const a = {
  explainVersion: "1",
  queryPlanner: {
    namespace: "practice-mongo.movies",
    indexFilterSet: false,
    parsedQuery: { year: { $eq: 2008 } },
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: "COLLSCAN",
      filter: { year: { $eq: 2008 } },
      direction: "forward",
    },
    rejectedPlans: [],
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 47,
    executionTimeMillis: 0,
    totalKeysExamined: 0,
    totalDocsExamined: 1000,
    executionStages: {
      stage: "COLLSCAN",
      filter: { year: { $eq: 2008 } },
      nReturned: 47,
      executionTimeMillisEstimate: 0,
      works: 1002,
      advanced: 47,
      needTime: 954,
      needYield: 0,
      saveState: 1,
      restoreState: 1,
      isEOF: 1,
      direction: "forward",
      docsExamined: 1000,
    },
  },
  command: { find: "movies", filter: { year: 2008 }, $db: "practice-mongo" },
  serverInfo: {
    host: "aa98c6d11657",
    port: 27017,
    version: "5.0.6",
    gitVersion: "212a8dbb47f07427dae194a9c75baec1d81d9259",
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
  },
  ok: 1,
};