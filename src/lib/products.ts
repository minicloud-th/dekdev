import voxelWorld from '@/assets/voxel-world.jpg';
import codeKit from '@/assets/code-kit.jpg';
import digitalWorld from '@/assets/digital-world.jpg';
export type Category = 'all' | 'games' | 'code' | 'assets';
export type Product = { id: string; name: string; category: Exclude<Category,'all'>; label: string; price: number; image: string; badge?: string; description: string; includes: string[] };
export const categories: {id:Category;name:string;english:string}[] = [{id:'all',name:'สินค้าทั้งหมด',english:'All products'},{id:'games',name:'สินค้าเกม',english:'Game essentials'},{id:'code',name:'โค้ด & เทมเพลต',english:'Code & templates'},{id:'assets',name:'ดิจิทัลแอสเซ็ต',english:'Digital assets'}];
export const products: Product[] = [
 {id:'voxel', name:'Voxel World — Starter Pack',category:'games',label:'GAME ASSETS',price:290,image:voxelWorld,badge:'ยอดนิยม',description:'โลกใบเล็กสำหรับไอเดียที่ยิ่งใหญ่ ชุดแอสเซ็ตสไตล์ Voxel สำหรับโปรเจกต์เกมของคุณ',includes:['ไฟล์โมเดลโลก Voxel','ชุดต้นไม้และสิ่งปลูกสร้าง','คู่มือเริ่มต้นใช้งาน']},
 {id:'next', name:'Next.js — Starter Kit',category:'code',label:'SOURCE CODE',price:590,image:codeKit,badge:'ใหม่',description:'เริ่มต้นโปรเจกต์เว็บด้วยโครงสร้างที่เป็นระเบียบ พร้อมหน้าตัวอย่างและชุด UI สำหรับนักพัฒนา',includes:['ซอร์สโค้ดตัวอย่าง','ชุด UI และหน้าตัวอย่าง','เอกสารประกอบการใช้งาน']},
 {id:'game-ui', name:'Game UI — Essentials',category:'games',label:'GAME UI KIT',price:190,image:digitalWorld,description:'ชุดองค์ประกอบ UI สำหรับเกม ให้คุณสร้างเมนูและหน้าจอเกมในสไตล์ของตัวเอง',includes:['ชุดปุ่มและไอคอนเกม','องค์ประกอบเมนู','ไฟล์ต้นฉบับสำหรับปรับแต่ง']},
 {id:'dev-icons',name:'Developer — Icon Pack',category:'assets',label:'DIGITAL ASSETS',price:149,image:codeKit,description:'ไอคอนสำหรับนักสร้างสรรค์ พร้อมนำไปใช้ในเว็บ แอป และโปรเจกต์ส่วนตัว',includes:['ไอคอนในรูปแบบ SVG','ไฟล์สำหรับ Figma','สีและขนาดที่ปรับแต่งได้']},
];
export const money = (value:number) => `฿${value.toLocaleString('th-TH')}`;
export const pageHead = (title:string,description:string) => ({meta:[{title:`${title} | dekdev`},{name:'description',content:description},{property:'og:title',content:`${title} | dekdev`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]});
