exports.formatDates = list => {
  return list.map(obj => {
    const newObj = { ...obj };
    newDate = new Date(newObj.created_at);
    newObj.created_at = newDate;
    console.log(newObj);
    return newObj;
  });
};

// list = [{}, {}]
// new Obj = {}
//
