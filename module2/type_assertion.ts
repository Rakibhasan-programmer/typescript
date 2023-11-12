{
    //
    
    
    // type assertion
    let anything: any;
    anything = "Learning web dev";

    (anything as string).length;
    console.log((anything as string).length);

    const kgToGm = (value: string | number): string | number | undefined => {
        if(typeof value === 'string') return parseInt(value)*1000;
        if(typeof value === 'number') return value*1000;

        return undefined;
    }

    console.log(kgToGm('34') as string);
    console.log(kgToGm(32));


    // try catch
    type CustomError = {
        message: string
    }

    try {

    }catch(err) {
        console.log((err as CustomError).message);
    }
    
    
    
    
    //
}