const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/',(req,res)=>{
    const temp="working"
    res.json(temp);
});
app.post('/bfhl', (req, res) => {
const arr = req.body.data;
console.log(arr);

const user = "yogesh_duggar_12072003";

const alphabets = arr.filter(ch => /[a-zA-Z]/.test(ch)).map(ch => ch.toUpperCase());
const oddArr = arr.filter(item => item % 2 !== 0);
const evenArr = arr.filter(item => item % 2 === 0);



const resp = {
    is_success: true,
    user_id: user,
    email:"yogesh2403.be21@chitkara.edu.in",
    roll_no:"2110992403",    
    even_numbers: evenArr,
    odd_numbers: oddArr,
    alphabets_uppercase: alphabets
};

res.json(resp);
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});