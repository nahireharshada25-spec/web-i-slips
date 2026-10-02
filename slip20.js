function divide(a, b)
{
    return new Promise((resolve, reject) => {
        if(b === 0)
        {
            reject("Denominator cannot be zero");
        }
        else
        {
            resolve(a / b);
        }
    });
}

divide(20, 5)
.then(result => {
    console.log("Result =", result);
})
.catch(error => {
    console.log("Error:", error);
});
