module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        output = input + 1 
        res.send(output.toString())
    },
    add2 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        input++
        output = input
        res.send(output.toString())
    },
    LCM (req,res){
        input1 = parseInt(JSON.stringify(req.body['input1']))
        input2 = parseInt(JSON.stringify(req.body['input2']))
        console.log('input1 = '+ input1)
        console.log('input2 = '+ input2)
        let min = (input1 > input2)
        // while loop
        while (true) {
            if (min % input1 == 0 && min % input2 == 0) {
                output = console.log(`The LCM of ${input1} and ${input2} is ${min}`);
                break;
            }
            min++;
        }
        res.send(output.toString())
    }



}