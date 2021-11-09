const admin = require("firebase-admin");
const serviceAccount = require("./secrets.json");

export const verifyIDToken = (token) => {
    if (!admin.apps.length) {
        admin.initialize({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://yhack-demo-4aedb.firebaseapp.com",
        });
    }
    return admin.auth().verifyIdToken(token).catch((error) => {
        throw error;
    });
};