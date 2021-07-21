import { readFile } from 'fs/promises';

const data = JSON.parse(
  await readFile(
    new URL('../database/tarot_images.json', import.meta.url)
  )
)
// console.log(data.cards)


export {
  data
}








  





