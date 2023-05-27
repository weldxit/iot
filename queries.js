const pool = require('./database')

const getSensordata=(req,res)=>{
    const data =[]
pool.query('select * from sensordata',(err,result)=>{
    if (err){
        throw err;
    }
    result.rows.map((result)=>{
       data.push(result.temp,result.humi)
    })
    res.status(200).send(data)

})

}

const postSensordata = (req, res) => {
  const { temp, humi } = req.body;

  pool.query(
    `INSERT INTO sensordata (temp, humi) VALUES (${temp}, ${humi})`,
    (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result);
      res.status(201).send('Data pushed');
    }
  );
};

module.exports ={getSensordata,postSensordata}
