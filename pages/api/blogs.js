// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
export default async function handler(req, res) {
  /* fs.promises.readdir('blogdata',(err,data)=>{
    console.log(data)
    
    data.forEach((item)=>{
      console.log(item)
      fs.readFile(('blogdata/' + item ),(d)=>{
        allBlogs.push(d)
      })
    })
    res.status(200).json(allBlogs);
  })   */
  console.log(req.query.count)
  let data = await fs.promises.readdir('blogdata')
  data = data.slice(0,parseInt(req.query.count))
  let myFile
  let allBlogs = []  
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
      myFile = await fs.promises.readFile(('blogdata/' + item ),'utf-8')
      allBlogs.push(JSON.parse(myFile))
  } 
    res.status(200).json(allBlogs);
}
