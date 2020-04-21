import db from './db.json';

export default new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(db);
    }, 1000);
})