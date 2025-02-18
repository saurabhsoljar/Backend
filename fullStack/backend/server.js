import express from 'express';

const app = express();

app.use(express.static('dist'));

// app.get('/',(req,res)=>{
//   res.send('Server is ready');
// });

// get a list of 5 jokes
app.get('/api/jokes',(req, res) =>{
  const jokes = [
    {
      "id": 1,
      "title": "Kucing dan Keyboard",
      "content": "Kenapa kucing suka duduk di keyboard? Karena dia mau jadi 'Ctrl' + 'C' hidupmu!"
    },
    {
      "id": 2,
      "title": "Ayam di Restoran",
      "content": "Kenapa ayam tidak boleh ke restoran? Karena nanti dia akan di-'charge'!"
    },
    {
      "id": 3,
      "title": "Buku yang Malas",
      "content": "Kenapa buku tidak pernah selesai baca? Karena dia selalu 'bookmark'!"
    },
    {
      "id": 4,
      "title": "Kopi yang Galau",
      "content": "Kenapa kopi selalu curhat? Karena dia butuh 'espresso' diri!"
    },
    {
      "id": 5,
      "title": "Matematika dan Cinta",
      "content": "Kenapa matematika dan cinta mirip? Karena keduanya bikin pusing, tapi kalau berhasil, rasanya indah!"
    }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
  
})