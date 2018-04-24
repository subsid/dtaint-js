const mockDb = {
  dbCall: function(query) {
    console.log(`database called with query: ${query}`);
  }
};


export function dbCall(query) {
  return mockDb.dbCall(query)
}
