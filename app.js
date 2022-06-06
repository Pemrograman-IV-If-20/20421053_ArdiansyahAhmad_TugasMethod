const express = require('express')
const app = express()

app.use(express.json())

app.use(express.urlencoded({
    extended: true
}))

app.get('/', function (req, res) {
  res.send('ANUuuu')
})

// app.get('/data-mahasiswa/:npm/:nama/:alamat', (req,res)=>{
//     res.json({
//         npm:req.params.npm,
//         nama:req.params.nama,
//         alamat:req.params.alamat
//     })
// });
// app.get('/data-mahasiswa-query',(req,res)=>{
//     res.json({
//         npm:req.query.npm,
//         nama:req.query.nama,
//         alamat:req.query.alamat
//     })
// });

//=>localhost:3000/test/20421053/Ardiansyah Ahmad/Ilmu Komputer/Informatika?umur= 19 Tahun&alamat= BDL&status=Menunggu kepastian
app.post('/test/:npm/:nama/:fakultas/:prodi', function (req, res) {
    res.json({
        npm: req.params.npm,
        nama: req.params.nama,
        fakultas: req.params.fakultas,
        prodi: req.params.prodi,
        umur: req.query.umur,        
        alamat: req.query.alamat,
        status: req.query.status,
        agama: req.body.agama,
        gender: req.body.gender,
        hobi: req.body.hobi

    })
})

app.listen(3000)