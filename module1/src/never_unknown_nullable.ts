{
  //

  // nullable types - those whose value is null
  const searchName = (value: string | null) => {
    if (value) console.log("Searching");
    else console.log("Nothing to search");
  };
  searchName("Rakib");
  searchName(null);

  // unknown types
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if(typeof value === 'number') console.log(`Speed is ${(value*1000)/3600} ms^-1`);
    else if(typeof value === 'string') console.log(`Speed is ${(parseInt(value)*1000)/3600} ms^-1`);
    else console.log("Wrong input");
  }
  getSpeedInMeterPerSecond(100);
  getSpeedInMeterPerSecond("100");
  getSpeedInMeterPerSecond(null);


  // never type
  function throwError(msg: string): never {
    throw new Error(msg);
  }
  throwError("Shit man");




  //
}
