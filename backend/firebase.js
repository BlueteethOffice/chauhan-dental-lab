let db;
let admin;

try {
  const { initializeApp, cert } = require('firebase-admin/app');
  const { getFirestore } = require('firebase-admin/firestore');
  
  let serviceAccount;
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    try {
      serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
    } catch (parseErr) {
      console.error("❌ Error parsing FIREBASE_SERVICE_ACCOUNT environment variable:", parseErr);
      throw parseErr;
    }
  } else {
    serviceAccount = require("./serviceAccountKey.json");
  }

  const app = initializeApp({
    credential: cert(serviceAccount)
  });

  db = getFirestore(app);
  admin = app;
  console.log("✅ Firebase connected successfully.");
} catch (err) {
  console.warn("⚠️  Firebase not configured (serviceAccountKey.json or FIREBASE_SERVICE_ACCOUNT missing). Running in mock mode.");

  // Mock Firestore db so server doesn't crash
  const mockCollection = () => ({
    get: async () => ({ forEach: () => {} }),
    add: async () => ({ id: "mock-id" }),
    doc: () => ({
      get: async () => ({ exists: false, data: () => ({}) }),
      set: async () => {},
      update: async () => {},
      delete: async () => {},
    }),
    where: () => mockCollection(),
    orderBy: () => mockCollection(),
  });

  db = { collection: mockCollection };
  admin = null;
}

module.exports = { db, admin };
