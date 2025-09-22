
import type { Question, Flashcard, ProgressData } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    question: "For MongoDB's WiredTiger storage engine, which file system is generally recommended for best performance?",
    options: ["ext4", "NTFS", "HFS+", "XFS"],
    correctAnswer: "XFS",
    explanation: "XFS is the recommended file system for MongoDB's WiredTiger storage engine on Linux, as it generally provides better performance for MongoDB workloads."
  },
  {
    question: "Why should a MongoDB replica set ideally have an odd number of voting members?",
    options: [
      "To improve read performance",
      "To ensure a strict majority can be reached for elections",
      "To reduce network traffic",
      "To allow for more arbiters"
    ],
    correctAnswer: "To ensure a strict majority can be reached for elections",
    explanation: "An odd number of voting members ensures that a majority can always be reached in primary elections, preventing split-brain scenarios where two nodes believe they are the primary."
  },
  {
    question: "What is the primary principle of MongoDB data modeling?",
    options: [
      "Data that is normalized is fastest",
      "Application needs should drive the schema design",
      "Always embed documents for performance",
      "Use as many indexes as possible"
    ],
    correctAnswer: "Application needs should drive the schema design",
    explanation: "MongoDB's flexible schema is best utilized when the data model is designed based on the application's specific query patterns and data access needs."
  },
  {
    question: "Which of the following is NOT a valid stage in a MongoDB aggregation pipeline?",
    options: ["$match", "$group", "$sort", "$where"],
    correctAnswer: "$where",
    explanation: "$where is a query operator, not an aggregation pipeline stage. While it can be used in queries, it's not a standard stage like $match, $group, or $sort."
  },
   {
    question: "What is a compound index in MongoDB?",
    options: [
      "An index on a single field that stores complex data",
      "An index that includes keys from multiple fields",
      "An index on an embedded document",
      "An index that uses a hashed value"
    ],
    correctAnswer: "An index that includes keys from multiple fields",
    explanation: "A compound index holds references to items based on the values of multiple fields, allowing for more efficient queries on those fields."
  }
];

export const FLASHCARDS: Flashcard[] = [
    {
        id: 1,
        category: "Fundamentals",
        front: "What is BSON?",
        back: "Binary JSON. A binary-encoded serialization of JSON-like documents. It supports more data types than JSON.",
        example: "{ 'name': 'Mongo', 'type': 'Database', 'version': new BinData(0, '...') }"
    },
    {
        id: 2,
        category: "Architecture",
        front: "What is a Replica Set?",
        back: "A group of mongod processes that maintain the same data set. Replica sets provide redundancy and high availability.",
    },
    {
        id: 3,
        category: "Operations",
        front: "What does the '$lookup' stage do?",
        back: "Performs a left outer join to an unsharded collection in the same database to filter in documents from the 'joined' collection for processing.",
        example: "db.orders.aggregate([{ $lookup: { from: 'inventory', localField: 'item', foreignField: 'sku', as: 'inventory_docs' } }])"
    },
    {
        id: 4,
        category: "Performance",
        front: "What is a Covered Query?",
        back: "A query that can be satisfied entirely using an index, without having to examine any documents.",
        example: "A query on { name: 1, email: 1 } with a projection of { _id: 0, name: 1, email: 1 } can be covered by an index on { name: 1, email: 1 }."
    }
];

export const PROGRESS_DATA: ProgressData[] = [
    { name: 'Modeling', completed: 80 },
    { name: 'Replication', completed: 65 },
    { name: 'Indexing', completed: 90 },
    { name: 'Aggregation', completed: 75 },
    { name: 'Security', completed: 40 },
    { name: 'Sharding', completed: 55 },
];
